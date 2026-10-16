 /**
 * Data store for Computer Mathematics (21901-2005) Slide Deck
 * Teacher: Miss Rungnapha Eiamchukul (นางสาวรุ่งนภา เอี่ยมชูกุล)
 */

const COURSE_INFO = {
  code: "21901-2005",
  title: "คณิตศาสตร์คอมพิวเตอร์",
  engTitle: "Computer Mathematics",
  level: "หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.)",
  teacher: {
    name: "นางสาวรุ่งนภา เอี่ยมชูกุล",
    role: "ครูผู้สอนประจำวิชา",
    avatar: "assets/teacher.jpg",
    department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ / เทคโนโลยีสารสนเทศ",
    quote: "คณิตศาสตร์ไม่ใช่แค่ตัวเลข แต่คือตรรกะและหัวใจสำคัญในการสั่งงานคอมพิวเตอร์ ✨"
  },
  grading: {
    work: 50,
    behavior: 20,
    exam: 30,
    total: 100
  },
  units: [
    { id: 0, title: "ภาพรวมรายวิชา & ปฐมนิเทศ", badge: "Intro", icon: "sparkles" },
    { id: 1, title: "หน่วยที่ 1: สถาปัตยกรรมการประมวลผล & วงรอบคำสั่ง", badge: "Unit 1", icon: "cpu" },
    { id: 2, title: "หน่วยที่ 2: ระบบจำนวน (Number Systems)", badge: "Unit 2", icon: "hash" },
    { id: 3, title: "หน่วยที่ 3: ระบบเซต (Set Theory)", badge: "Unit 3", icon: "circle-dot" },
    { id: 4, title: "หน่วยที่ 4: ระบบสมการเชิงเส้น (Linear Equations)", badge: "Unit 4", icon: "trending-up" },
    { id: 5, title: "หน่วยที่ 5: ตรรกศาสตร์ (Mathematical Logic)", badge: "Unit 5", icon: "git-commit" },
    { id: 6, title: "หน่วยที่ 6: ระบบเลขฐาน (Base Number Systems)", badge: "Unit 6", icon: "binary" },
    { id: 7, title: "หน่วยที่ 7: พีชคณิตบูลีน & ลอจิกเกต (Boolean Algebra)", badge: "Unit 7", icon: "zap" },
    { id: 8, title: "หน่วยที่ 8: เมทริกซ์ (Matrices & Applications)", badge: "Unit 8", icon: "grid" }
  ]
};

const SLIDES = [
  // -------------------------------------------------------------
  // UNIT 0: COURSE OVERVIEW & WELCOME
  // -------------------------------------------------------------
  {
    id: "u0-s1",
    unitId: 0,
    unitTitle: "ปฐมนิเทศรายวิชา",
    title: "คณิตศาสตร์คอมพิวเตอร์ (Computer Mathematics)",
    subtitle: "รหัสวิชา 21901-2005 • หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.)",
    type: "hero",
    tag: "ยินดีต้อนรับสู่ห้องเรียน",
    content: `
      <div class="hero-slide-grid">
        <div class="hero-text-block">
          <div class="pill-badge pulse-badge">
            <span class="dot"></span> ภาคเรียนที่ 1 • ปีการศึกษา 2569
          </div>
          <h1 class="gradient-title">คณิตศาสตร์คอมพิวเตอร์</h1>
          <p class="hero-desc">
            การเรียนรู้รากฐานทางคณิตศาสตร์ที่เป็นเบื้องหลังระบบคอมพิวเตอร์ ตั้งแต่ระดับบิต 0 และ 1, 
            สถาปัตยกรรม CPU, ตรรกศาสตร์, พีชคณิตบูลีน ไปจนถึงเมทริกซ์เพื่อการประมวลผลข้อมูลระดับสูง
          </p>
          <div class="hero-teacher-chip">
            <img src="assets/teacher.jpg" alt="ครูรุ่งนภา เอี่ยมชูกุล" class="teacher-mini-avatar">
            <div>
              <span class="teacher-title">ครูผู้สอนประจำวิชา</span>
              <strong>นางสาวรุ่งนภา เอี่ยมชูกุล</strong>
            </div>
          </div>
        </div>
        <div class="hero-media-block">
          <div class="hero-card-glow">
            <img src="assets/hero.jpg" alt="Computer Mathematics Hero" class="hero-image-styled">
          </div>
        </div>
      </div>
    `,
    notes: "แนะนำตัวคุณครูรุ่งนภา ชวนนักเรียนคุยเพื่อคลายกังวลว่าวิชาคณิตศาสตร์คอมพิวเตอร์เป็นวิชาที่สนุกและนำไปเขียนโค้ดได้จริง"
  },
  {
    id: "u0-s2",
    unitId: 0,
    unitTitle: "ปฐมนิเทศรายวิชา",
    title: "คำอธิบายรายวิชา (Course Description)",
    subtitle: "มาตรฐานการเรียนรู้และขอบเขตเนื้อหาตามหลักสูตร ปวช.",
    type: "content",
    tag: "เป้าหมายการเรียนรู้",
    content: `
      <div class="glass-card mb-4">
        <div class="quote-box">
          <p class="lead-text">
            “ศึกษาและปฏิบัติเกี่ยวกับ <strong>กระบวนการคำนวณทางคอมพิวเตอร์</strong> ระบบจำนวน เซ็ต ระบบเลขฐาน 
            ตรรกศาสตร์ พีชคณิตบูลีน แมทริกซ์ ระบบสมการเชิงเส้น และเครื่องมือหรือโปรแกรมสำหรับคำนวณ 
            ในการวิเคราะห์ความต้องการ วิเคราะห์ข้อมูล เพื่อบูรณาการพัฒนาโปรแกรม สร้างผลิตภัณฑ์ต้นแบบและทดสอบการทำงานของคอมพิวเตอร์”
          </p>
        </div>
      </div>

      <div class="cards-grid-3">
        <div class="feature-card highlight-card">
          <div class="icon-circle bg-blue">🧠</div>
          <h3>1. ด้านความรู้ (Knowledge)</h3>
          <p>เข้าใจตรรกะคณิตศาสตร์ ระบบเลขฐาน พีชคณิตบูลีน และโครงสร้างการประมวลผลของ CPU</p>
        </div>
        <div class="feature-card highlight-card">
          <div class="icon-circle bg-purple">💻</div>
          <h3>2. ด้านทักษะ (Skill)</h3>
          <p>แปลงเลขฐาน คำนวณตรรกศาสตร์ เขียนสมการบูลีน ลดรูปวงจร และประยุกต์ใช้ในการเขียนโปรแกรม</p>
        </div>
        <div class="feature-card highlight-card">
          <div class="icon-circle bg-amber">⭐</div>
          <h3>3. ด้านจิตพิสัย (Attitude)</h3>
          <p>มีความละเอียดรอบคอบ คิดอย่างเป็นระบบ มีวินัย และพร้อมทำงานร่วมกับผู้อื่นอย่างสร้างสรรค์</p>
        </div>
      </div>
    `,
    notes: "ชี้ให้เห็นว่าคอมพิวเตอร์ทำงานด้วยคณิตศาสตร์ทั้งหมด การเข้าใจรากฐานจะทำให้เขียนโปรแกรมเก่งกว่าคนอื่น"
  },
  {
    id: "u0-s3",
    unitId: 0,
    unitTitle: "ปฐมนิเทศรายวิชา",
    title: "เกณฑ์การวัดและประเมินผล (Grading Criteria)",
    subtitle: "สัดส่วนคะแนน 100 คะแนนเต็ม เพื่อความโปร่งใสและสร้างแรงจูงใจ",
    type: "content",
    tag: "สัดส่วนคะแนน",
    content: `
      <div class="score-showcase-grid">
        <div class="score-card score-work">
          <div class="score-ring">
            <span class="score-number">50%</span>
          </div>
          <h3>คะแนนเก็บระหว่างภาค</h3>
          <p class="score-desc">งานมอบหมาย, แบบฝึกหัดในชั้นเรียน, ใบงานปฏิบัติการ, กิจกรรมกลุ่ม และมินิโปรเจกต์</p>
          <span class="badge badge-primary">50 คะแนน</span>
        </div>

        <div class="score-card score-behavior">
          <div class="score-ring">
            <span class="score-number">20%</span>
          </div>
          <h3>จิตพิสัย & ความรับผิดชอบ</h3>
          <p class="score-desc">การเข้าชั้นเรียนตรงต่อเวลา, ความใส่ใจ, ความซื่อสัตย์, จริยธรรม และการมีส่วนร่วมในห้อง</p>
          <span class="badge badge-success">20 คะแนน</span>
        </div>

        <div class="score-card score-exam">
          <div class="score-ring">
            <span class="score-number">30%</span>
          </div>
          <h3>สอบวัดผลปลายภาค</h3>
          <p class="score-desc">ทดสอบความรู้ความเข้าใจรวบยอดตลอดภาคเรียน ทั้งปรนัยและอัตนัยคิดคำนวณ</p>
          <span class="badge badge-accent">30 คะแนน</span>
        </div>
      </div>

      <div class="grading-bar-wrap mt-4">
        <div class="progress-segmented">
          <div class="seg seg-work" style="width: 50%;">งานเก็บ 50%</div>
          <div class="seg seg-behavior" style="width: 20%;">จิตพิสัย 20%</div>
          <div class="seg seg-exam" style="width: 30%;">สอบปลายภาค 30%</div>
        </div>
      </div>
    `,
    notes: "เน้นย้ำเรื่องคะแนนงาน 50 คะแนนและจิตพิสัย 20 คะแนนรวมเป็น 70 คะแนน แค่ส่งงานครบและตั้งใจเรียนก็ได้เกรดดีแน่นอน"
  },
  {
    id: "u0-s4",
    unitId: 0,
    unitTitle: "ปฐมนิเทศรายวิชา",
    title: "ผังแผนการเรียนรู้ 8 หน่วยการเรียน",
    subtitle: "เส้นทางการเดินทางทางคณิตศาสตร์ตลอดภาคเรียนนี้",
    type: "content",
    tag: "แผนการเรียนรู้",
    content: `
      <div class="unit-roadmap-grid">
        <div class="unit-chip-card" onclick="goToSlideByUnit(1)">
          <div class="unit-number-badge">01</div>
          <div class="unit-chip-info">
            <h4>สถาปัตยกรรม & วงรอบคำสั่ง</h4>
            <span>CPU, Clock Signal, ภาษา 5 ยุค, Bus</span>
          </div>
          <div class="arrow-icon">➔</div>
        </div>

        <div class="unit-chip-card" onclick="goToSlideByUnit(2)">
          <div class="unit-number-badge">02</div>
          <div class="unit-chip-info">
            <h4>ระบบจำนวน (Numbers)</h4>
            <span>จำนวนจริง, ตรรกยะ, สมบัติทางพีชคณิต</span>
          </div>
          <div class="arrow-icon">➔</div>
        </div>

        <div class="unit-chip-card" onclick="goToSlideByUnit(3)">
          <div class="unit-number-badge">03</div>
          <div class="unit-chip-info">
            <h4>ระบบเซต (Set Theory)</h4>
            <span>แผนภาพเวนน์-ออยเลอร์, การดำเนินการเซต</span>
          </div>
          <div class="arrow-icon">➔</div>
        </div>

        <div class="unit-chip-card" onclick="goToSlideByUnit(4)">
          <div class="unit-number-badge">04</div>
          <div class="unit-chip-info">
            <h4>ระบบสมการเชิงเส้น</h4>
            <span>สมการเชิงเส้น 1-2 ตัวแปร, การแทนค่า/กำจัด</span>
          </div>
          <div class="arrow-icon">➔</div>
        </div>

        <div class="unit-chip-card" onclick="goToSlideByUnit(5)">
          <div class="unit-number-badge">05</div>
          <div class="unit-chip-info">
            <h4>ตรรกศาสตร์ (Logic)</h4>
            <span>ประพจน์, ตัวเชื่อม AND/OR, ตารางความจริง</span>
          </div>
          <div class="arrow-icon">➔</div>
        </div>

        <div class="unit-chip-card" onclick="goToSlideByUnit(6)">
          <div class="unit-number-badge">06</div>
          <div class="unit-chip-info">
            <h4>ระบบเลขฐาน (Base Numbers)</h4>
            <span>ฐาน 2, 8, 10, 16, วิธีการแปลงเลขฐาน</span>
          </div>
          <div class="arrow-icon">➔</div>
        </div>

        <div class="unit-chip-card" onclick="goToSlideByUnit(7)">
          <div class="unit-number-badge">07</div>
          <div class="unit-chip-info">
            <h4>พีชคณิตบูลีน & ลอจิกเกต</h4>
            <span>AND, OR, NOT, NAND, NOR, XOR, วงจรตรรกะ</span>
          </div>
          <div class="arrow-icon">➔</div>
        </div>

        <div class="unit-chip-card" onclick="goToSlideByUnit(8)">
          <div class="unit-number-badge">08</div>
          <div class="unit-chip-info">
            <h4>เมทริกซ์ (Matrices)</h4>
            <span>การบวกคูณเมทริกซ์, ดีเทอร์มิแนนต์, กราฟิกส์</span>
          </div>
          <div class="arrow-icon">➔</div>
        </div>
      </div>
    `,
    notes: "คลิกการ์ดเพื่อกระโดดไปยังหน่วยที่ต้องการได้ทันที"
  },

  // -------------------------------------------------------------
  // UNIT 1: สถาปัตยกรรมการประมวลผลและวงรอบคำสั่ง
  // -------------------------------------------------------------
  {
    id: "u1-s1",
    unitId: 1,
    unitTitle: "หน่วยที่ 1: สถาปัตยกรรมการประมวลผล",
    title: "1.1 คอมพิวเตอร์คืออะไร? (What is a Computer?)",
    subtitle: "นิยามและกระบวนการทำงานหลัก 4 ขั้นตอน",
    type: "content",
    tag: "พื้นฐานคอมพิวเตอร์",
    content: `
      <div class="glass-card mb-4 highlight-border">
        <p class="lead-text">
          <strong>คอมพิวเตอร์</strong> คือ <em>เครื่องคำนวณอิเล็กทรอนิกส์</em> ที่สามารถรับข้อมูลและคำสั่ง 
          ผ่านอุปกรณ์รับข้อมูล แล้วนำข้อมูลและคำสั่งไปประมวลผลด้วยหน่วยประมวลผล เพื่อให้ได้ผลลัพธ์ที่ต้องการ 
          และแสดงผ่านอุปกรณ์แสดงผล ตลอดจนสามารถบันทึกรายการต่าง ๆ ไว้ด้วยอุปกรณ์บันทึกข้อมูล
        </p>
      </div>

      <div class="process-diagram-4">
        <div class="step-box">
          <div class="step-num">1</div>
          <div class="step-icon">⌨️</div>
          <h4>รับข้อมูล (Input)</h4>
          <p>คีย์บอร์ด, เมาส์, สแกนเนอร์, ไมโครโฟน</p>
        </div>
        <div class="arrow-divider">➔</div>
        <div class="step-box highlight-step">
          <div class="step-num">2</div>
          <div class="step-icon">⚙️</div>
          <h4>ประมวลผล (Process)</h4>
          <p>หน่วยประมวลผลกลาง (CPU) คำนวณตรรกะ</p>
        </div>
        <div class="arrow-divider">➔</div>
        <div class="step-box">
          <div class="step-num">3</div>
          <div class="step-icon">🖥️</div>
          <h4>แสดงผล (Output)</h4>
          <p>จอภาพ, ลำโพง, เครื่องพิมพ์</p>
        </div>
        <div class="arrow-divider">➔</div>
        <div class="step-box">
          <div class="step-num">4</div>
          <div class="step-icon">💾</div>
          <h4>บันทึกข้อมูล (Storage)</h4>
          <p>SSD, Harddisk, Flash Drive</p>
        </div>
      </div>
    `,
    notes: "เน้นย้ำคำว่า 'เครื่องคำนวณ' เพราะรากศัพท์ Computer มาจากคำว่า Compute ที่แปลว่าคำนวณ"
  },
  {
    id: "u1-s2",
    unitId: 1,
    unitTitle: "หน่วยที่ 1: สถาปัตยกรรมการประมวลผล",
    title: "1.2 สัญญาณนาฬิกา (Clock Signal)",
    subtitle: "หัวใจการกำหนดจังหวะกลาง (Metronome / Conductor) ของ CPU",
    type: "content",
    tag: "ฮาร์ดแวร์ & จังหวะเวลา",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <div class="tag-pill badge-primary mb-2">หน้าที่สำคัญ</div>
          <h3>เครื่องกำหนดจังหวะกลาง</h3>
          <p>
            สัญญาณนาฬิกาเป็น <strong>สัญญาณไฟฟ้าแบบดิจิทัล</strong> ที่สลับสถานะไปมาระหว่าง:
          </p>
          <div class="clock-state-chips">
            <span class="chip-state low">ต่ำ (0 หรือ Low)</span>
            <span class="chip-arrow">⇄</span>
            <span class="chip-state high">สูง (1 หรือ High)</span>
          </div>
          <p class="mt-3">
            ทำหน้าที่เหมือน <em>วาทยากร (Conductor)</em> หรือ <em>เมโทรนอม (Metronome)</em> ให้วงจรดิจิทัล 
            และ CPU ทุกชิ้นส่งถ่ายข้อมูลพร้อมกันอย่างแม่นยำ <strong>ไม่เกิดการรับส่งข้อมูลชนกัน</strong>
          </p>
        </div>

        <div class="feature-card">
          <div class="tag-pill badge-accent mb-2">หน่วยวัดความถี่</div>
          <h3>เฮิรตซ์ (Hertz: Hz)</h3>
          <div class="hz-display-card">
            <div class="hz-big">1 Hz = 1 รอบ / วินาที</div>
            <div class="clock-wave-anim">
              <svg viewBox="0 0 400 80" class="square-wave-svg">
                <path d="M 0,60 L 40,60 L 40,20 L 80,20 L 80,60 L 120,60 L 120,20 L 160,20 L 160,60 L 200,60 L 200,20 L 240,20 L 240,60 L 280,60 L 280,20 L 320,20 L 320,60 L 360,60 L 360,20 L 400,20" fill="none" stroke="currentColor" stroke-width="3" class="wave-path" />
              </svg>
            </div>
          </div>
          <ul class="custom-list mt-3">
            <li><strong>1 MHz (เมกะเฮิรตซ์)</strong> = 1,000,000 รอบ/วินาที</li>
            <li><strong>1 GHz (กิกะเฮิรตซ์)</strong> = 1,000,000,000 รอบ/วินาที (ซีพียูในปัจจุบัน เช่น 3.5 GHz ทำงาน 3.5 พันล้านรอบต่อวินาที!)</li>
          </ul>
        </div>
      </div>
    `,
    notes: "เปรียบเทียบสัญญาณนาฬิกาเหมือนเสียงกลองพายเรือยาว ถ้าทุกคนจ้ำตามกลองเรือจะพุ่งเร็วและไม่ชนกัน"
  },
  {
    id: "u1-s3",
    unitId: 1,
    unitTitle: "หน่วยที่ 1: สถาปัตยกรรมการประมวลผล",
    title: "1.3 ภาษาคอมพิวเตอร์และยุคที่ 1: ภาษาเครื่อง",
    subtitle: "ภาษาเดียวที่ฮาร์ดแวร์คอมพิวเตอร์เข้าใจโดยตรงอย่างแท้จริง",
    type: "content",
    tag: "วิวัฒนาการภาษา (1/3)",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <div class="badge badge-primary mb-2">ยุคที่ 1 (1st Generation)</div>
          <h3>ภาษาเครื่อง (Machine Language)</h3>
          <p>
            ประกอบด้วยกลุ่มตัวเลขใน <strong>ระบบเลขฐานสอง (เลข 0 และ เลข 1)</strong> เท่านั้น 
            เป็นภาษาเดียวที่ CPU เข้าใจได้โดยตรงโดยไม่ต้องผ่านตัวแปลภาษาใดๆ
          </p>
          <div class="binary-code-box">
            <code>
              10010001 10100110 11001000<br>
              01101100 00010000 11110000<br>
              10111100 11000001 10110011
            </code>
          </div>
          <p class="small-text text-muted mt-2">
            โครงสร้างคำสั่งแบ่งเป็น: <strong>ส่วนรหัสคำสั่ง (Opcode)</strong> เช่น สั่งบวก/ย้ายข้อมูล + <strong>ส่วนตำแหน่งข้อมูล (Address/Operand)</strong>
          </p>
        </div>

        <div class="feature-card">
          <h3>ข้อดี & ข้อเสียของภาษาเครื่อง</h3>
          <div class="pros-cons-grid">
            <div class="pro-item">
              <span class="pro-tag">ข้อดี</span>
              <p>ทำงานได้รวดเร็วที่สุด ใช้เนื้อที่หน่วยความจำน้อย ควบคุมฮาร์ดแวร์ได้โดยตรง</p>
            </div>
            <div class="con-item">
              <span class="con-tag">ข้อเสีย</span>
              <p>เขียนยากมาก จดจำยาก ผิดพลาดง่าย และ <strong>ขึ้นอยู่กับเครื่อง (Machine-Dependent)</strong> ไม่สามารถนำไปรันบนคอมพิวเตอร์รุ่นอื่นได้</p>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "ให้นักเรียนจินตนาการว่าถ้าเราต้องจำเลข 0101 ทั้งวันเพื่อเขียนโปรแกรมจะปวดหัวขนาดไหน จึงเกิดภาษารุ่นถัดไป"
  },
  {
    id: "u1-s4",
    unitId: 1,
    unitTitle: "หน่วยที่ 1: สถาปัตยกรรมการประมวลผล",
    title: "1.4 ภาษาในยุคที่ 2: ภาษาแอสเซมบลี (Assembly)",
    subtitle: "การนำรหัสสัญลักษณ์ช่วยจำ (Mnemonic Codes) เข้ามาแทนเลขฐานสอง",
    type: "content",
    tag: "วิวัฒนาการภาษา (2/3)",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <div class="badge badge-accent mb-2">ยุคที่ 2 (2nd Generation)</div>
          <h3>ภาษาระดับต่ำ (Low-Level Language)</h3>
          <p>
            ใช้ <strong>รหัสข้อความช่วยจำ (Mnemonic codes)</strong> แทนชุดเลขฐานสอง เพื่อให้มนุษย์เขียนและอ่านได้ง่ายขึ้น 
            อนุญาตให้ใช้ชื่อตัวแปร เช่น <code>X</code>, <code>Y</code>, <code>TOTAL</code>
          </p>
          
          <table class="styled-table mt-3">
            <thead>
              <tr><th>รหัสสัญลักษณ์</th><th>ความหมายคำสั่ง</th></tr>
            </thead>
            <tbody>
              <tr><td><code>A</code> (ADD)</td><td>การบวกเลข</td></tr>
              <tr><td><code>S</code> (SUBTRACT)</td><td>การลบเลข</td></tr>
              <tr><td><code>C</code> (COMPARE)</td><td>การเปรียบเทียบข้อมูล</td></tr>
              <tr><td><code>MP</code> (MULTIPLY)</td><td>การคูณ</td></tr>
              <tr><td><code>ST</code> (STORE)</td><td>เก็บข้อมูลไว้ในหน่วยความจำ</td></tr>
            </tbody>
          </table>
        </div>

        <div class="feature-card">
          <h3>ตัวแปลภาษา: แอสเซมเบลอร์ (Assembler)</h3>
          <div class="translation-flow-box">
            <div class="box-flow">ภาษาแอสเซมบลี<br><code>ADD X, Y</code></div>
            <div class="arrow-trans">➔ [ Assembler ] ➔</div>
            <div class="box-flow highlight-flow">ภาษาเครื่อง<br><code>10010110 010...</code></div>
          </div>
          <div class="alert-box-info mt-3">
            <strong>ลักษณะสำคัญ:</strong><br>
            • อัตราการแปล <strong>1 ต่อ 1</strong> (1 คำสั่งแอสเซมบลี แปลได้ 1 คำสั่งภาษาเครื่อง)<br>
            • ยังคง <em>ขึ้นอยู่กับฮาร์ดแวร์เครื่อง</em> ผู้เขียนต้องเข้าใจรีจิสเตอร์ (Registers) ภายใน CPU<br>
            • ปัจจุบันใช้พัฒนา ซอฟต์แวร์ระบบ (OS Kernel), ไดรเวอร์ และงานที่ต้องการความเร็วสูงมาก (Game Engine / กราฟิก)
          </div>
        </div>
      </div>
    `,
    notes: "ชี้ให้เห็นว่า Assembler คือโปรแกรมแปลภาษาตัวแรกๆ ที่ช่วยแปลงภาษาอังกฤษย่อเป็นรหัสบิต 0 และ 1"
  },
  {
    id: "u1-s5",
    unitId: 1,
    unitTitle: "หน่วยที่ 1: สถาปัตยกรรมการประมวลผล",
    title: "1.5 ภาษายุคที่ 3, 4 และ 5 (3GLs, 4GLs, 5GLs)",
    subtitle: "จากภาษาระดับสูง สู่ภาษาจัดการฐานข้อมูล และภาษาธรรมชาติ (AI)",
    type: "content",
    tag: "วิวัฒนาการภาษา (3/3)",
    content: `
      <div class="cards-grid-3">
        <div class="feature-card">
          <div class="badge badge-primary mb-2">ยุคที่ 3: ภาษาระดับสูง (3GLs)</div>
          <h4>Procedural Languages</h4>
          <p class="small-text">เขียนเป็นขั้นตอน คล้ายภาษาอังกฤษ ไม่ขึ้นกับฮาร์ดแวร์:</p>
          <ul class="tag-list">
            <li><strong>PASCAL:</strong> โครงสร้างเป็นระเบียบ แม่แบบการเรียนรู้</li>
            <li><strong>C:</strong> ยืดหยุ่น ไว ทรงพลัง แม่แบบภาษาโมเดิร์น</li>
            <li><strong>BASIC:</strong> ใช้ง่าย แปลทีละบรรทัด (Interpreter)</li>
            <li><strong>FORTRAN:</strong> คำนวณวิทยาศาสตร์/คณิตศาสตร์</li>
            <li><strong>COBOL:</strong> งานธุรกิจ/การเงิน/รายงานเอกสาร</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="badge badge-success mb-2">ยุคที่ 4: ภาษาระดับสูงมาก (4GLs)</div>
          <h4>Nonprocedural Languages</h4>
          <p class="small-text">ระบุ <em>"ต้องการอะไร"</em> โดยไม่ต้องเขียนวิธีทำ:</p>
          <ul class="custom-list">
            <li><strong>Report Generators:</strong> สร้างฟอร์มและรายงานอัตโนมัติ</li>
            <li><strong>Query Languages:</strong> ค้นหาข้อมูล เช่น <code>SQL</code>, <code>QBE</code></li>
            <li><strong>App Generators:</strong> สร้างโปรแกรม แปลงเป็นภาษา 3GL</li>
            <li><strong>ความเร็ว:</strong> 1 คำสั่ง 4GL เทียบเท่า 100+ คำสั่งใน 3GL!</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="badge badge-accent mb-2">ยุคที่ 5: ภาษาธรรมชาติ (5GLs)</div>
          <h4>Natural Language & AI</h4>
          <p class="small-text">สั่งงานคอมพิวเตอร์ด้วยภาษาพูดมนุษย์:</p>
          <ul class="custom-list">
            <li><strong>ระบบผู้เชี่ยวชาญ (Expert System):</strong> AI วิเคราะห์ตัดสินใจแทนมนุษย์ (เช่น แพทย์ พยากรณ์อากาศ หุ้น)</li>
            <li><strong>ระบบฐานความรู้ (Knowledge Base):</strong> ดึงข้อมูลมหาศาลมาประมวลผล</li>
            <li>มนุษย์และ AI ทำงานร่วมกันเพื่อแก้ปัญหาซับซ้อน</li>
          </ul>
        </div>
      </div>
    `,
    notes: "เปรียบเทียบ: 1GL = เลขฐานสอง, 2GL = คำย่อ, 3GL = เขียนโค้ดเป็นขั้นตอน, 4GL = สั่ง SELECT ใน SQL, 5GL = สั่งด้วยภาษาพูด AI"
  },
  {
    id: "u1-s6",
    unitId: 1,
    unitTitle: "หน่วยที่ 1: สถาปัตยกรรมการประมวลผล",
    title: "1.6 โครงสร้างของคอมพิวเตอร์ (Computer Architecture)",
    subtitle: "ขั้นตอนการทำงาน 5 ขั้นตอนของระบบคอมพิวเตอร์",
    type: "content",
    tag: "โครงสร้างระบบ",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <h3>ขั้นตอนการทำงานของระบบ 5 ขั้นตอน</h3>
          <ol class="custom-numbered-list">
            <li><strong>รับข้อมูล:</strong> ผู้ใช้ส่งข้อมูลผ่านอุปกรณ์ต่อพ่วง (Peripherals) หรือเครือข่าย เข้าสู่ I/O</li>
            <li><strong>ส่งพักข้อมูล:</strong> I/O ส่งข้อมูลผ่านเส้นทางเชื่อมต่อ (System Interconnection) ไปบันทึกพักไว้ใน <strong>Main Memory</strong></li>
            <li><strong>ดึงและประมวลผล:</strong> CPU ดึงคำสั่งและข้อมูลจาก Main Memory มาถอดรหัสและคำนวณตามโปรแกรม</li>
            <li><strong>ส่งผลลัพธ์:</strong> CPU ส่งผลลัพธ์กลับไปยัง Main Memory หรือส่งตรงไปยัง I/O</li>
            <li><strong>แสดงผล:</strong> ส่วน I/O ส่งผลลัพธ์ออกสู่อุปกรณ์ภายนอก เช่น จอภาพ เครื่องพิมพ์</li>
          </ol>
        </div>

        <div class="feature-card architecture-visual-box">
          <h3>แผนผังจำลองโครงสร้างระบบ</h3>
          <div class="arch-diagram">
            <div class="arch-node arch-peripherals">อุปกรณ์ต่อพ่วง (Peripherals) / เครือข่าย</div>
            <div class="arch-arrow-down">↕ สัญญาณรับ-ส่ง</div>
            <div class="arch-node arch-io">ส่วน Input / Output (I/O)</div>
            <div class="arch-arrow-down">↕ เส้นทางเชื่อมต่อระบบ (System Interconnection)</div>
            <div class="arch-split-row">
              <div class="arch-node arch-cpu">
                <strong>CPU</strong><br>
                (หน่วยประมวลผลกลาง)
              </div>
              <div class="arch-node arch-mem">
                <strong>Main Memory</strong><br>
                (หน่วยความจำหลัก RAM)
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "ให้สังเกตว่า CPU จะไม่คุยกับคีย์บอร์ดหรือจอภาพโดยตรง แต่ทุกอย่างจะต้องผ่าน System Interconnection และ Memory"
  },
  {
    id: "u1-s7",
    unitId: 1,
    unitTitle: "หน่วยที่ 1: สถาปัตยกรรมการประมวลผล",
    title: "1.7 การติดต่อระหว่าง CPU และหน่วยความจำ (Memory Interaction)",
    subtitle: "กระบวนการอ่าน (Read) และเขียน (Write) ข้อมูลในหน่วยความจำ",
    type: "content",
    tag: "การอ่าน-เขียนข้อมูล",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card mem-op-card read-mode">
          <div class="op-badge read-badge">📖 การอ่านข้อมูล (Read Operation)</div>
          <h4>ขั้นตอนการดึงข้อมูลจาก Memory เข้า CPU</h4>
          <div class="flow-steps-v">
            <div class="f-step">
              <span class="f-num">1</span>
              <div><strong>CPU ส่ง Address</strong> เพื่อระบุตำแหน่งเซลล์ข้อมูลที่ต้องการในหน่วยความจำ</div>
            </div>
            <div class="f-step">
              <span class="f-num">2</span>
              <div><strong>ระบุวัตถุประสงค์</strong> สั่งสัญญาณควบคุมว่าต้องการ <em>"อ่านข้อมูล (Read)"</em></div>
            </div>
            <div class="f-step">
              <span class="f-num">3</span>
              <div><strong>เริ่มอ่านข้อมูล</strong> ข้อมูลที่ตำแหน่งแอดเดรสจะถูกส่งผ่านบัสข้อมูลกลับมายัง CPU</div>
            </div>
          </div>
        </div>

        <div class="feature-card mem-op-card write-mode">
          <div class="op-badge write-badge">✍️ การเขียนข้อมูล (Write Operation)</div>
          <h4>ขั้นตอนการบันทึกข้อมูลจาก CPU ลง Memory</h4>
          <div class="flow-steps-v">
            <div class="f-step">
              <span class="f-num">1</span>
              <div><strong>CPU ส่ง Address</strong> เพื่อระบุตำแหน่งปลายทางใน Memory ที่จะเขียน</div>
            </div>
            <div class="f-step">
              <span class="f-num">2</span>
              <div><strong>ระบุวัตถุประสงค์</strong> สั่งสัญญาณควบคุมว่าต้องการ <em>"เขียนข้อมูล (Write)"</em></div>
            </div>
            <div class="f-step">
              <span class="f-num">3</span>
              <div><strong>เริ่มเขียนข้อมูล</strong> CPU ส่งข้อมูลไปเก็บไว้ที่ตำแหน่งหน่วยความจำตามที่ระบุ</div>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "เปรียบเทียบ Memory เหมือนตู้ไปรษณีย์ที่มีหมายเลขห้อง (Address) CPU ต้องบอกเลขห้องก่อนว่าจะไปหยิบจดหมาย (Read) หรือหย่อนจดหมาย (Write)"
  },
  {
    id: "u1-s8",
    unitId: 1,
    unitTitle: "หน่วยที่ 1: สถาปัตยกรรมการประมวลผล",
    title: "1.8 วงรอบคำสั่งของ CPU (Instruction Cycle)",
    subtitle: "วงรอบการดึงคำสั่ง (Fetch), ถอดรหัส (Decode), และประมวลผล (Execute)",
    type: "interactive",
    tag: "หัวใจการทำงานของ CPU",
    content: `
      <div class="glass-card mb-3">
        <p>
          วงรอบคำสั่ง (Instruction Cycle) ประกอบด้วย 3 ขั้นตอนสำคัญที่ทำซ้ำกันเป็นลูป:
          <strong>Fetch</strong> (ดึงคำสั่ง) ➔ <strong>Decode</strong> (ถอดรหัส) ➔ <strong>Execute</strong> (ปฏิบัติตามคำสั่ง)
        </p>
      </div>

      <!-- CPU Cycle Interactive Simulator -->
      <div class="interactive-simulator-box" id="cpuSimulator">
        <div class="sim-header">
          <span class="sim-title">🎮 จำลองการทำงานของวงรอบคำสั่ง CPU (Interactive Simulator)</span>
          <div>
            <button class="btn btn-sm btn-primary" onclick="simulateCpuStep()">ก้าวไปข้างหน้า (Step Next) ⏩</button>
            <button class="btn btn-sm btn-outline" onclick="resetCpuSim()">รีเซ็ต</button>
          </div>
        </div>

        <div class="sim-body">
          <div class="sim-components-grid">
            <div class="sim-card" id="simPC">
              <div class="sim-card-label">Program Counter (PC)</div>
              <div class="sim-val" id="valPC">0x0001</div>
              <small>ชี้ตำแหน่งคำสั่งถัดไป</small>
            </div>
            <div class="sim-card" id="simMemory">
              <div class="sim-card-label">Main Memory (RAM)</div>
              <div class="sim-val" id="valMem">LOAD 15, R1</div>
              <small>คำสั่งที่เก็บอยู่ในแรม</small>
            </div>
            <div class="sim-card" id="simIR">
              <div class="sim-card-label">Instruction Register (IR)</div>
              <div class="sim-val" id="valIR">-- ว่าง --</div>
              <small>พักคำสั่งที่ดึงเข้ามา</small>
            </div>
            <div class="sim-card" id="simALU">
              <div class="sim-card-label">ALU / Execution</div>
              <div class="sim-val" id="valALU">รอคำสั่ง...</div>
              <small>หน่วยประมวลผลคำนวณ</small>
            </div>
          </div>

          <div class="sim-status-banner" id="simStatusBanner">
            📌 กดปุ่ม <strong>"ก้าวไปข้างหน้า (Step Next)"</strong> เพื่อเริ่มต้นดูการทำงานของ CPU ทีละสเต็ป
          </div>
        </div>
      </div>
    `,
    notes: "ลองกดปุ่ม Step Next บนหน้าจอ เพื่อให้นักเรียนเห็นว่า PC ชี้ไปยัง Memory ดึงเข้า IR แล้ว ALU จึงประมวลผล"
  },
  {
    id: "u1-s9",
    unitId: 1,
    unitTitle: "หน่วยที่ 1: สถาปัตยกรรมการประมวลผล",
    title: "1.9 ระบบบัสเชื่อมต่อ (System Interconnection / Bus)",
    subtitle: "สายสัญญาณส่งข้อมูล 3 ชนิดในระบบคอมพิวเตอร์",
    type: "content",
    tag: "ระบบบัส",
    content: `
      <div class="cards-grid-3">
        <div class="feature-card bus-card address-bus">
          <div class="bus-badge">1. Address Lines</div>
          <h3>บัสแอดเดรส (Address Bus)</h3>
          <div class="direction-indicator">
            <span class="dir-icon">➡️</span> ทิศทางเดียว (Unidirectional)
          </div>
          <p class="mt-2">
            CPU ส่งตำแหน่งปลายทางใน Memory หรือระบุอุปกรณ์ I/O ที่ต้องการติดต่อ 
            (ชี้เป้าหมายเหมือนจ่าหน้าซองจดหมาย)
          </p>
        </div>

        <div class="feature-card bus-card control-bus">
          <div class="bus-badge">2. Control Lines</div>
          <h3>บัสควบคุม (Control Bus)</h3>
          <div class="direction-indicator">
            <span class="dir-icon">⚡</span> ควบคุมจังหวะเวลา & สั่งการ
          </div>
          <p class="mt-2">
            ส่งสัญญาณคำสั่งและจังหวะเวลา เช่น สัญญาณคำสั่งอ่าน (Read), คำสั่งเขียน (Write), 
            หรือสัญญาณขอขัดจังหวะ (Interrupt) เพื่อประสานการทำงาน
          </p>
        </div>

        <div class="feature-card bus-card data-bus">
          <div class="bus-badge">3. Data Lines</div>
          <h3>บัสข้อมูล (Data Bus)</h3>
          <div class="direction-indicator">
            <span class="dir-icon">⇄</span> สองทิศทาง (Bidirectional)
          </div>
          <p class="mt-2">
            ใช้ขนส่งตัวเนื้อหาข้อมูลหรือคำสั่งจริงไป-กลับระหว่าง CPU, Memory 
            และอุปกรณ์ Input/Output แบบ 2 ทิศทาง
          </p>
        </div>
      </div>

      <!-- Quick Quiz Box -->
      <div class="quiz-check-card mt-4">
        <div class="quiz-q-title">💡 คำถามชวนคิดท้ายหน่วยที่ 1: บัสชนิดใดมีการสื่อสารแบบ 2 ทิศทาง (Bidirectional)?</div>
        <div class="quiz-options">
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, 'บัสแอดเดรสส่งตำแหน่งจาก CPU ทางเดียวเท่านั้นจ้า')">A) Address Bus</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, 'บัสควบคุมส่งสัญญาณคำสั่งและจังหวะเวลา')">B) Control Bus</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, true, 'ถูกต้องยอดเยี่ยม! Data Bus ขนส่งข้อมูลเข้า-ออกได้ทั้งสองทาง')">C) Data Bus 🎉</button>
        </div>
        <div class="quiz-feedback-box"></div>
      </div>
    `,
    notes: "ถามนักเรียนว่าบัสไหนส่งสองทาง แล้วกดปุ่มทดสอบตัวเลือกเพื่อดูเฉลยพร้อมกัน"
  },

  // -------------------------------------------------------------
  // UNIT 2: ระบบจำนวน (Number Systems)
  // -------------------------------------------------------------
  {
    id: "u2-s1",
    unitId: 2,
    unitTitle: "หน่วยที่ 2: ระบบจำนวน",
    title: "2.1 โครงสร้างของระบบจำนวนจริง (Real Numbers)",
    subtitle: "การจำแนกประเภทจำนวนและความสัมพันธ์ทางคณิตศาสตร์",
    type: "content",
    tag: "ระบบจำนวน",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <h3>แผนผังระบบจำนวนจริง (Real Numbers : \\( \\mathbb{R} \\))</h3>
          <div class="tree-diagram">
            <div class="tree-root">จำนวนจริง (\\( \\mathbb{R} \\))</div>
            <div class="tree-branches">
              <div class="branch-col">
                <div class="tree-sub">จำนวนตรรกยะ (\\( \\mathbb{Q} \\))</div>
                <small>เขียนในรูป \\( \\frac{a}{b} \\) ได้เมื่อ \\( b \\neq 0 \\)</small>
                <div class="tree-leaf-group">
                  <div class="tree-leaf">จำนวนเต็ม (\\( \\mathbb{Z} \\)): -2, -1, 0, 1, 2</div>
                  <div class="tree-leaf">เศษส่วนและทศนิยมซ้ำ: 1/2, 0.75, 0.333...</div>
                </div>
              </div>
              <div class="branch-col">
                <div class="tree-sub">จำนวนอตรรกยะ (\\( \\mathbb{Q}' \\))</div>
                <small>ไม่สามารถเขียนในรูปเศษส่วนได้</small>
                <div class="tree-leaf-group">
                  <div class="tree-leaf">ทศนิยมไม่ซ้ำไม่รู้จบ</div>
                  <div class="tree-leaf">\\( \\sqrt{2}, \\sqrt{3}, \\pi, e \\)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <div class="tag-pill badge-primary mb-2">บทบาทในคอมพิวเตอร์</div>
          <h3>ทำไมโปรแกรมเมอร์ต้องเข้าใจระบบจำนวน?</h3>
          <ul class="custom-list">
            <li><strong>Data Types (ชนิดข้อมูล):</strong> ในการเขียนโปรแกรม เช่น <code>int</code> (จำนวนเต็ม), <code>float</code> / <code>double</code> (จำนวนจริงทศนิยม)</li>
            <li><strong>ปัญหาการปัดเศษ (Floating-Point Precision):</strong> ในคอมพิวเตอร์ <code>0.1 + 0.2 = 0.30000000000000004</code> เนื่องจากข้อจำกัดของการแปลงเลขฐานสอง!</li>
            <li><strong>การป้องกัน Error:</strong> การหารด้วยศูนย์ (Division by Zero) จะทำให้ระบบ Crash ทันที</li>
          </ul>
        </div>
      </div>
    `,
    notes: "ยกตัวอย่างเรื่อง 0.1 + 0.2 ในคอมพิวเตอร์เพื่อให้นักเรียนเห็นความสำคัญของระบบจำนวนจริงในคอมพิวเตอร์"
  },
  {
    id: "u2-s2",
    unitId: 2,
    unitTitle: "หน่วยที่ 2: ระบบจำนวน",
    title: "2.2 คุณสมบัติทางพีชคณิตของจำนวนจริง",
    subtitle: "สมบัติสำคัญสำหรับการคำนวณและขั้นตอนวิธี (Algorithms)",
    type: "content",
    tag: "คุณสมบัติทางคณิตศาสตร์",
    content: `
      <div class="table-responsive">
        <table class="styled-table math-table">
          <thead>
            <tr>
              <th>คุณสมบัติ</th>
              <th>การบวก (Addition)</th>
              <th>การคูณ (Multiplication)</th>
              <th>ตัวอย่าง</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. สมบัติปิด (Closure)</strong></td>
              <td>\\( a + b \\in \\mathbb{R} \\)</td>
              <td>\\( a \\cdot b \\in \\mathbb{R} \\)</td>
              <td>\\( 3 + 5 = 8 \\) (ยังเป็นจำนวนจริง)</td>
            </tr>
            <tr>
              <td><strong>2. สลับที่ (Commutative)</strong></td>
              <td>\\( a + b = b + a \\)</td>
              <td>\\( a \\cdot b = b \\cdot a \\)</td>
              <td>\\( 4 \\times 7 = 7 \\times 4 = 28 \\)</td>
            </tr>
            <tr>
              <td><strong>3. เปลี่ยนกลุ่ม (Associative)</strong></td>
              <td>\\( (a + b) + c = a + (b + c) \\)</td>
              <td>\\( (a \\cdot b) \\cdot c = a \\cdot (b \\cdot c) \\)</td>
              <td>\\( (2 + 3) + 4 = 2 + (3 + 4) = 9 \\)</td>
            </tr>
            <tr>
              <td><strong>4. แจกแจง (Distributive)</strong></td>
              <td colspan="2">\\( a(b + c) = ab + ac \\)</td>
              <td>\\( 3(4 + 5) = 12 + 15 = 27 \\)</td>
            </tr>
            <tr>
              <td><strong>5. เอกลักษณ์ (Identity)</strong></td>
              <td>\\( a + 0 = a \\) (เอกลักษณ์คือ 0)</td>
              <td>\\( a \\cdot 1 = a \\) (เอกลักษณ์คือ 1)</td>
              <td>\\( 9 + 0 = 9 \\), \\( 9 \\times 1 = 9 \\)</td>
            </tr>
            <tr>
              <td><strong>6. อินเวอร์ส (Inverse)</strong></td>
              <td>\\( a + (-a) = 0 \\)</td>
              <td>\\( a \\cdot (\\frac{1}{a}) = 1 \\) (เมื่อ \\( a \\neq 0 \\))</td>
              <td>\\( 5 + (-5) = 0 \\), \\( 5 \\times \\frac{1}{5} = 1 \\)</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    notes: "เชื่อมโยงเรื่องสมบัติแจกแจงกับการจัดรูปสมการในพีชคณิตบูลีนในหน่วยถัดๆ ไป"
  },
  {
    id: "u2-s3",
    unitId: 2,
    unitTitle: "หน่วยที่ 2: ระบบจำนวน",
    title: "2.3 ค่าสัมบูรณ์และเส้นจำนวน (Absolute Value)",
    subtitle: "ระยะห่างของจำนวนบนเส้นจำนวน และการคำนวณทางคอมพิวเตอร์",
    type: "content",
    tag: "ค่าสัมบูรณ์",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <h3>นิยามของค่าสัมบูรณ์ (Absolute Value)</h3>
          <p>
            ค่าสัมบูรณ์ของจำนวนจริง \\( a \\) เขียนแทนด้วยสัญลักษณ์ <strong>\\( |a| \\)</strong> 
            หมายถึง <em>ระยะห่างจาก 0 ถึง \\( a \\) บนเส้นจำนวน</em> (ระยะทางต้องมีค่าเป็นบวกหรือศูนย์เสมอ)
          </p>
          <div class="formula-box">
            \\[
              |a| = \\begin{cases} a & \\text{เมื่อ } a \\ge 0 \\\\ -a & \\text{เมื่อ } a < 0 \\end{cases}
            \\]
          </div>
          <div class="examples-grid mt-3">
            <div class="ex-badge">\\( |7| = 7 \\)</div>
            <div class="ex-badge">\\( |-7| = -(-7) = 7 \\)</div>
            <div class="ex-badge">\\( |0| = 0 \\)</div>
          </div>
        </div>

        <div class="feature-card">
          <div class="badge badge-accent mb-2">การประยุกต์ในการเขียนโปรแกรม</div>
          <h3>ฟังก์ชัน Math.abs()</h3>
          <p>ใช้ในการคำนวณระยะทาง ความคลาดเคลื่อน (Error Margin) และการตรวจจับการชนในเกม:</p>
          <div class="code-editor-preview">
            <span class="code-comment">// คำนวณระยะห่างระหว่างจุด 2 จุด</span><br>
            let distance = Math.abs(playerX - enemyX);<br>
            if (distance < 20) {<br>
            &nbsp;&nbsp;console.log("Game Over! ชนแล้ว");<br>
            }
          </div>
        </div>
      </div>
    `,
    notes: "อธิบายว่าค่าสัมบูรณ์คือฟังก์ชัน Math.abs() ที่นักเรียนจะได้ใช้บ่อยมากในการเขียนโปรแกรมเกมหรือเว็บ"
  },
  {
    id: "u2-s4",
    unitId: 2,
    unitTitle: "หน่วยที่ 2: ระบบจำนวน",
    title: "2.4 การแทนจำนวนในคอมพิวเตอร์ (Computer Representation)",
    subtitle: "จำนวนเต็มบวก-ลบ (Two's Complement) และทศนิยมแบบ Floating Point (IEEE 754)",
    type: "content",
    tag: "การแทนข้อมูลในบิต",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <div class="badge badge-primary mb-2">จำนวนเต็มมีเครื่องหมาย</div>
          <h3>ระบบส่วนเติมเต็มสอง (2's Complement)</h3>
          <p>คอมพิวเตอร์เก็บจำนวนติดลบโดยใช้วิธี 2's Complement:</p>
          <div class="flow-steps-v mt-2">
            <div class="f-step">
              <span class="f-num">1</span>
              <div>เขียนเลขบวกเป็นฐานสอง เช่น +5 = <code>00000101</code></div>
            </div>
            <div class="f-step">
              <span class="f-num">2</span>
              <div>กลับบิตทุกตำแหน่ง 0 เป็น 1, 1 เป็น 0 (1's Comp) = <code>11111010</code></div>
            </div>
            <div class="f-step">
              <span class="f-num">3</span>
              <div>บวกด้วย 1 (2's Comp) จะได้ -5 = <code>11111011</code></div>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <div class="badge badge-accent mb-2">ทศนิยมตามมาตรฐาน</div>
          <h3>มาตรฐาน IEEE 754 Floating-Point</h3>
          <p>การเก็บตัวเลขทศนิยม เช่น 3.14159 ประกอบด้วย 3 ส่วนสำคัญ:</p>
          <ul class="custom-list mt-2">
            <li><strong>Sign Bit (บิตเครื่องหมาย):</strong> 0 = บวก, 1 = ลบ</li>
            <li><strong>Exponent (เลขชี้กำลัง):</strong> บอกขอบเขตความกว้างของตัวเลข</li>
            <li><strong>Mantissa / Fraction (แมนทิสซา):</strong> เก็บเลขนัยสำคัญ</li>
          </ul>
        </div>
      </div>

      <!-- Quick Quiz Box Unit 2 -->
      <div class="quiz-check-card mt-4">
        <div class="quiz-q-title">💡 คำถามชวนคิดท้ายหน่วยที่ 2: จำนวนใดต่อไปนี้จัดเป็น "จำนวนอตรรกยะ (Irrational Number)"?</div>
        <div class="quiz-options">
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, '3/4 เขียนเป็นเศษส่วนได้ จึงเป็นจำนวนตรรกยะจ้า')">A) 3/4</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, true, 'ถูกต้องเก่งมาก! ค่าพาย π เป็นทศนิยมไม่ซ้ำไม่รู้จบ จึงเป็นจำนวนอตรรกยะ')">B) ค่าพาย (π) 🎉</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, '0 เป็นจำนวนเต็ม จึงเป็นจำนวนตรรกยะจ้า')">C) 0</button>
        </div>
        <div class="quiz-feedback-box"></div>
      </div>
    `,
    notes: "เฉลยให้นักเรียนเข้าใจว่าค่า π และ √2 เขียนในรูปเศษส่วนของจำนวนเต็มไม่ได้ จึงเป็นจำนวนอตรรกยะ"
  },

  // -------------------------------------------------------------
  // UNIT 3: ระบบเซต (Set Theory)
  // -------------------------------------------------------------
  {
    id: "u3-s1",
    unitId: 3,
    unitTitle: "หน่วยที่ 3: ระบบเซต",
    title: "3.1 ความหมายและการเขียนเซต (Sets)",
    subtitle: "กลุ่มของสิ่งต่างๆ ที่ระบุได้ชัดเจนว่าเป็นสมาชิกหรือไม่",
    type: "content",
    tag: "ทฤษฎีเซต",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <h3>ความหมายและสัญลักษณ์ของเซต</h3>
          <p>
            <strong>เซต (Set)</strong> คือกลุ่มของสิ่งต่าง ๆ สิ่งที่อยู่ในเซตเรียกว่า <strong>"สมาชิก (Element)"</strong>
          </p>
          <ul class="custom-list">
            <li>\\( x \\in A \\) หมายถึง \\( x \\) เป็นสมาชิกของเซต \\( A \\)</li>
            <li>\\( x \\notin A \\) หมายถึง \\( x \\) ไม่เป็นสมาชิกของเซต \\( A \\)</li>
            <li><strong>เซตว่าง (Empty Set : \\( \\emptyset \\) หรือ \\( \\{\\} \\)):</strong> เซตที่ไม่มีสมาชิกเลย เช่น \\( n(\\emptyset) = 0 \\)</li>
            <li><strong>เอกภพสัมพัทธ์ (\\( \\mathcal{U} \\)):</strong> เซตที่กำหนดขอบเขตของสมาชิกทั้งหมดที่กำลังพิจารณา</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>วิธีการเขียนเซต 2 รูปแบบ</h3>
          <div class="set-types-box">
            <div class="set-type-item">
              <h4>1. แบบแจกแจงสมาชิก (Roster Method)</h4>
              <p>เขียนสมาชิกทุกตัวคั่นด้วยจุลภาค ในเครื่องหมายปีกกา:</p>
              <code>A = {2, 4, 6, 8, 10}</code>
            </div>
            <div class="set-type-item mt-3">
              <h4>2. แบบบอกเงื่อนไข (Set-Builder Notation)</h4>
              <p>ใช้ตัวแปรแทนสมาชิกแล้วระบุเงื่อนไขคุณสมบัติ:</p>
              <code>A = { x | x เป็นจำนวนคู่บวกที่น้อยกว่าหรือเท่ากับ 10 }</code>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "ยกตัวอย่างเซตของนักเรียนแผนกคอมพิวเตอร์ห้อง ปวช.1 เพื่อให้เห็นภาพเอกภพสัมพัทธ์"
  },
  {
    id: "u3-s2",
    unitId: 3,
    unitTitle: "หน่วยที่ 3: ระบบเซต",
    title: "3.2 สับเซตและเพาเวอร์เซต (Subsets & Power Sets)",
    subtitle: "ความสัมพันธ์ระหว่างเซต และการคำนวณจำนวนสับเซตที่เป็นไปได้ทั้งหมด",
    type: "content",
    tag: "สับเซต & เพาเวอร์เซต",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <h3>สับเซต (Subset : \\( \\subset \\))</h3>
          <p>
            \\( A \\subset B \\) ก็ต่อเมื่อ สมาชิกทุกตัวของเซต \\( A \\) เป็นสมาชิกของเซต \\( B \\)
          </p>
          <ul class="custom-list mt-2">
            <li><strong>เซตว่าง:</strong> เป็นสับเซตของทุกเซตเสมอ (\\( \\emptyset \\subset A \\))</li>
            <li><strong>เซตตัวเอง:</strong> เป็นสับเซตของตัวเองเสมอ (\\( A \\subset A \\))</li>
            <li>จำนวนสับเซตทั้งหมดของเซตที่มีสมาชิก \\( n \\) ตัว เท่ากับ <strong>\\( 2^n \\)</strong> สับเซต</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>เพาเวอร์เซต (Power Set : \\( P(A) \\))</h3>
          <p>คือ <strong>เซตของสับเซตทั้งหมด</strong> ของเซต \\( A \\)</p>
          <div class="formula-box">
            ถ้า \\( A = \\{1, 2\\} \\) มีสมาชิก 2 ตัว (\\( n = 2 \\))<br>
            จำนวนสับเซต = \\( 2^2 = 4 \\) ตัว ได้แก่:<br>
            \\( P(A) = \\{ \\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\} \\} \\)
          </div>
          <p class="small-text text-muted mt-2">
            *เปรียบเหมือนการเลือกเปิด/ปิดสวิตช์ในคอมพิวเตอร์ แต่ละตัวเลือกมี 2 สถานะ (เลือก หรือ ไม่เลือก)
          </p>
        </div>
      </div>
    `,
    notes: "เน้นย้ำสูตร 2^n สับเซต ซึ่งเชื่อมโยงกับเลขฐานสอง 2^n ในระบบคอมพิวเตอร์"
  },
  {
    id: "u3-s3",
    unitId: 3,
    unitTitle: "หน่วยที่ 3: ระบบเซต",
    title: "3.3 การดำเนินการบนเซต (Set Operations)",
    subtitle: "ยูเนียน (Union), อินเตอร์เซกชัน (Intersection), ผลต่าง (Difference), และคอมพลีเมนต์ (Complement)",
    type: "interactive",
    tag: "การดำเนินการบนเซต",
    content: `
      <div class="cards-grid-4 mb-3">
        <div class="mini-op-card" onclick="setVennMode('union')">
          <strong>A ∪ B (ยูเนียน)</strong>
          <small>เอาหมดทั้ง A หรือ B</small>
        </div>
        <div class="mini-op-card" onclick="setVennMode('intersect')">
          <strong>A ∩ B (อินเตอร์เซกชัน)</strong>
          <small>เอาเฉพาะที่ซ้ำกัน</small>
        </div>
        <div class="mini-op-card" onclick="setVennMode('diff')">
          <strong>A - B (ผลต่าง)</strong>
          <small>อยู่ใน A แต่ไม่อยู่ใน B</small>
        </div>
        <div class="mini-op-card" onclick="setVennMode('comp')">
          <strong>A' (คอมพลีเมนต์)</strong>
          <small>อยู่นอก A ทั้งหมด</small>
        </div>
      </div>

      <!-- Interactive Venn Diagram Simulation -->
      <div class="venn-interactive-container">
        <div class="venn-preview-box">
          <svg viewBox="0 0 460 240" class="venn-svg">
            <rect x="10" y="10" width="440" height="220" rx="12" class="venn-rect" id="vennUniverse" />
            <text x="30" y="35" class="venn-label">U (เอกภพสัมพัทธ์)</text>
            <circle cx="170" cy="120" r="80" class="venn-circle circle-a" id="vennCircleA" />
            <circle cx="270" cy="120" r="80" class="venn-circle circle-b" id="vennCircleB" />
            <text x="130" y="125" class="venn-circle-text">A</text>
            <text x="310" y="125" class="venn-circle-text">B</text>
          </svg>
        </div>
        <div class="venn-controls-panel">
          <div class="venn-status-title" id="vennTitle">การดำเนินการ: ยูเนียน (A ∪ B)</div>
          <p id="vennDesc">สมาชิกรวมทั้งหมดที่อยู่ในเซต A หรืออยู่ในเซต B หรืออยู่ทั้งสองเซต</p>
          <div class="venn-sql-tag" id="vennSql">เปรียบเทียบในฐานข้อมูล: <code>FULL OUTER JOIN / UNION</code></div>
        </div>
      </div>

      <!-- Quick Quiz Box Unit 3 -->
      <div class="quiz-check-card mt-4">
        <div class="quiz-q-title">💡 คำถามชวนคิดท้ายหน่วยที่ 3: ถ้า A = {1, 2, 3} และ B = {3, 4, 5} แล้ว A ∩ B มีสมาชิกกี่ตัว?</div>
        <div class="quiz-options">
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, true, 'ยอดเยี่ยมมาก! สมาชิกที่ซ้ำกันมีตัวเดียวคือ {3} จึงมี 1 ตัว')">A) 1 ตัว (คือ {3}) 🎉</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, 'ลองดูสมาชิกที่ซ้ำกันระหว่าง A และ B ดีๆ นะคะ')">B) 3 ตัว</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, '5 ตัวคือจำนวนสมาชิกของยูเนียน A ∪ B จ้า')">C) 5 ตัว</button>
        </div>
        <div class="quiz-feedback-box"></div>
      </div>
    `,
    notes: "คลิกปุ่มการดำเนินการบนเซตเพื่อเปลี่ยนไฮไลต์บนแผนภาพเวนน์-ออยเลอร์แบบอินเตอร์แอคทีฟ"
  },

  // -------------------------------------------------------------
  // UNIT 4: ระบบสมการเชิงเส้น (Systems of Linear Equations)
  // -------------------------------------------------------------
  {
    id: "u4-s1",
    unitId: 4,
    unitTitle: "หน่วยที่ 4: ระบบสมการเชิงเส้น",
    title: "4.1 สมการเชิงเส้นตัวแปรเดียวและสองตัวแปร",
    subtitle: "รูปแบบมาตรฐานและการตีความทางเรขาคณิต (กราฟเส้นตรง)",
    type: "content",
    tag: "สมการเชิงเส้น",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <div class="badge badge-primary mb-2">1 ตัวแปร</div>
          <h3>สมการเชิงเส้นตัวแปรเดียว</h3>
          <p>รูปแบบทั่วไป: <strong>\\( ax + b = 0 \\)</strong> เมื่อ \\( a \\neq 0 \\)</p>
          <div class="formula-box">
            ตัวอย่าง: \\( 3x - 12 = 0 \\)<br>
            \\( 3x = 12 \\implies x = \\frac{12}{3} = 4 \\)
          </div>
          <p class="text-muted mt-2 small-text">คำตอบของสมการมีเพียงค่าเดียวเสมอ</p>
        </div>

        <div class="feature-card">
          <div class="badge badge-accent mb-2">2 ตัวแปร</div>
          <h3>สมการเชิงเส้นสองตัวแปร</h3>
          <p>รูปแบบทั่วไป: <strong>\\( Ax + By = C \\)</strong> หรือ <strong>\\( y = mx + c \\)</strong></p>
          <div class="formula-box">
            \\( m = \\) ความชัน (Slope)<br>
            \\( c = \\) จุดตัดแกน Y (Y-Intercept)
          </div>
          <p class="text-muted mt-2 small-text">กราฟของสมการเชิงเส้นสองตัวแปรจะเป็น <em>"เส้นตรง"</em> เสมอ</p>
        </div>
      </div>
    `,
    notes: "อธิบายว่าทำไมถึงเรียกว่าสมการเชิงเส้น เพราะเมื่อนำไปพล็อตบนกราฟจะได้เส้นตรง (Line -> Linear)"
  },
  {
    id: "u4-s2",
    unitId: 4,
    unitTitle: "หน่วยที่ 4: ระบบสมการเชิงเส้น",
    title: "4.2 วิธีการแก้ระบบสมการเชิงเส้น 2 ตัวแปร",
    subtitle: "วิธีแทนค่า (Substitution) และวิธีกำจัดตัวแปร (Elimination)",
    type: "content",
    tag: "การแก้ระบบสมการ",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <div class="badge badge-primary mb-2">วิธีที่ 1</div>
          <h3>วิธีกำจัดตัวแปร (Elimination)</h3>
          <p>ทำให้สัมประสิทธิ์หน้าตัวแปรตัวใดตัวหนึ่งเท่ากัน แล้วนำสองสมการมาบวกหรือลบกัน:</p>
          <div class="math-steps-card">
            \\( 2x + y = 7 \\) &nbsp;&nbsp;--- (1)<br>
            \\( x - y = 2 \\) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--- (2)<br>
            <hr class="card-divider">
            นำ (1) + (2) : \\( 3x = 9 \\implies x = 3 \\)<br>
            แทนค่า \\( x = 3 \\) ใน (2): \\( 3 - y = 2 \\implies y = 1 \\)<br>
            <span class="highlight-ans">คำตอบคือ (x = 3, y = 1)</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="badge badge-accent mb-2">วิธีที่ 2</div>
          <h3>วิธีแทนค่า (Substitution)</h3>
          <p>จัดรูปตัวแปรหนึ่งในเทอมของอีกตัวแปรหนึ่ง แล้วนำไปแทนในอีกสมการ:</p>
          <div class="math-steps-card">
            จากสมการ (2): \\( x = 2 + y \\)<br>
            นำไปแทนใน (1): \\( 2(2 + y) + y = 7 \\)<br>
            \\( 4 + 2y + y = 7 \\implies 3y = 3 \\implies y = 1 \\)<br>
            หาค่า \\( x = 2 + 1 = 3 \\)<br>
            <span class="highlight-ans">คำตอบคือ (x = 3, y = 1) เท่ากัน!</span>
          </div>
        </div>
      </div>
    `,
    notes: "ให้นักเรียนสังเกตว่าทั้งสองวิธีได้คำตอบเหมือนกัน อยู่ที่ว่าโจทย์เอื้อให้ใช้วิธีไหนเร็วกว่า"
  },
  {
    id: "u4-s3",
    unitId: 4,
    unitTitle: "หน่วยที่ 4: ระบบสมการเชิงเส้น",
    title: "4.3 การประยุกต์ระบบสมการในงานธุรกิจและการเขียนโปรแกรม",
    subtitle: "การวิเคราะห์จุดคุ้มทุน (Break-Even Point) และการวางแผนทรัพยากร",
    type: "content",
    tag: "การประยุกต์ใช้งาน",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <h3>การวิเคราะห์จุดคุ้มทุน (Break-Even Point)</h3>
          <p>จุดที่รายรับรวม (Total Revenue: TR) เท่ากับต้นทุนรวม (Total Cost: TC):</p>
          <div class="formula-box">
            ต้นทุนรวม: \\( TC = 5000 + 30x \\) (ค่าเช่า + ทุนต่อชิ้น)<br>
            รายได้รวม: \\( TR = 80x \\) (ราคาขายชิ้นละ 80 บ.)<br>
            <hr class="card-divider">
            ณ จุดคุ้มทุน: \\( 80x = 5000 + 30x \\)<br>
            \\( 50x = 5000 \\implies x = 100 \\text{ ชิ้น} \\)
          </div>
        </div>

        <div class="feature-card">
          <div class="badge badge-success mb-2">โมเดลในเกมและกราฟิก</div>
          <h3>Ray-Casting & Line Intersections</h3>
          <p>การตรวจจับการคลิกเมาส์บนจอเกม (Mouse Picking) คำนวณด้วยการหารอยตัดระหว่างเส้นทางแสงเลเซอร์กับพื้นผิววัตถุด้วยระบบสมการเชิงเส้น!</p>
        </div>
      </div>

      <!-- Quick Quiz Box Unit 4 -->
      <div class="quiz-check-card mt-4">
        <div class="quiz-q-title">💡 คำถามชวนคิดท้ายหน่วยที่ 4: จากสมการ 2x - 6 = 10 ค่าของ x มีค่าเท่าใด?</div>
        <div class="quiz-options">
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, 'ย้าย -6 ไปบวก จะได้ 2x = 16 นะคะ ลองคิดใหม่จ้า')">A) x = 2</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, true, 'เก่งมากจ้า! 2x = 10 + 6 = 16 ดังนั้น x = 16/2 = 8')">B) x = 8 🎉</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, 'ยังไม่ถูกต้องจ้า')">C) x = 16</button>
        </div>
        <div class="quiz-feedback-box"></div>
      </div>
    `,
    notes: "ฝึกให้นักเรียนย้ายข้างสมการและตรวจคำตอบด้วยความมั่นใจ"
  },

  // -------------------------------------------------------------
  // UNIT 5: ตรรกศาสตร์ (Mathematical Logic)
  // -------------------------------------------------------------
  {
    id: "u5-s1",
    unitId: 5,
    unitTitle: "หน่วยที่ 5: ตรรกศาสตร์",
    title: "5.1 ประพจน์และตัวเชื่อมทางตรรกศาสตร์ (Logic)",
    subtitle: "ประโยคบอกเล่าหรือปฏิเสธที่มีค่าความจริงเป็นจริง (T) หรือเท็จ (F) อย่างใดอย่างหนึ่ง",
    type: "content",
    tag: "ตรรกศาสตร์",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <h3>ประพจน์คืออะไร? (Proposition)</h3>
          <ul class="custom-list">
            <li><strong>เป็นประพจน์:</strong> "กรุงเทพฯ เป็นเมืองหลวงของไทย" (T)</li>
            <li><strong>เป็นประพจน์:</strong> "5 + 3 = 10" (F)</li>
            <li><strong>ไม่เป็นประพจน์:</strong> ประโยคคำถาม คำสั่ง ขอร้อง อุทาน เช่น "กินข้าวหรือยัง?", "ช่วยปิดไฟด้วย!"</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>ตัวเชื่อมประพจน์ 5 ชนิดหลัก</h3>
          <div class="logic-symbols-grid">
            <div class="logic-item">
              <span class="symbol-badge">∧</span>
              <strong>และ (AND)</strong>
              <small>จริงเมื่อ <em>จริงทั้งคู่</em></small>
            </div>
            <div class="logic-item">
              <span class="symbol-badge">∨</span>
              <strong>หรือ (OR)</strong>
              <small>เท็จเมื่อ <em>เท็จทั้งคู่</em></small>
            </div>
            <div class="logic-item">
              <span class="symbol-badge">→</span>
              <strong>ถ้า...แล้ว (IF)</strong>
              <small>เท็จกรณีเดียว: <em>T → F</em></small>
            </div>
            <div class="logic-item">
              <span class="symbol-badge">↔</span>
              <strong>ก็ต่อเมื่อ (IFF)</strong>
              <small>จริงเมื่อ <em>เหมือนกัน</em></small>
            </div>
            <div class="logic-item">
              <span class="symbol-badge">~</span>
              <strong>นิเสธ (NOT)</strong>
              <small>สลับค่าความจริงตรงข้าม</small>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "ชี้ให้เห็นว่าเงื่อนไข if (condition) ในภาษาคอมพิวเตอร์ ทำงานตามตรรกศาสตร์นี้ทุกประการ"
  },
  {
    id: "u5-s2",
    unitId: 5,
    unitTitle: "หน่วยที่ 5: ตรรกศาสตร์",
    title: "5.2 ตารางค่าความจริง (Truth Table Generator)",
    subtitle: "ตารางวิเคราะห์ค่าความจริงของทุกกรณีที่เป็นไปได้",
    type: "interactive",
    tag: "ตารางค่าความจริง",
    content: `
      <div class="table-responsive">
        <table class="styled-table text-center">
          <thead>
            <tr>
              <th>p</th>
              <th>q</th>
              <th>~p (NOT)</th>
              <th>p ∧ q (AND)</th>
              <th>p ∨ q (OR)</th>
              <th>p → q (IF)</th>
              <th>p ↔ q (IFF)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="badge badge-success">T</span></td>
              <td><span class="badge badge-success">T</span></td>
              <td>F</td>
              <td><strong class="text-success">T</strong></td>
              <td><strong class="text-success">T</strong></td>
              <td><strong class="text-success">T</strong></td>
              <td><strong class="text-success">T</strong></td>
            </tr>
            <tr>
              <td><span class="badge badge-success">T</span></td>
              <td><span class="badge badge-danger">F</span></td>
              <td>F</td>
              <td>F</td>
              <td><strong class="text-success">T</strong></td>
              <td><strong class="text-danger">F ⚠️</strong></td>
              <td>F</td>
            </tr>
            <tr>
              <td><span class="badge badge-danger">F</span></td>
              <td><span class="badge badge-success">T</span></td>
              <td><strong class="text-success">T</strong></td>
              <td>F</td>
              <td><strong class="text-success">T</strong></td>
              <td><strong class="text-success">T</strong></td>
              <td>F</td>
            </tr>
            <tr>
              <td><span class="badge badge-danger">F</span></td>
              <td><span class="badge badge-danger">F</span></td>
              <td><strong class="text-success">T</strong></td>
              <td>F</td>
              <td><strong class="text-danger">F ⚠️</strong></td>
              <td><strong class="text-success">T</strong></td>
              <td><strong class="text-success">T</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="alert-box-tip mt-3">
        <strong>💡 ทริคการจำสำหรับนักเรียน:</strong><br>
        • <strong>และ (∧):</strong> ต้องจริงคู่กันจึงจะจริง (เหมือนซื้อของ ต้องมีตังค์ 'และ' ร้านเปิด)<br>
        • <strong>หรือ (∨):</strong> ขอแค่จริงตัวเดียวก็ผ่าน (เหมือนสอบติดรอบ 1 'หรือ' รอบ 2 ก็ได้เรียน)<br>
        • <strong>ถ้า...แล้ว (→):</strong> ผิดสัญญาอย่างเดียวคือ "สัญญาว่าจะทำ (T) แต่ไม่ทำ (F)" จึงเป็น F
      </div>
    `,
    notes: "เน้นย้ำจุดที่นักเรียนมักจำสับสน คือ p -> q กรณี F -> T จะได้จริงเสมอ"
  },
  {
    id: "u5-s3",
    unitId: 5,
    unitTitle: "หน่วยที่ 5: ตรรกศาสตร์",
    title: "5.3 สัจนิรันดร์และสมมูล (Tautology & Equivalence)",
    subtitle: "ประพจน์ที่มีค่าความจริงเป็นจริงในทุกกรณี และรูปแบบที่ใช้แทนกันได้",
    type: "content",
    tag: "สัจนิรันดร์ & สมมูล",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <div class="badge badge-primary mb-2">จริงเสมอทุกกรณี</div>
          <h3>สัจนิรันดร์ (Tautology)</h3>
          <p>คือรูปแบบประพจน์ที่มีค่าความจริงเป็น <strong>จริง (T) ในทุกกรณี</strong> ไม่ว่าตัวแปรร่วมจะมีค่าเป็นจริงหรือเท็จ</p>
          <div class="formula-box">
            ตัวอย่าง: \\( p \\lor \\sim p \\)<br>
            • ถ้า p = T ➔ T ∨ F = <strong>T</strong><br>
            • ถ้า p = F ➔ F ∨ T = <strong>T</strong><br>
            (เป็นสัจนิรันดร์เสมอ)
          </div>
        </div>

        <div class="feature-card">
          <div class="badge badge-accent mb-2">ความจริงตรงกัน</div>
          <h3>การสมมูลกัน (Equivalence : \\( \\equiv \\))</h3>
          <p>รูปแบบที่พบบ่อยในการลดรูปเงื่อนไขโปรแกรม:</p>
          <ul class="custom-list mt-2">
            <li>\\( p \\rightarrow q \\equiv \\sim p \\lor q \\) (สูตรถ้า...แล้ว)</li>
            <li>\\( \\sim (p \\land q) \\equiv \\sim p \\lor \\sim q \\) (เดอมอร์แกน)</li>
            <li>\\( \\sim (p \\lor q) \\equiv \\sim p \\land \\sim q \\) (เดอมอร์แกน)</li>
          </ul>
        </div>
      </div>

      <!-- Quick Quiz Box Unit 5 -->
      <div class="quiz-check-card mt-4">
        <div class="quiz-q-title">💡 คำถามชวนคิดท้ายหน่วยที่ 5: ถ้าประพจน์ p เป็นจริง (T) และ q เป็นเท็จ (F) ประพจน์ p → q มีค่าความจริงเป็นอะไร?</div>
        <div class="quiz-options">
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, 'T → F เป็นกรณีเดียวที่ทำให้ ถ้า...แล้ว กลายเป็นเท็จนะจ๊ะ')">A) เป็นจริง (T)</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, true, 'ถูกต้องแม่นยำ! T → F คือผิดสัญญา จึงได้ผลลัพธ์เป็นเท็จ (F) ทันที')">B) เป็นเท็จ (F) 🎉</button>
        </div>
        <div class="quiz-feedback-box"></div>
      </div>
    `,
    notes: "ช่วยย้ำสูตร p -> q สมมูลกับ ~p v q ให้นักเรียนจำเพื่อนำไปใช้ในวิชาโครงสร้างข้อมูลและฐานข้อมูล"
  },

  // -------------------------------------------------------------
  // UNIT 6: ระบบเลขฐาน (Base Number Systems)
  // -------------------------------------------------------------
  {
    id: "u6-s1",
    unitId: 6,
    unitTitle: "หน่วยที่ 6: ระบบเลขฐาน",
    title: "6.1 ระบบเลขฐานในคอมพิวเตอร์ (Base Numbers)",
    subtitle: "ฐานสอง (Base 2), ฐานแปด (Base 8), ฐานสิบ (Base 10), และฐานสิบหก (Base 16)",
    type: "content",
    tag: "ระบบเลขฐาน",
    content: `
      <div class="cards-grid-4">
        <div class="feature-card base-card">
          <div class="badge badge-primary">Base 2</div>
          <h3>เลขฐานสอง (Binary)</h3>
          <div class="base-digits">สัญลักษณ์: <code>0, 1</code></div>
          <p class="small-text mt-2">ภาษาของฮาร์ดแวร์คอมพิวเตอร์ สอดคล้องกับสถานะเปิด/ปิดของกระแสไฟฟ้า</p>
        </div>

        <div class="feature-card base-card">
          <div class="badge badge-success">Base 8</div>
          <h3>เลขฐานแปด (Octal)</h3>
          <div class="base-digits">สัญลักษณ์: <code>0-7</code></div>
          <p class="small-text mt-2">ใช้จัดกลุ่มเลขฐานสองทีละ 3 บิต เพื่อให้มนุษย์อ่านและเขียนได้สั้นลง</p>
        </div>

        <div class="feature-card base-card">
          <div class="badge badge-accent">Base 10</div>
          <h3>เลขฐานสิบ (Decimal)</h3>
          <div class="base-digits">สัญลักษณ์: <code>0-9</code></div>
          <p class="small-text mt-2">เลขฐานที่มนุษย์ใช้ในชีวิตประจำวัน มีค่าประจำหลักเป็นเลขยกกำลังของ 10</p>
        </div>

        <div class="feature-card base-card">
          <div class="badge badge-purple">Base 16</div>
          <h3>เลขฐานสิบหก (Hex)</h3>
          <div class="base-digits"><code>0-9</code> และ <code>A-F</code></div>
          <p class="small-text mt-2">ใช้ในโค้ดสีเว็บ (#FFFFFF), Memory Address โดย A=10, B=11, C=12, D=13, E=14, F=15</p>
        </div>
      </div>
    `,
    notes: "เน้นย้ำว่าเลขฐาน 16 ตัวอักษร A ถึง F แทนตัวเลข 10 ถึง 15 เพื่อไม่ให้สับสนกับสองหลัก"
  },
  {
    id: "u6-s2",
    unitId: 6,
    unitTitle: "หน่วยที่ 6: ระบบเลขฐาน",
    title: "6.2 เครื่องมือแปลงเลขฐานทันใจ (Base Converter Widget)",
    subtitle: "พิมพ์ตัวเลขเพื่อดูการแปลงฐาน 2, 8, 10, 16 แบบเรียลไทม์",
    type: "interactive",
    tag: "เครื่องมือคำนวณ",
    content: `
      <div class="interactive-converter-widget">
        <div class="conv-input-row">
          <label>พิมพ์ตัวเลขฐานสิบ (Decimal):</label>
          <input type="number" id="baseInputDec" class="styled-input" value="25" min="0" oninput="calculateBases(this.value)">
        </div>

        <div class="cards-grid-4 mt-4">
          <div class="conv-res-card">
            <span class="conv-label">ฐานสิบ (Decimal : Base 10)</span>
            <div class="conv-value" id="resDec">25</div>
          </div>
          <div class="conv-res-card highlight-res">
            <span class="conv-label">ฐานสอง (Binary : Base 2)</span>
            <div class="conv-value" id="resBin">11001</div>
          </div>
          <div class="conv-res-card">
            <span class="conv-label">ฐานแปด (Octal : Base 8)</span>
            <div class="conv-value" id="resOct">31</div>
          </div>
          <div class="conv-res-card highlight-res-alt">
            <span class="conv-label">ฐานสิบหก (Hex : Base 16)</span>
            <div class="conv-value" id="resHex">19</div>
          </div>
        </div>

        <div class="conv-steps-explainer mt-4" id="convSteps">
          <strong>วิธีการคิดแปลง 25 ฐานสิบเป็นฐานสอง (หารสั้นด้วย 2):</strong><br>
          • 25 ÷ 2 = 12 เศษ <strong>1</strong><br>
          • 12 ÷ 2 = 6 เศษ <strong>0</strong><br>
          • 6 ÷ 2 = 3 เศษ <strong>0</strong><br>
          • 3 ÷ 2 = 1 เศษ <strong>1</strong><br>
          • 1 ÷ 2 = 0 เศษ <strong>1</strong><br>
          ➔ อ่านย้อนกลับจากล่างขึ้นบน จะได้ <strong>11001₂</strong>
        </div>
      </div>
    `,
    notes: "ให้ผู้เรียนลองใส่ตัวเลขวันเกิดของตนเอง แล้วดูว่าแปลงเป็นเลขฐานสองได้เท่าใด"
  },
  {
    id: "u6-s3",
    unitId: 6,
    unitTitle: "หน่วยที่ 6: ระบบเลขฐาน",
    title: "6.3 เทคนิคลัดการแปลงระหว่างฐาน 2, 8 และ 16",
    subtitle: "การจับกลุ่มบิต 3 บิตสำหรับฐานแปด และ 4 บิตสำหรับฐานสิบหก",
    type: "content",
    tag: "เทคนิคลัดจับกลุ่มบิต",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <div class="badge badge-success mb-2">กลุ่มละ 3 บิต (\\( 2^3 = 8 \\))</div>
          <h3>แปลงระหว่าง ฐาน 2 ⇄ ฐาน 8</h3>
          <p>แบ่งเลขฐานสองจากขวาไปซ้ายทีละ 3 บิต:</p>
          <div class="math-steps-card">
            ตัวเลข: <code>11010111₂</code><br>
            จับกลุ่ม 3 บิต: <code>[011] [010] [111]</code><br>
            แปลงเป็นฐานแปด: <code>&nbsp;&nbsp;3 &nbsp;&nbsp;&nbsp;&nbsp;2 &nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;</code> = <strong>327₈</strong>
          </div>
        </div>

        <div class="feature-card">
          <div class="badge badge-purple mb-2">กลุ่มละ 4 บิต (\\( 2^4 = 16 \\))</div>
          <h3>แปลงระหว่าง ฐาน 2 ⇄ ฐาน 16</h3>
          <p>แบ่งเลขฐานสองจากขวาไปซ้ายทีละ 4 บิต:</p>
          <div class="math-steps-card">
            ตัวเลข: <code>11010111₂</code><br>
            จับกลุ่ม 4 บิต: <code>[1101] [0111]</code><br>
            แปลงเป็นฐานสิบหก: <code>&nbsp;&nbsp;D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;</code> = <strong>D7₁₆</strong>
          </div>
        </div>
      </div>

      <!-- Quick Quiz Box Unit 6 -->
      <div class="quiz-check-card mt-4">
        <div class="quiz-q-title">💡 คำถามชวนคิดท้ายหน่วยที่ 6: ตัวเลขฐานสิบหก "A" มีค่าตรงกับเลขฐานสิบเท่าใด?</div>
        <div class="quiz-options">
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, true, 'เก่งมากจ้า! A = 10, B = 11, C = 12, D = 13, E = 14, F = 15')">A) 10 🎉</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, '11 คือตัวอักษร B จ้า')">B) 11</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, '15 คือตัวอักษร F จ้า')">C) 15</button>
        </div>
        <div class="quiz-feedback-box"></div>
      </div>
    `,
    notes: "ฝึกนักเรียนท่อง A=10, B=11, C=12, D=13, E=14, F=15 ให้คล่องขึ้นใจ"
  },

  // -------------------------------------------------------------
  // UNIT 7: พีชคณิตบูลีนและลอจิกเกต (Boolean Algebra)
  // -------------------------------------------------------------
  {
    id: "u7-s1",
    unitId: 7,
    unitTitle: "หน่วยที่ 7: พีชคณิตบูลีน & ลอจิกเกต",
    title: "7.1 พีชคณิตบูลีน (Boolean Algebra)",
    subtitle: "ระบบคณิตศาสตร์ที่ตัวแปรมีค่าเพียงสองสถานะ: 1 (True) หรือ 0 (False)",
    type: "content",
    tag: "พีชคณิตบูลีน",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <h3>การดำเนินการหลักของบูลีน</h3>
          <ul class="custom-list">
            <li><strong>AND (การคูณบูลีน):</strong> เขียนแทนด้วย \\( A \\cdot B \\) หรือ \\( AB \\) (เป็น 1 เมื่อทั้งคู่เป็น 1)</li>
            <li><strong>OR (การบวกบูลีน):</strong> เขียนแทนด้วย \\( A + B \\) (เป็น 1 เมื่อตัวใดตัวหนึ่งเป็น 1)</li>
            <li><strong>NOT (ส่วนเติมเต็ม/คอมพลีเมนต์):</strong> เขียนแทนด้วย \\( \\overline{A} \\) หรือ \\( A' \\) (กลับค่าตรงข้าม)</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>กฎสำคัญของพีชคณิตบูลีน (Boolean Laws)</h3>
          <div class="laws-grid">
            <div class="law-item">
              <strong>กฎเอกลักษณ์ (Identity)</strong><br>
              \\( A + 0 = A \\)<br>
              \\( A \\cdot 1 = A \\)
            </div>
            <div class="law-item">
              <strong>กฎการซ้ำซ้อน (Idempotent)</strong><br>
              \\( A + A = A \\)<br>
              \\( A \\cdot A = A \\)
            </div>
            <div class="law-item">
              <strong>กฎอินเวอร์ส (Inverse)</strong><br>
              \\( A + \\overline{A} = 1 \\)<br>
              \\( A \\cdot \\overline{A} = 0 \\)
            </div>
            <div class="law-item highlight-law">
              <strong>ทฤษฎีบทเดอมอร์แกน (De Morgan's Laws)</strong><br>
              \\( \\overline{A + B} = \\overline{A} \\cdot \\overline{B} \\)<br>
              \\( \\overline{A \\cdot B} = \\overline{A} + \\overline{B} \\)
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "เน้นย้ำทฤษฎีเดอมอร์แกน (De Morgan) ซึ่งเป็นสูตรสำคัญในการลดรูปวงจรดิจิทัล"
  },
  {
    id: "u7-s2",
    unitId: 7,
    unitTitle: "หน่วยที่ 7: พีชคณิตบูลีน & ลอจิกเกต",
    title: "7.2 ลอจิกเกตพื้นฐาน (Interactive Logic Gate Simulator)",
    subtitle: "ทดลองคลิกสวิตช์อินพุต A และ B เพื่อดูผลลัพธ์ของหลอดไฟแบบสดๆ!",
    type: "interactive",
    tag: "วงจรตรรกะ",
    content: `
      <div class="gate-simulator-wrap">
        <div class="gate-controls-bar">
          <label>เลือกเกต (Select Gate):</label>
          <select id="gateSelect" class="styled-select" onchange="updateGateSim()">
            <option value="AND">AND Gate (คูณ)</option>
            <option value="OR">OR Gate (บวก)</option>
            <option value="NOT">NOT Gate (อินเวอร์ส อินพุต A เท่านั้น)</option>
            <option value="NAND">NAND Gate (NOT-AND)</option>
            <option value="NOR">NOR Gate (NOT-OR)</option>
            <option value="XOR">XOR Gate (Exclusive OR)</option>
          </select>
        </div>

        <div class="gate-canvas-board">
          <div class="gate-inputs-col">
            <button class="switch-btn" id="switchA" onclick="toggleSwitch('A')">
              สวิตช์ A: <span class="val-badge" id="badgeA">0 (OFF)</span>
            </button>
            <button class="switch-btn mt-3" id="switchB" onclick="toggleSwitch('B')">
              สวิตช์ B: <span class="val-badge" id="badgeB">0 (OFF)</span>
            </button>
          </div>

          <div class="gate-symbol-center">
            <div class="gate-symbol-icon" id="gateIconDisplay">AND</div>
            <div class="gate-formula-text" id="gateFormulaDisplay">Y = A • B</div>
          </div>

          <div class="gate-output-col">
            <div class="lamp-box" id="lampBox">
              <div class="lamp-bulb" id="lampBulb">💡</div>
              <div class="lamp-status" id="lampStatusText">เอาต์พุต Y = 0 (ไฟดับ)</div>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "ชวนนักเรียนเลือกเกต XOR แล้วกดสลับสวิตช์เพื่อดูว่าไฟจะติดเมื่อสองสวิตช์มีค่าต่างกัน"
  },
  {
    id: "u7-s3",
    unitId: 7,
    unitTitle: "หน่วยที่ 7: พีชคณิตบูลีน & ลอจิกเกต",
    title: "7.3 การลดรูปสมการบูลีน (Boolean Simplification)",
    subtitle: "การลดจำนวนเกตในวงจรเพื่อประหยัดฮาร์ดแวร์และเพิ่มความเร็วในการทำงาน",
    type: "content",
    tag: "การลดรูปวงจร",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <h3>ตัวอย่างการลดรูปสมการ</h3>
          <p>จงลดรูปสมการ: <strong>\\( Y = AB + A\\overline{B} \\)</strong></p>
          <div class="math-steps-card">
            ดึงตัวร่วม \\( A \\) ออกมา:<br>
            \\( Y = A(B + \\overline{B}) \\)<br>
            จากกฎอินเวอร์ส \\( B + \\overline{B} = 1 \\):<br>
            \\( Y = A(1) \\)<br>
            จากกฎเอกลักษณ์ \\( A(1) = A \\):<br>
            <span class="highlight-ans">\\( Y = A \\) (ประหยัดเกตได้ถึง 3 ตัว!)</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="badge badge-accent mb-2">ประโยชน์ในอุตสาหกรรมชิป</div>
          <h3>ทำไมต้องลดรูปวงจร?</h3>
          <ul class="custom-list mt-2">
            <li><strong>ประหยัดต้นทุน:</strong> ลดจำนวนทรานซิสเตอร์บนซิลิคอนเวเฟอร์</li>
            <li><strong>ลดความร้อนสะสม:</strong> ชิปประหยัดพลังงานขึ้น แบตเตอรี่อยู่ได้นาน</li>
            <li><strong>ลดเวลาหน่วง (Propagation Delay):</strong> ข้อมูลเดินทางผ่านเกตน้อยลง ประมวลผลได้ไวขึ้นที่ความถี่สัญญาณนาฬิกาสูง</li>
          </ul>
        </div>
      </div>

      <!-- Quick Quiz Box Unit 7 -->
      <div class="quiz-check-card mt-4">
        <div class="quiz-q-title">💡 คำถามชวนคิดท้ายหน่วยที่ 7: ลอจิกเกตชนิดใดให้เอาต์พุตเป็น 1 เฉพาะเมื่ออินพุตทั้งสองมีค่า 'ต่างกัน' เท่านั้น?</div>
        <div class="quiz-options">
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, 'AND เกตต้องเหมือนกันเป็น 1 ทั้งคู่จ้า')">A) AND Gate</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, true, 'แม่นยำมาก! XOR (Exclusive OR) จะให้ 1 เมื่ออินพุตต่างกัน เช่น 0 กับ 1')">B) XOR Gate 🎉</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, 'OR เกตถ้าเป็น 1 เหมือนกันก็ยังได้ 1 จ้า')">C) OR Gate</button>
        </div>
        <div class="quiz-feedback-box"></div>
      </div>
    `,
    notes: "เน้นย้ำว่า XOR คือหัวใจสำคัญของวงจรบวกเลข (Half Adder / Full Adder) ในซีพียู"
  },

  // -------------------------------------------------------------
  // UNIT 8: เมทริกซ์ (Matrices & Computer Applications)
  // -------------------------------------------------------------
  {
    id: "u8-s1",
    unitId: 8,
    unitTitle: "หน่วยที่ 8: เมทริกซ์และการประยุกต์",
    title: "8.1 ความหมายและมิติของเมทริกซ์ (Matrix Dimensions)",
    subtitle: "การจัดเรียงตัวเลขเป็นแถว (Row) และหลัก (Column) ภายในวงเล็บ",
    type: "content",
    tag: "เมทริกซ์",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <h3>นิยามและมิติ \\( m \\times n \\)</h3>
          <p>
            <strong>เมทริกซ์ (Matrix)</strong> ประกอบด้วย \\( m \\) แถว (แนวนอน) และ \\( n \\) หลัก (แนวตั้ง)
          </p>
          <div class="matrix-display-box">
            \\[
              A = \\begin{bmatrix}
              a_{11} & a_{12} & a_{13} \\\\
              a_{21} & a_{22} & a_{23}
              \\end{bmatrix}_{2 \\times 3}
            \\]
          </div>
          <p class="text-muted small-text mt-2">
            ตัวอย่างข้างต้นคือเมทริกซ์มิติ \\( 2 \\times 3 \\) (2 แถว 3 หลัก) โดย \\( a_{ij} \\) คือสมาชิกแถวที่ \\( i \\) หลักที่ \\( j \\)
          </p>
        </div>

        <div class="feature-card">
          <h3>ชนิดของเมทริกซ์ที่ควรรู้</h3>
          <ul class="custom-list">
            <li><strong>เมทริกซ์จัตุรัส (Square Matrix):</strong> แถวเท่ากับหลัก (\\( n \\times n \\)) เช่น \\( 2 \\times 2, 3 \\times 3 \\)</li>
            <li><strong>เมทริกซ์ศูนย์ (Zero Matrix):</strong> สมาชิกทุกตัวเป็น 0</li>
            <li><strong>เมทริกซ์เอกลักษณ์ (Identity Matrix : \\( I \\)):</strong> เมทริกซ์จัตุรัสที่มีเส้นทแยงมุมหลักเป็น 1 นอกนั้นเป็น 0 ทำหน้าที่เหมือนเลข 1 ในการคูณ:
              \\[
                I = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}
              \\]
            </li>
          </ul>
        </div>
      </div>
    `,
    notes: "เปรียบเทียบเมทริกซ์กับตาราง Array 2 มิติ (เช่น array[row][col]) ในการเขียนโปรแกรม"
  },
  {
    id: "u8-s2",
    unitId: 8,
    unitTitle: "หน่วยที่ 8: เมทริกซ์และการประยุกต์",
    title: "8.2 การดำเนินการบนเมทริกซ์และการหาดีเทอร์มิแนนต์",
    subtitle: "การบวก การคูณด้วยสเกลาร์ และดีเทอร์มิแนนต์ (Determinant)",
    type: "content",
    tag: "การดำเนินการเมทริกซ์",
    content: `
      <div class="cards-grid-2">
        <div class="feature-card">
          <div class="badge badge-primary mb-2">การบวกเมทริกซ์</div>
          <h3>การบวก (Addition)</h3>
          <p>บวกเฉพาะสมาชิกที่ตำแหน่งตรงกัน (มิติต้องเท่ากัน):</p>
          <div class="matrix-display-box">
            \\[
              \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix} + 
              \\begin{bmatrix} 5 & 1 \\\\ 0 & 2 \\end{bmatrix} = 
              \\begin{bmatrix} 1+5 & 3+1 \\\\ 2+0 & 4+2 \\end{bmatrix} = 
              \\begin{bmatrix} 6 & 4 \\\\ 2 & 6 \\end{bmatrix}
            \\]
          </div>
        </div>

        <div class="feature-card">
          <div class="badge badge-accent mb-2">ดีเทอร์มิแนนต์ 2x2</div>
          <h3>สูตรคูณลง - คูณขึ้น</h3>
          <p>สำหรับเมทริกซ์ \\( A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\):</p>
          <div class="formula-box">
            \\[
              \\det(A) = ad - bc
            \\]
            ตัวอย่าง: \\( \\det\\begin{bmatrix} 4 & 2 \\\\ 1 & 3 \\end{bmatrix} = (4 \\times 3) - (2 \\times 1) = 12 - 2 = 10 \\)
          </div>
        </div>
      </div>

      <!-- Quick Quiz Box Unit 8 -->
      <div class="quiz-check-card mt-4">
        <div class="quiz-q-title">💡 คำถามชวนคิดท้ายหน่วยที่ 8: เมทริกซ์มิติ 2x3 และ 3x2 สามารถนำมาบวกกันโดยตรงได้หรือไม่?</div>
        <div class="quiz-options">
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, false, 'การบวกเมทริกซ์ มิติของทั้งสองเมทริกซ์จะต้องเท่ากันเป๊ะๆ นะคะ')">A) บวกกันได้ทันที</button>
          <button class="btn-quiz-opt" onclick="checkQuizAnswer(this, true, 'ถูกต้องมาก! การบวก-ลบเมทริกซ์มิติต้องเท่ากันทุกแถวทุกหลัก แต่ถ้าเป็นการคูณจะคูณกันได้')">B) ไม่ได้ เพราะมิติไม่เท่ากัน 🎉</button>
        </div>
        <div class="quiz-feedback-box"></div>
      </div>
    `,
    notes: "ย้ำว่าการบวกเมทริกซ์ต้องมิติเท่ากัน แต่การคูณเมทริกซ์ A(m x k) กับ B(k x n) จำนวนหลักของตัวหน้าต้องเท่ากับแถวของตัวหลัง"
  },
  {
    id: "u8-s3",
    unitId: 8,
    unitTitle: "หน่วยที่ 8: เมทริกซ์และการประยุกต์",
    title: "8.3 การประยุกต์เมทริกซ์ในงานคอมพิวเตอร์",
    subtitle: "เบื้องหลังภาพดิจิทัล พิกเซลหน้าจอ กราฟิกส์ 3 มิติ และโมเดล AI",
    type: "content",
    tag: "การประยุกต์ใช้งานจริง",
    content: `
      <div class="cards-grid-3">
        <div class="feature-card">
          <div class="icon-circle bg-blue">🖼️</div>
          <h3>1. พิกเซลของภาพ (Pixels)</h3>
          <p>
            ภาพดิจิทัลทุกรูปคือเมทริกซ์! พิกเซลแต่ละจุดเก็บค่าความสว่างของสีแดง เขียว น้ำเงิน (RGB Matrix) ขนาดภาพ 1920×1080 ก็คือเมทริกซ์ขนาด 1080 แถว 1920 หลัก
          </p>
        </div>

        <div class="feature-card">
          <div class="icon-circle bg-purple">🎮</div>
          <h3>2. กราฟิกส์ 2D/3D และเกม</h3>
          <p>
            การหมุนวัตถุ (Rotation), เลื่อนตำแหน่ง (Translation), และย่อ-ขยาย (Scaling) ในเกม 3D เกิดจากการเอาเมทริกซ์พิกัดคูณกับ Transformation Matrix ทั้งหมด
          </p>
        </div>

        <div class="feature-card">
          <div class="icon-circle bg-amber">🤖</div>
          <h3>3. ปัญญาประดิษฐ์ (AI / Neural Net)</h3>
          <p>
            โมเดล Deep Learning และ ChatGPT คำนวณน้ำหนัก (Weights & Biases) ด้วยการคูณเมทริกซ์ขนาดพันล้านตัว การ์ดจอ GPU ถูกสร้างมาเพื่อคูณเมทริกซ์ความเร็วสูงโดยเฉพาะ!
          </p>
        </div>
      </div>
    `,
    notes: "เชื่อมโยงให้เห็นว่าการซื้อการ์ดจอแพงๆ มาเล่นเกมหรือรัน AI ความจริงข้างใน GPU คือเครื่องจักรคูณเมทริกซ์"
  },
  {
    id: "u8-s4",
    unitId: 8,
    unitTitle: "หน่วยที่ 8: เมทริกซ์และการประยุกต์",
    title: "สรุปบทเรียนและแนวทางการทบทวน (Course Summary)",
    subtitle: "ขอแสดงความยินดีกับนักเรียนทุกคนที่พิชิตวิชาคณิตศาสตร์คอมพิวเตอร์!",
    type: "hero",
    tag: "บทสรุปความสำเร็จ",
    content: `
      <div class="hero-slide-grid">
        <div class="hero-text-block">
          <div class="pill-badge badge-success">
            🎉 ขอแสดงความยินดี
          </div>
          <h2 class="gradient-title">ก้าวสำคัญสู่นักพัฒนาซอฟต์แวร์มืออาชีพ</h2>
          <p class="hero-desc">
            เราได้เรียนรู้ตั้งแต่กลไกการคิดระดับบิต สัญญาณนาฬิกา ภาษาเครื่อง ตรรกศาสตร์ ระบบเลขฐาน 
            จนถึงพีชคณิตบูลีนและเมทริกซ์ ขอให้นักเรียนทุกคนนำรากฐานคณิตศาสตร์เหล่านี้ไปต่อยอดในการเขียนโปรแกรม 
            สร้างนวัตกรรม และประสบความสำเร็จในการเรียนสายอาชีพต่อไป
          </p>
          <div class="hero-teacher-chip">
            <img src="assets/teacher.jpg" alt="ครูรุ่งนภา เอี่ยมชูกุล" class="teacher-mini-avatar">
            <div>
              <span class="teacher-title">ด้วยความปรารถนาดีจาก</span>
              <strong>ครูรุ่งนภา เอี่ยมชูกุล</strong>
            </div>
          </div>
        </div>
        <div class="hero-media-block">
          <div class="congrats-card">
            <div class="congrats-badge-icon">🏆</div>
            <h3>Math + Code = Unlimited Power!</h3>
            <p>หมั่นฝึกฝนทบทวนและทำโจทย์อย่างสม่ำเสมอนะคะ</p>
            <button class="btn btn-primary mt-3" onclick="triggerCelebration()">กดรับกำลังใจ & เสียงปรบมือ 👏</button>
          </div>
        </div>
      </div>
    `,
    notes: "กล่าวสรุปภาพรวมและอวยพรนักเรียน พร้อมเปิดโอกาสให้นักเรียนซักถามข้อสงสัย"
  }
];
