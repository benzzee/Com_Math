/**
 * Data store for Computer Mathematics (21901-2005) Slide Deck
 * Teacher: Miss Rungnapha Eiamchukul (นางสาวรุ่งนภา เอี่ยมชูกุล)
 * Course: Computer Mathematics (21901-2005) - Vocational Certificate (ปวช.)
 */

const COURSE_INFO = {
  code: "21901-2005",
  title: "คณิตศาสตร์คอมพิวเตอร์",
  engTitle: "Computer Mathematics",
  level: "หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.)",
  teacher: {
    name: "ครูรุ่งนภา เอี่ยมชูกุล",
    formalName: "นางสาวรุ่งนภา เอี่ยมชูกุล",
    role: "นักศึกษาฝึกปฏิบัติการสอน",
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
    {
      id: 1,
      unitNumber: "UNIT 01",
      title: "สถาปัตยกรรมการประมวลผลของคอมพิวเตอร์และวงรอบคำสั่ง",
      hours: "4 ชั่วโมง (ทฤษฎี 2, ปฏิบัติ 2)",
      desc: "ศึกษาความหมายคอมพิวเตอร์ สัญญาณนาฬิกา วิวัฒนาการ 5 ยุคของภาษา โครงสร้างระบบ วงรอบคำสั่ง (Instruction Cycle) และระบบบัส (System Bus)",
      badge: "พร้อมเรียนรู้",
      isReady: true,
      pdfUrl: "Unit1.pdf"
    },
    {
      id: 2,
      unitNumber: "UNIT 02",
      title: "ระบบจำนวน (Number Systems)",
      hours: "4 ชั่วโมง (ทฤษฎี 2, ปฏิบัติ 2)",
      desc: "ศึกษาโครงสร้างระบบจำนวน จำนวนจริง จำนวนตรรกยะ อตรรกยะ และการประยุกต์ใช้ในการประมวลผลของคอมพิวเตอร์",
      badge: "เร็วๆ นี้",
      isReady: false,
      pdfUrl: null
    },
    {
      id: 3,
      unitNumber: "UNIT 03",
      title: "ระบบเซต (Set Theory)",
      hours: "4 ชั่วโมง (ทฤษฎี 2, ปฏิบัติ 2)",
      desc: "ความหมายของเซต ยูเนียน อินเตอร์เซกชัน คอมพลีเมนต์ ผลต่าง แผนภาพเวนน์-ออยเลอร์ และการแก้โจทย์ปัญหา",
      badge: "เร็วๆ นี้",
      isReady: false,
      pdfUrl: null
    },
    {
      id: 4,
      unitNumber: "UNIT 04",
      title: "ระบบสมการเชิงเส้น (Linear Equations)",
      hours: "4 ชั่วโมง (ทฤษฎี 2, ปฏิบัติ 2)",
      desc: "การแก้ระบบสมการเชิงเส้นสองตัวแปรและสามตัวแปร เพื่อประยุกต์ใช้ในการเขียนโปรแกรมคำนวณ",
      badge: "เร็วๆ นี้",
      isReady: false,
      pdfUrl: null
    },
    {
      id: 5,
      unitNumber: "UNIT 05",
      title: "ตรรกศาสตร์ (Mathematical Logic)",
      hours: "4 ชั่วโมง (ทฤษฎี 2, ปฏิบัติ 2)",
      desc: "ประพจน์ ตัวเชื่อมทางตรรกศาสตร์ (AND, OR, NOT, IF-THEN) ตารางค่าความจริง และการสมมูล",
      badge: "เร็วๆ นี้",
      isReady: false,
      pdfUrl: null
    },
    {
      id: 6,
      unitNumber: "UNIT 06",
      title: "ระบบเลขฐาน (Base Number Systems)",
      hours: "4 ชั่วโมง (ทฤษฎี 2, ปฏิบัติ 2)",
      desc: "เลขฐานสอง ฐานแปด ฐานสิบ ฐานสิบหก การแปลงเลขฐาน และการคำนวณทางคณิตศาสตร์ในระบบเลขฐาน",
      badge: "เร็วๆ นี้",
      isReady: false,
      pdfUrl: null
    },
    {
      id: 7,
      unitNumber: "UNIT 07",
      title: "พีชคณิตบูลีนและลอจิกเกต (Boolean Algebra)",
      hours: "4 ชั่วโมง (ทฤษฎี 2, ปฏิบัติ 2)",
      desc: "ทฤษฎีบทของบูลีน วงจรดิจิทัลลอจิกเกต (AND, OR, NOT, NAND, NOR, XOR) และการลดรูปสมการบูลีน",
      badge: "เร็วๆ นี้",
      isReady: false,
      pdfUrl: null
    },
    {
      id: 8,
      unitNumber: "UNIT 08",
      title: "เมทริกซ์และการประยุกต์ใช้งาน (Matrices)",
      hours: "4 ชั่วโมง (ทฤษฎี 2, ปฏิบัติ 2)",
      desc: "การดำเนินการของเมทริกซ์ การบวก คูณ ดีเทอร์มิแนนต์ อินเวอร์สเมทริกซ์ และการประยุกต์ในคอมพิวเตอร์กราฟิกส์",
      badge: "เร็วๆ นี้",
      isReady: false,
      pdfUrl: null
    }
  ]
};

const SLIDES = [
  // -------------------------------------------------------------
  // UNIT 0: COURSE OVERVIEW & WELCOME (ปฐมนิเทศรายวิชา)
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
        <div class="unit-chip-card highlight-chip" onclick="goToSlideByUnit(1)">
          <div class="unit-number-badge">01</div>
          <div class="unit-chip-info">
            <h4>สถาปัตยกรรม & วงรอบคำสั่ง</h4>
            <span>CPU, Clock Signal, ภาษา 5 ยุค, Bus (พร้อมเรียนรู้)</span>
          </div>
          <div class="arrow-icon">➔</div>
        </div>

        <div class="unit-chip-card" onclick="showComingSoonToast('หน่วยที่ 2: ระบบจำนวน')">
          <div class="unit-number-badge">02</div>
          <div class="unit-chip-info">
            <h4>ระบบจำนวน (Numbers)</h4>
            <span>จำนวนจริง, ตรรกยะ, สมบัติทางพีชคณิต (เร็วๆ นี้)</span>
          </div>
          <div class="arrow-icon">🔒</div>
        </div>

        <div class="unit-chip-card" onclick="showComingSoonToast('หน่วยที่ 3: ระบบเซต')">
          <div class="unit-number-badge">03</div>
          <div class="unit-chip-info">
            <h4>ระบบเซต (Set Theory)</h4>
            <span>แผนภาพเวนน์-ออยเลอร์, การดำเนินการเซต (เร็วๆ นี้)</span>
          </div>
          <div class="arrow-icon">🔒</div>
        </div>

        <div class="unit-chip-card" onclick="showComingSoonToast('หน่วยที่ 4: ระบบสมการเชิงเส้น')">
          <div class="unit-number-badge">04</div>
          <div class="unit-chip-info">
            <h4>ระบบสมการเชิงเส้น</h4>
            <span>สมการเชิงเส้น 1-2 ตัวแปร, การแทนค่า/กำจัด (เร็วๆ นี้)</span>
          </div>
          <div class="arrow-icon">🔒</div>
        </div>

        <div class="unit-chip-card" onclick="showComingSoonToast('หน่วยที่ 5: ตรรกศาสตร์')">
          <div class="unit-number-badge">05</div>
          <div class="unit-chip-info">
            <h4>ตรรกศาสตร์ (Logic)</h4>
            <span>ประพจน์, ตัวเชื่อม AND/OR, ตารางความจริง (เร็วๆ นี้)</span>
          </div>
          <div class="arrow-icon">🔒</div>
        </div>

        <div class="unit-chip-card" onclick="showComingSoonToast('หน่วยที่ 6: ระบบเลขฐาน')">
          <div class="unit-number-badge">06</div>
          <div class="unit-chip-info">
            <h4>ระบบเลขฐาน (Base Numbers)</h4>
            <span>ฐาน 2, 8, 10, 16, วิธีการแปลงเลขฐาน (เร็วๆ นี้)</span>
          </div>
          <div class="arrow-icon">🔒</div>
        </div>

        <div class="unit-chip-card" onclick="showComingSoonToast('หน่วยที่ 7: พีชคณิตบูลีน')">
          <div class="unit-number-badge">07</div>
          <div class="unit-chip-info">
            <h4>พีชคณิตบูลีน & ลอจิกเกต</h4>
            <span>AND, OR, NOT, NAND, NOR, XOR, วงจรตรรกะ (เร็วๆ นี้)</span>
          </div>
          <div class="arrow-icon">🔒</div>
        </div>

        <div class="unit-chip-card" onclick="showComingSoonToast('หน่วยที่ 8: เมทริกซ์')">
          <div class="unit-number-badge">08</div>
          <div class="unit-chip-info">
            <h4>เมทริกซ์ (Matrices)</h4>
            <span>การบวกคูณเมทริกซ์, ดีเทอร์มิแนนต์, กราฟิกส์ (เร็วๆ นี้)</span>
          </div>
          <div class="arrow-icon">🔒</div>
        </div>
      </div>
    `,
    notes: "คลิกการ์ดหน่วยที่ 1 เพื่อเริ่มเรียนสไลด์บทเรียนแรกได้ทันที ส่วนหน่วยที่ 2-8 จะเปิดให้เรียนในลำดับถัดไป"
  },

  // -------------------------------------------------------------
  // UNIT 1: สถาปัตยกรรมการประมวลผลของคอมพิวเตอร์และวงรอบการทำงานของคำสั่ง
  // (อ้างอิงเนื้อหาตามไฟล์ Unit1.pdf ครบถ้วนทุกหัวข้อ)
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
  }
];

// Expose globally to window for browser script access
if (typeof window !== "undefined") {
  window.COURSE_INFO = COURSE_INFO;
  window.SLIDES = SLIDES;
}
