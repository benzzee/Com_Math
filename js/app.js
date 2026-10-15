/**
 * Application Engine for Computer Mathematics (21901-2005) Slides
 * Teacher: Miss Rungnapha Eiamchukul (นางสาวรุ่งนภา เอี่ยมชูกุล)
 */

// Application State
const state = {
  currentSlideIndex: 0,
  isLaserActive: false,
  isPenActive: false,
  penColor: "#facc15",
  penSize: 3,
  isDrawing: false,
  timerSeconds: 300,
  timerInterval: null,
  isTimerRunning: false,
  soundEnabled: true,
  theme: "light",
  // Unit 1 Sim State
  cpuStep: 0,
  // Unit 7 Sim State
  switchA: 0,
  switchB: 0,
  currentGate: "AND"
};

// Web Audio API Synthesizer (Zero external audio files required!)
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!state.soundEnabled) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playSuccess() {
    if (!state.soundEnabled) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.09);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.09 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.09);
      osc.stop(this.ctx.currentTime + i * 0.09 + 0.25);
    });
  }

  playAlarm() {
    if (!state.soundEnabled) return;
    this.init();
    for (let i = 0; i < 3; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(880, this.ctx.currentTime + i * 0.2);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.2);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.2 + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.2);
      osc.stop(this.ctx.currentTime + i * 0.2 + 0.12);
    }
  }
}

const sfx = new SoundFX();

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initBackgroundParticles();
  initUnitDropdown();
  initDrawingCanvas();
  initLaserPointer();
  initKeyboardNav();
  initTimer();
  renderSlide(0);
});

// Render Background Math Particles
function initBackgroundParticles() {
  const container = document.getElementById("mathBgDecor");
  if (!container) return;
  const symbols = ["π", "Σ", "∫", "√x", "01", "10", "A∪B", "p∧q", "λ", "Δ", "≈", "≠", "∞", "[M]"];
  container.innerHTML = "";
  for (let i = 0; i < 22; i++) {
    const span = document.createElement("span");
    span.className = "math-symbol-particle";
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = `${Math.random() * 95}%`;
    span.style.top = `${Math.random() * 95}%`;
    span.style.fontSize = `${Math.random() * 28 + 18}px`;
    span.style.animationDelay = `${Math.random() * 8}s`;
    span.style.animationDuration = `${Math.random() * 12 + 10}s`;
    container.appendChild(span);
  }
}

// Populate Unit Selector Dropdown
function initUnitDropdown() {
  const select = document.getElementById("unitSelect");
  if (!select) return;
  select.innerHTML = "";
  COURSE_INFO.units.forEach(u => {
    const opt = document.createElement("option");
    opt.value = u.id;
    opt.textContent = `${u.badge}: ${u.title}`;
    select.appendChild(opt);
  });
  select.addEventListener("change", (e) => {
    goToSlideByUnit(parseInt(e.target.value));
  });
}

// Slide Navigation
function renderSlide(index) {
  if (index < 0 || index >= SLIDES.length) return;
  state.currentSlideIndex = index;
  const slide = SLIDES[index];

  // Update Navigation UI
  document.getElementById("btnPrev").disabled = index === 0;
  document.getElementById("btnNext").disabled = index === SLIDES.length - 1;

  // Progress Bar & Counter
  const progressPercent = ((index + 1) / SLIDES.length) * 100;
  document.getElementById("progressBar").style.width = `${progressPercent}%`;
  document.getElementById("slideCounter").textContent = `สไลด์ ${index + 1} จาก ${SLIDES.length}`;

  // Update Unit Dropdown selection
  const select = document.getElementById("unitSelect");
  if (select && select.value !== String(slide.unitId)) {
    select.value = slide.unitId;
  }

  // Header Elements
  document.getElementById("slideUnitBadge").textContent = slide.unitTitle || `หน่วยที่ ${slide.unitId}`;
  document.getElementById("slideTopicTag").textContent = slide.tag || "เนื้อหาบทเรียน";
  document.getElementById("slideTitle").innerHTML = slide.title;
  document.getElementById("slideSubtitle").innerHTML = slide.subtitle || "";

  // Body Content
  const bodyEl = document.getElementById("slideBody");
  bodyEl.innerHTML = slide.content;

  // Presenter Notes
  document.getElementById("notesContent").textContent = slide.notes || "ไม่มีบันทึกเพิ่มเติมสำหรับสไลด์นี้";

  // Clear Canvas for new slide
  clearCanvas();

  // Typeset Math if MathJax is available
  if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetPromise([bodyEl]).catch(() => {});
  }

  // Trigger sound
  sfx.playClick();
}

function nextSlide() {
  if (state.currentSlideIndex < SLIDES.length - 1) {
    renderSlide(state.currentSlideIndex + 1);
  }
}

function prevSlide() {
  if (state.currentSlideIndex > 0) {
    renderSlide(state.currentSlideIndex - 1);
  }
}

function goToSlideByUnit(unitId) {
  const targetIndex = SLIDES.findIndex(s => s.unitId === unitId);
  if (targetIndex !== -1) {
    renderSlide(targetIndex);
  }
}

// Keyboard Navigation & Shortcuts
function initKeyboardNav() {
  window.addEventListener("keydown", (e) => {
    // Ignore keystrokes inside text inputs
    if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT" || e.target.tagName === "TEXTAREA") {
      return;
    }

    switch (e.key) {
      case "ArrowRight":
      case "PageDown":
      case " ":
        e.preventDefault();
        nextSlide();
        break;
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        prevSlide();
        break;
      case "Home":
        e.preventDefault();
        renderSlide(0);
        break;
      case "End":
        e.preventDefault();
        renderSlide(SLIDES.length - 1);
        break;
      case "f":
      case "F":
        toggleFullscreen();
        break;
      case "p":
      case "P":
        toggleLaserPointer();
        break;
      case "d":
      case "D":
        toggleDrawingPen();
        break;
      case "t":
      case "T":
        toggleTimerPopup();
        break;
      case "n":
      case "N":
        toggleNotes();
        break;
      case "o":
      case "O":
        toggleOverviewModal();
        break;
      case "?":
      case "h":
      case "H":
        toggleHelpModal();
        break;
    }
  });
}

// Fullscreen Presentation Mode
function toggleFullscreen() {
  const elem = document.documentElement;
  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Laser Pointer Tool
function initLaserPointer() {
  const dot = document.getElementById("laserDot");
  window.addEventListener("mousemove", (e) => {
    if (!state.isLaserActive) return;
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
  });
}

function toggleLaserPointer() {
  state.isLaserActive = !state.isLaserActive;
  const dot = document.getElementById("laserDot");
  const btn = document.getElementById("btnLaser");
  if (state.isLaserActive) {
    dot.style.display = "block";
    btn.classList.add("active");
    // Turn off drawing mode if active
    if (state.isPenActive) toggleDrawingPen();
  } else {
    dot.style.display = "none";
    btn.classList.remove("active");
  }
}

// Digital Drawing Pen Canvas
let ctx = null;
function initDrawingCanvas() {
  const canvas = document.getElementById("drawingCanvas");
  if (!canvas) return;
  ctx = canvas.getContext("2d");

  function resizeCanvas() {
    const stage = document.getElementById("slideStage");
    if (stage) {
      canvas.width = stage.clientWidth;
      canvas.height = stage.clientHeight;
    }
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDraw);
  canvas.addEventListener("mouseleave", stopDraw);

  // Touch Support for iPads and Interactive Boards
  canvas.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const mouseEvent = new MouseEvent("mousedown", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
  });
  canvas.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
  });
  canvas.addEventListener("touchend", () => {
    const mouseEvent = new MouseEvent("mouseup", {});
    canvas.dispatchEvent(mouseEvent);
  });
}

function startDraw(e) {
  if (!state.isPenActive) return;
  state.isDrawing = true;
  ctx.beginPath();
  const rect = e.target.getBoundingClientRect();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
  if (!state.isPenActive || !state.isDrawing) return;
  const rect = e.target.getBoundingClientRect();
  ctx.strokeStyle = state.penColor;
  ctx.lineWidth = state.penSize;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  ctx.stroke();
}

function stopDraw() {
  state.isDrawing = false;
  if (ctx) ctx.closePath();
}

function toggleDrawingPen() {
  state.isPenActive = !state.isPenActive;
  const canvas = document.getElementById("drawingCanvas");
  const toolbar = document.getElementById("penToolbar");
  const btn = document.getElementById("btnPen");

  if (state.isPenActive) {
    canvas.classList.add("pen-active");
    toolbar.classList.add("show");
    btn.classList.add("active");
    if (state.isLaserActive) toggleLaserPointer();
  } else {
    canvas.classList.remove("pen-active");
    toolbar.classList.remove("show");
    btn.classList.remove("active");
  }
}

function setPenColor(color, element) {
  state.penColor = color;
  document.querySelectorAll(".pen-color-dot").forEach(d => d.classList.remove("active"));
  if (element) element.classList.add("active");
}

function clearCanvas() {
  const canvas = document.getElementById("drawingCanvas");
  if (canvas && ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// Classroom Countdown Timer
function initTimer() {
  updateTimerDisplay();
}

function toggleTimerPopup() {
  const popup = document.getElementById("timerPopup");
  popup.classList.toggle("open");
}

function setTimerPreset(seconds) {
  pauseTimer();
  state.timerSeconds = seconds;
  updateTimerDisplay();
}

function startTimer() {
  if (state.isTimerRunning) return;
  state.isTimerRunning = true;
  document.getElementById("btnTimerStart").textContent = "หยุดชั่วคราว (Pause)";
  state.timerInterval = setInterval(() => {
    if (state.timerSeconds > 0) {
      state.timerSeconds--;
      updateTimerDisplay();
    } else {
      pauseTimer();
      sfx.playAlarm();
      alert("⏰ หมดเวลาทำกิจกรรมแล้วค่ะ!");
    }
  }, 1000);
}

function pauseTimer() {
  state.isTimerRunning = false;
  if (state.timerInterval) clearInterval(state.timerInterval);
  document.getElementById("btnTimerStart").textContent = "เริ่มจับเวลา (Start)";
}

function toggleTimerPlay() {
  if (state.isTimerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function resetTimer() {
  pauseTimer();
  state.timerSeconds = 300;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const m = Math.floor(state.timerSeconds / 60);
  const s = state.timerSeconds % 60;
  const str = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  document.getElementById("timerDigits").textContent = str;
}

// Presenter Notes Toggle
function toggleNotes() {
  const drawer = document.getElementById("notesDrawer");
  drawer.classList.toggle("open");
}

// Overview Grid Modal
function toggleOverviewModal() {
  const modal = document.getElementById("overviewModal");
  modal.classList.toggle("open");
  if (modal.classList.contains("open")) {
    renderOverviewGrid();
  }
}

function renderOverviewGrid() {
  const container = document.getElementById("overviewBody");
  container.innerHTML = "";
  SLIDES.forEach((slide, idx) => {
    const card = document.createElement("div");
    card.className = `slide-thumb-card ${idx === state.currentSlideIndex ? "active" : ""}`;
    card.innerHTML = `
      <div class="thumb-num">สไลด์ที่ ${idx + 1} • หน่วย ${slide.unitId}</div>
      <div class="thumb-title">${slide.title.replace(/<[^>]*>?/gm, "")}</div>
    `;
    card.addEventListener("click", () => {
      renderSlide(idx);
      toggleOverviewModal();
    });
    container.appendChild(card);
  });
}

// Help Modal
function toggleHelpModal() {
  const modal = document.getElementById("helpModal");
  modal.classList.toggle("open");
}

// Theme Switcher (Light / Dark)
function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", state.theme);
  const btn = document.getElementById("btnTheme");
  btn.textContent = state.theme === "light" ? "🌙" : "☀️";
}

// Sound Toggle
function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  const btn = document.getElementById("btnSound");
  btn.textContent = state.soundEnabled ? "🔊" : "🔇";
}

// -------------------------------------------------------------
// Interactive Slide Widgets
// -------------------------------------------------------------

// 1. CPU Instruction Cycle Step Simulation (Unit 1)
function simulateCpuStep() {
  const steps = [
    {
      pc: "0x0001",
      mem: "LOAD 15, R1",
      ir: "-- ว่าง --",
      alu: "รอคำสั่ง...",
      active: "simPC",
      msg: "🚀 <strong>เริ่มต้น:</strong> Program Counter (PC) ชี้ตำแหน่งคำสั่งแรก 0x0001 ในหน่วยความจำหลัก"
    },
    {
      pc: "0x0002",
      mem: "LOAD 15, R1",
      ir: "LOAD 15, R1",
      alu: "รอคำสั่ง...",
      active: "simIR",
      msg: "📥 <strong>Fetch Cycle:</strong> CPU ดึงคำสั่งจากแรมมาเก็บไว้ใน Instruction Register (IR) และบวกค่า PC เป็น 0x0002"
    },
    {
      pc: "0x0002",
      mem: "ADD 10, R1",
      ir: "LOAD 15, R1",
      alu: "ถอดรหัส (Decode)...",
      active: "simALU",
      msg: "🔍 <strong>Decode:</strong> CPU ทำการถอดรหัสคำสั่งว่าต้องโหลดข้อมูลค่า 15 เข้าสู่รีจิสเตอร์ R1"
    },
    {
      pc: "0x0002",
      mem: "ADD 10, R1",
      ir: "LOAD 15, R1",
      alu: "R1 = 15 (เสร็จสิ้น)",
      active: "simALU",
      msg: "⚡ <strong>Execute Cycle:</strong> ทำการประมวลผลคำสั่งสำเร็จ! จากนั้นวนรอบกลับไป Fetch คำสั่งถัดไปที่ PC ชี้อยู่"
    }
  ];

  state.cpuStep = (state.cpuStep + 1) % steps.length;
  const cur = steps[state.cpuStep];

  document.querySelectorAll(".sim-card").forEach(c => c.classList.remove("active-step"));
  const activeEl = document.getElementById(cur.active);
  if (activeEl) activeEl.classList.add("active-step");

  document.getElementById("valPC").textContent = cur.pc;
  document.getElementById("valMem").textContent = cur.mem;
  document.getElementById("valIR").textContent = cur.ir;
  document.getElementById("valALU").textContent = cur.alu;
  document.getElementById("simStatusBanner").innerHTML = cur.msg;
  sfx.playClick();
}

function resetCpuSim() {
  state.cpuStep = -1;
  simulateCpuStep();
}

// 2. Quick Quiz Answer Check
function checkQuizAnswer(btn, isCorrect, explanation) {
  const parent = btn.closest(".quiz-check-card");
  const feedback = parent.querySelector(".quiz-feedback-box");
  feedback.style.display = "block";

  if (isCorrect) {
    feedback.innerHTML = `<span style="color: #10b981;">🎉 ${explanation}</span>`;
    btn.style.background = "#10b981";
    btn.style.color = "#ffffff";
    sfx.playSuccess();
  } else {
    feedback.innerHTML = `<span style="color: #ef4444;">❌ ลองใหม่อีกครั้งนะคะ: ${explanation}</span>`;
    btn.style.background = "#ef4444";
    btn.style.color = "#ffffff";
  }
}

// 3. Interactive Venn Diagram (Unit 3)
function setVennMode(mode) {
  const circleA = document.getElementById("vennCircleA");
  const circleB = document.getElementById("vennCircleB");
  const universe = document.getElementById("vennUniverse");
  const title = document.getElementById("vennTitle");
  const desc = document.getElementById("vennDesc");
  const sql = document.getElementById("vennSql");
  if (!circleA || !circleB) return;

  // Reset
  circleA.style.fill = "rgba(99, 102, 241, 0.15)";
  circleB.style.fill = "rgba(249, 115, 22, 0.15)";
  universe.style.fill = "rgba(148, 163, 184, 0.08)";

  if (mode === "union") {
    circleA.style.fill = "rgba(99, 102, 241, 0.7)";
    circleB.style.fill = "rgba(249, 115, 22, 0.7)";
    title.textContent = "การดำเนินการ: ยูเนียน (A ∪ B)";
    desc.textContent = "นำสมาชิกทั้งหมดที่อยู่ในเซต A หรืออยู่ในเซต B หรืออยู่ทั้งคู่มารวมกัน";
    sql.innerHTML = "เปรียบเทียบใน SQL: <code>SELECT * FROM A UNION SELECT * FROM B</code>";
  } else if (mode === "intersect") {
    circleA.style.fill = "rgba(99, 102, 241, 0.15)";
    circleB.style.fill = "rgba(249, 115, 22, 0.15)";
    title.textContent = "การดำเนินการ: อินเตอร์เซกชัน (A ∩ B)";
    desc.textContent = "เอาเฉพาะสมาชิกที่ซ้ำกัน (อยู่ทั้งใน A และใน B พร้อมกัน)";
    sql.innerHTML = "เปรียบเทียบใน SQL: <code>INNER JOIN (จุดร่วมที่ตรงกัน)</code>";
  } else if (mode === "diff") {
    circleA.style.fill = "rgba(99, 102, 241, 0.85)";
    circleB.style.fill = "rgba(148, 163, 184, 0.1)";
    title.textContent = "การดำเนินการ: ผลต่าง (A - B)";
    desc.textContent = "สมาชิกที่อยู่ใน A ทั้งหมด แต่ต้องไม่เป็นสมาชิกของ B";
    sql.innerHTML = "เปรียบเทียบใน SQL: <code>WHERE B.id IS NULL (LEFT EXCEPT)</code>";
  } else if (mode === "comp") {
    universe.style.fill = "rgba(245, 158, 11, 0.35)";
    circleA.style.fill = "rgba(255, 255, 255, 0.9)";
    title.textContent = "การดำเนินการ: คอมพลีเมนต์ (A')";
    desc.textContent = "สมาชิกทั้งหมดที่อยู่ในเอกภพสัมพัทธ์ U แต่ไม่อยู่ในเซต A";
    sql.innerHTML = "เปรียบเทียบใน SQL: <code>WHERE NOT IN (เซต A)</code>";
  }
  sfx.playClick();
}

// 4. Base Number Converter (Unit 6)
function calculateBases(val) {
  const num = parseInt(val, 10);
  if (isNaN(num) || num < 0) {
    document.getElementById("resDec").textContent = "-";
    document.getElementById("resBin").textContent = "-";
    document.getElementById("resOct").textContent = "-";
    document.getElementById("resHex").textContent = "-";
    return;
  }

  const bin = num.toString(2);
  const oct = num.toString(8);
  const hex = num.toString(16).toUpperCase();

  document.getElementById("resDec").textContent = num;
  document.getElementById("resBin").textContent = bin;
  document.getElementById("resOct").textContent = oct;
  document.getElementById("resHex").textContent = hex;

  // Show steps
  const explainer = document.getElementById("convSteps");
  if (explainer) {
    explainer.innerHTML = `
      <strong>วิธีการคิดแปลง ${num} ฐานสิบเป็นฐานสอง (หารสั้นด้วย 2):</strong><br>
      • ค่าฐานสอง: <strong>${bin}₂</strong> (กลุ่ม 4 บิต: ${bin.padStart(Math.ceil(bin.length/4)*4, '0')})<br>
      • ค่าฐานแปด: <strong>${oct}₈</strong><br>
      • ค่าฐานสิบหก: <strong>0x${hex}</strong>
    `;
  }
}

// 5. Logic Gate Live Simulator (Unit 7)
function toggleSwitch(which) {
  if (which === "A") {
    state.switchA = state.switchA === 0 ? 1 : 0;
    const btn = document.getElementById("switchA");
    const badge = document.getElementById("badgeA");
    badge.textContent = state.switchA ? "1 (ON)" : "0 (OFF)";
    btn.classList.toggle("active", state.switchA === 1);
  } else {
    state.switchB = state.switchB === 0 ? 1 : 0;
    const btn = document.getElementById("switchB");
    const badge = document.getElementById("badgeB");
    badge.textContent = state.switchB ? "1 (ON)" : "0 (OFF)";
    btn.classList.toggle("active", state.switchB === 1);
  }
  updateGateSim();
  sfx.playClick();
}

function updateGateSim() {
  const gateSel = document.getElementById("gateSelect");
  if (!gateSel) return;
  state.currentGate = gateSel.value;

  const iconDisplay = document.getElementById("gateIconDisplay");
  const formulaDisplay = document.getElementById("gateFormulaDisplay");
  const lampBox = document.getElementById("lampBox");
  const lampStatus = document.getElementById("lampStatusText");

  iconDisplay.textContent = state.currentGate;

  let out = 0;
  const a = state.switchA;
  const b = state.switchB;

  switch (state.currentGate) {
    case "AND":
      out = a & b;
      formulaDisplay.textContent = "Y = A • B";
      break;
    case "OR":
      out = a | b;
      formulaDisplay.textContent = "Y = A + B";
      break;
    case "NOT":
      out = a === 0 ? 1 : 0;
      formulaDisplay.textContent = "Y = Ā (พิจารณาเฉพาะสวิตช์ A)";
      break;
    case "NAND":
      out = (a & b) === 1 ? 0 : 1;
      formulaDisplay.textContent = "Y = (A • B)̄";
      break;
    case "NOR":
      out = (a | b) === 1 ? 0 : 1;
      formulaDisplay.textContent = "Y = (A + B)̄";
      break;
    case "XOR":
      out = a ^ b;
      formulaDisplay.textContent = "Y = A ⊕ B (ต่างกันได้ 1)";
      break;
  }

  if (out === 1) {
    lampBox.classList.add("lit");
    lampStatus.textContent = `เอาต์พุต Y = 1 (ไฟสว่าง 💡)`;
  } else {
    lampBox.classList.remove("lit");
    lampStatus.textContent = `เอาต์พุต Y = 0 (ไฟดับ)`;
  }
}

// 6. Celebration Trigger (Unit 8)
function triggerCelebration() {
  sfx.playSuccess();
  // Confetti effect via DOM
  const count = 60;
  for (let i = 0; i < count; i++) {
    const conf = document.createElement("div");
    conf.style.position = "fixed";
    conf.style.left = `${Math.random() * 100}vw`;
    conf.style.top = "-20px";
    conf.style.width = `${Math.random() * 12 + 6}px`;
    conf.style.height = `${Math.random() * 12 + 6}px`;
    conf.style.backgroundColor = ["#4f46e5", "#06b6d4", "#f59e0b", "#ec4899", "#10b981"][Math.floor(Math.random() * 5)];
    conf.style.borderRadius = "50%";
    conf.style.zIndex = "99999";
    conf.style.pointerEvents = "none";
    conf.style.transition = `transform ${Math.random() * 2 + 1.5}s ease-out, opacity 2s ease-out`;
    document.body.appendChild(conf);

    setTimeout(() => {
      conf.style.transform = `translate(${Math.random() * 120 - 60}px, ${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`;
      conf.style.opacity = "0";
    }, 20);

    setTimeout(() => {
      conf.remove();
    }, 3500);
  }
}
