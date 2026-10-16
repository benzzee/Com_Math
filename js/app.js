/**
 * Application Engine for Computer Mathematics (21901-2005)
 * Teacher: Miss Rungnapha Eiamchukul (นางสาวรุ่งนภา เอี่ยมชูกุล)
 * Course: Computer Mathematics (21901-2005) - Vocational Certificate (ปวช.)
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
  currentView: "portal", // "portal" or "slides"
  // Unit 1 Sim State
  cpuStep: 0
};

// Web Audio API Synthesizer (Zero external audio files required!)
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
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
    } catch (e) {}
  }

  playSuccess() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
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
    } catch (e) {}
  }

  playAlarm() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      for (let i = 0; i < 2; i++) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(880, this.ctx.currentTime + i * 0.15);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime + i * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.15 + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + i * 0.15);
        osc.stop(this.ctx.currentTime + i * 0.15 + 0.1);
      }
    } catch (e) {}
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

  // Render initial slide in memory
  renderSlide(0);

  // Check URL hash on page load
  handleHashNavigation();
  window.addEventListener("hashchange", handleHashNavigation);
});

// Hash navigation handler
function handleHashNavigation() {
  const hash = window.location.hash.toLowerCase();
  if (hash === "#unit1" || hash === "#slide-unit1") {
    openSlideDeck(1);
  } else if (hash === "#orientation" || hash === "#unit0") {
    openSlideDeck(0);
  } else if (hash.startsWith("#slide-")) {
    const num = parseInt(hash.replace("#slide-", ""), 10);
    if (!isNaN(num) && num >= 1 && num <= SLIDES.length) {
      openSlideDeckBySlideIndex(num - 1);
    }
  } else {
    // Default: Show Portal
    showPortal(false);
  }
}

// -------------------------------------------------------------
// Portal & Presentation View Switchers
// -------------------------------------------------------------

function showPortal(playSound = true) {
  state.currentView = "portal";
  const portal = document.getElementById("portalContainer");
  const pres = document.getElementById("presentationContainer");
  
  if (portal) portal.style.display = "flex";
  if (pres) pres.style.display = "none";
  
  // Turn off laser pointer or pen if open
  if (state.isLaserActive) toggleLaserPointer();
  if (state.isPenActive) toggleDrawingPen();
  
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (playSound) sfx.playClick();
}

function openSlideDeck(unitId = 1) {
  state.currentView = "slides";
  const portal = document.getElementById("portalContainer");
  const pres = document.getElementById("presentationContainer");
  
  if (portal) portal.style.display = "none";
  if (pres) pres.style.display = "flex";
  
  // Jump to appropriate slide
  goToSlideByUnit(unitId);
  
  // Resize canvas after container becomes visible
  setTimeout(() => {
    resizeCanvas();
  }, 60);

  window.scrollTo({ top: 0, behavior: "smooth" });
  sfx.playClick();
}

function openSlideDeckBySlideIndex(idx) {
  state.currentView = "slides";
  const portal = document.getElementById("portalContainer");
  const pres = document.getElementById("presentationContainer");
  
  if (portal) portal.style.display = "none";
  if (pres) pres.style.display = "flex";
  
  renderSlide(idx);
  
  setTimeout(() => {
    resizeCanvas();
  }, 60);

  window.scrollTo({ top: 0, behavior: "smooth" });
  sfx.playClick();
}

let toastTimer = null;
function showComingSoonToast(unitName) {
  const toast = document.getElementById("toastPopup");
  if (!toast) return;
  toast.innerHTML = `📢 <strong>${unitName}</strong><br><span style="font-size: 0.8rem; opacity: 0.9;">อยู่ระหว่างจัดทำสื่อการสอน จะเปิดให้เรียนรู้เร็วๆ นี้ค่ะ ✨</span>`;
  toast.style.display = "block";
  sfx.playAlarm();
  
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.style.display = "none";
  }, 3500);
}

// Render Background Math Particles
function initBackgroundParticles() {
  const container = document.getElementById("mathBgDecor");
  if (!container) return;
  const symbols = ["π", "Σ", "∫", "√x", "01", "10", "A∪B", "p∧q", "λ", "Δ", "≈", "≠", "∞", "CPU", "BUS", "Hz"];
  container.innerHTML = "";
  for (let i = 0; i < 22; i++) {
    const span = document.createElement("span");
    span.className = "math-symbol-particle";
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = `${Math.random() * 95}%`;
    span.style.top = `${Math.random() * 95}%`;
    span.style.fontSize = `${Math.random() * 26 + 18}px`;
    span.style.animationDelay = `${Math.random() * 8}s`;
    span.style.animationDuration = `${Math.random() * 12 + 10}s`;
    container.appendChild(span);
  }
}

// Populate Unit Selector Dropdown in Slide Navbar
function initUnitDropdown() {
  const select = document.getElementById("unitSelect");
  if (!select) return;
  select.innerHTML = "";

  // 1. Orientation Option
  const opt0 = document.createElement("option");
  opt0.value = 0;
  opt0.textContent = "📖 ปฐมนิเทศรายวิชา (ภาพรวมวิชา & เกณฑ์คะแนน)";
  select.appendChild(opt0);

  // 2. Ready Units (Unit 1)
  COURSE_INFO.units.filter(u => u.isReady).forEach(u => {
    const opt = document.createElement("option");
    opt.value = u.id;
    opt.textContent = `💻 ${u.unitNumber}: ${u.title}`;
    select.appendChild(opt);
  });

  select.addEventListener("change", (e) => {
    goToSlideByUnit(parseInt(e.target.value, 10));
  });
}

// Slide Navigation & Rendering
function renderSlide(index) {
  if (!window.SLIDES || index < 0 || index >= SLIDES.length) return;
  state.currentSlideIndex = index;
  const slide = SLIDES[index];

  // Update Navigation UI buttons
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  if (btnPrev) btnPrev.disabled = index === 0;
  if (btnNext) btnNext.disabled = index === SLIDES.length - 1;

  // Progress Bar & Counter
  const progressPercent = ((index + 1) / SLIDES.length) * 100;
  const progressBar = document.getElementById("progressBar");
  const slideCounter = document.getElementById("slideCounter");
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (slideCounter) slideCounter.textContent = `สไลด์ ${index + 1} จาก ${SLIDES.length}`;

  // Update Unit Dropdown selection
  const select = document.getElementById("unitSelect");
  if (select && select.value !== String(slide.unitId)) {
    select.value = slide.unitId;
  }

  // Header Elements
  const unitBadge = document.getElementById("slideUnitBadge");
  const topicTag = document.getElementById("slideTopicTag");
  const titleEl = document.getElementById("slideTitle");
  const subtitleEl = document.getElementById("slideSubtitle");

  if (unitBadge) unitBadge.textContent = slide.unitTitle || (slide.unitId === 0 ? "ปฐมนิเทศรายวิชา" : `หน่วยที่ ${slide.unitId}`);
  if (topicTag) topicTag.textContent = slide.tag || "เนื้อหาบทเรียน";
  if (titleEl) titleEl.innerHTML = slide.title;
  if (subtitleEl) subtitleEl.innerHTML = slide.subtitle || "";

  // Body Content
  const bodyEl = document.getElementById("slideBody");
  if (bodyEl) {
    bodyEl.innerHTML = slide.content;
  }

  // Presenter Notes
  const notesEl = document.getElementById("notesContent");
  if (notesEl) {
    notesEl.textContent = slide.notes || "ไม่มีบันทึกเพิ่มเติมสำหรับสไลด์นี้";
  }

  // Clear Canvas for new slide
  clearCanvas();

  // Typeset Math if MathJax is available
  if (window.MathJax && window.MathJax.typesetPromise && bodyEl) {
    MathJax.typesetPromise([bodyEl]).catch(() => {});
  }
}

function nextSlide() {
  if (state.currentSlideIndex < SLIDES.length - 1) {
    renderSlide(state.currentSlideIndex + 1);
    sfx.playClick();
  }
}

function prevSlide() {
  if (state.currentSlideIndex > 0) {
    renderSlide(state.currentSlideIndex - 1);
    sfx.playClick();
  }
}

function goToSlideByUnit(unitId) {
  if (!window.SLIDES) return;
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

    // Escape closes modals or returns to portal
    if (e.key === "Escape") {
      const overviewModal = document.getElementById("overviewModal");
      const helpModal = document.getElementById("helpModal");
      const timerPopup = document.getElementById("timerPopup");
      if (overviewModal && overviewModal.classList.contains("open")) {
        toggleOverviewModal();
        return;
      }
      if (helpModal && helpModal.classList.contains("open")) {
        toggleHelpModal();
        return;
      }
      if (timerPopup && timerPopup.classList.contains("open")) {
        toggleTimerPopup();
        return;
      }
      if (state.currentView === "slides") {
        showPortal();
        return;
      }
    }

    // Presentation Mode Shortcuts
    if (state.currentView === "slides") {
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
  if (!dot) return;
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
  if (!dot) return;
  if (state.isLaserActive) {
    dot.style.display = "block";
    if (btn) btn.classList.add("active");
    if (state.isPenActive) toggleDrawingPen();
  } else {
    dot.style.display = "none";
    if (btn) btn.classList.remove("active");
  }
}

// Digital Drawing Pen Canvas
let canvasCtx = null;

function resizeCanvas() {
  const canvas = document.getElementById("drawingCanvas");
  const stage = document.getElementById("slideStage");
  if (canvas && stage) {
    canvas.width = stage.clientWidth;
    canvas.height = stage.clientHeight;
  }
}

function initDrawingCanvas() {
  const canvas = document.getElementById("drawingCanvas");
  if (!canvas) return;
  canvasCtx = canvas.getContext("2d");

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDraw);
  canvas.addEventListener("mouseleave", stopDraw);

  // Touch Support for Interactive Screens / Tablets
  canvas.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
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
  if (!state.isPenActive || !canvasCtx) return;
  state.isDrawing = true;
  const rect = e.target.getBoundingClientRect();
  canvasCtx.beginPath();
  canvasCtx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  canvasCtx.strokeStyle = state.penColor;
  canvasCtx.lineWidth = state.penSize;
  canvasCtx.lineCap = "round";
  canvasCtx.lineJoin = "round";
}

function draw(e) {
  if (!state.isDrawing || !state.isPenActive || !canvasCtx) return;
  const rect = e.target.getBoundingClientRect();
  canvasCtx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  canvasCtx.stroke();
}

function stopDraw() {
  state.isDrawing = false;
}

function clearCanvas() {
  const canvas = document.getElementById("drawingCanvas");
  if (canvas && canvasCtx) {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function toggleDrawingPen() {
  state.isPenActive = !state.isPenActive;
  const btn = document.getElementById("btnPen");
  const toolbar = document.getElementById("penToolbar");
  const canvas = document.getElementById("drawingCanvas");

  if (state.isPenActive) {
    if (btn) btn.classList.add("active");
    if (toolbar) toolbar.style.display = "flex";
    if (canvas) canvas.classList.add("pen-active");
    if (state.isLaserActive) toggleLaserPointer();
  } else {
    if (btn) btn.classList.remove("active");
    if (toolbar) toolbar.style.display = "none";
    if (canvas) canvas.classList.remove("pen-active");
  }
}

function setPenColor(color, element) {
  state.penColor = color;
  document.querySelectorAll(".pen-color-dot").forEach(d => d.classList.remove("active"));
  if (element) element.classList.add("active");
}

// Classroom Countdown Timer
function initTimer() {
  updateTimerDisplay();
}

function toggleTimerPopup() {
  const popup = document.getElementById("timerPopup");
  if (popup) {
    popup.classList.toggle("open");
  }
}

function toggleTimerPlay() {
  const btn = document.getElementById("btnTimerStart");
  if (!state.isTimerRunning) {
    state.isTimerRunning = true;
    if (btn) {
      btn.textContent = "พักเวลา (Pause)";
      btn.classList.add("btn-accent");
      btn.classList.remove("btn-primary");
    }
    state.timerInterval = setInterval(() => {
      if (state.timerSeconds > 0) {
        state.timerSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(state.timerInterval);
        state.isTimerRunning = false;
        if (btn) {
          btn.textContent = "เริ่มจับเวลา (Start)";
          btn.classList.remove("btn-accent");
          btn.classList.add("btn-primary");
        }
        sfx.playAlarm();
        alert("⏰ หมดเวลาทำกิจกรรมแล้วค่ะ!");
      }
    }, 1000);
  } else {
    clearInterval(state.timerInterval);
    state.isTimerRunning = false;
    if (btn) {
      btn.textContent = "จับเวลาต่อ (Resume)";
      btn.classList.remove("btn-accent");
      btn.classList.add("btn-primary");
    }
  }
}

function resetTimer() {
  clearInterval(state.timerInterval);
  state.isTimerRunning = false;
  state.timerSeconds = 300;
  const btn = document.getElementById("btnTimerStart");
  if (btn) {
    btn.textContent = "เริ่มจับเวลา (Start)";
    btn.classList.remove("btn-accent");
    btn.classList.add("btn-primary");
  }
  updateTimerDisplay();
}

function setTimerPreset(seconds) {
  clearInterval(state.timerInterval);
  state.isTimerRunning = false;
  state.timerSeconds = seconds;
  const btn = document.getElementById("btnTimerStart");
  if (btn) {
    btn.textContent = "เริ่มจับเวลา (Start)";
    btn.classList.remove("btn-accent");
    btn.classList.add("btn-primary");
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const m = Math.floor(state.timerSeconds / 60);
  const s = state.timerSeconds % 60;
  const str = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  const el = document.getElementById("timerDigits");
  if (el) el.textContent = str;
}

// Presenter Notes Toggle
function toggleNotes() {
  const drawer = document.getElementById("notesDrawer");
  if (drawer) {
    drawer.classList.toggle("open");
  }
}

// Overview Grid Modal
function toggleOverviewModal() {
  const modal = document.getElementById("overviewModal");
  if (!modal) return;
  modal.classList.toggle("open");
  if (modal.classList.contains("open")) {
    renderOverviewGrid();
  }
}

function renderOverviewGrid() {
  const container = document.getElementById("overviewBody");
  if (!container || !window.SLIDES) return;
  container.innerHTML = "";
  SLIDES.forEach((slide, idx) => {
    const card = document.createElement("div");
    card.className = `slide-thumb-card ${idx === state.currentSlideIndex ? "active" : ""}`;
    card.innerHTML = `
      <div class="thumb-num">สไลด์ที่ ${idx + 1} • ${slide.unitId === 0 ? "ปฐมนิเทศ" : "หน่วย " + slide.unitId}</div>
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
  if (modal) {
    modal.classList.toggle("open");
  }
}

// Theme Switcher (Light / Dark)
function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", state.theme);
  
  const icon = state.theme === "light" ? "🌙" : "☀️";
  const btn = document.getElementById("btnTheme");
  if (btn) btn.textContent = icon;
  
  const portalIcon = document.getElementById("portalThemeIcon");
  if (portalIcon) portalIcon.textContent = icon;
}

// Sound Toggle
function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  const icon = state.soundEnabled ? "🔊" : "🔇";
  
  const btn = document.getElementById("btnSound");
  if (btn) btn.textContent = icon;
  
  const portalIcon = document.getElementById("portalSoundIcon");
  if (portalIcon) portalIcon.textContent = icon;
}

// -------------------------------------------------------------
// Interactive Slide Widgets (Unit 1)
// -------------------------------------------------------------

// 1. CPU Instruction Cycle Step Simulation (Unit 1 Slide 8)
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

  const valPC = document.getElementById("valPC");
  const valMem = document.getElementById("valMem");
  const valIR = document.getElementById("valIR");
  const valALU = document.getElementById("valALU");
  const statusBanner = document.getElementById("simStatusBanner");

  if (valPC) valPC.textContent = cur.pc;
  if (valMem) valMem.textContent = cur.mem;
  if (valIR) valIR.textContent = cur.ir;
  if (valALU) valALU.textContent = cur.alu;
  if (statusBanner) statusBanner.innerHTML = cur.msg;
  
  sfx.playClick();
}

function resetCpuSim() {
  state.cpuStep = -1;
  simulateCpuStep();
}

// 2. Quick Quiz Answer Check (Unit 1 Slide 9)
function checkQuizAnswer(btn, isCorrect, explanation) {
  const parent = btn.closest(".quiz-check-card");
  if (!parent) return;
  const feedback = parent.querySelector(".quiz-feedback-box");
  if (!feedback) return;
  
  feedback.style.display = "block";

  if (isCorrect) {
    feedback.innerHTML = `<span style="color: #10b981; font-weight: 600;">🎉 ${explanation}</span>`;
    btn.style.background = "#10b981";
    btn.style.color = "#ffffff";
    sfx.playSuccess();
  } else {
    feedback.innerHTML = `<span style="color: #ef4444; font-weight: 600;">❌ ลองใหม่อีกครั้งนะคะ: ${explanation}</span>`;
    btn.style.background = "#ef4444";
    btn.style.color = "#ffffff";
    sfx.playAlarm();
  }
}
