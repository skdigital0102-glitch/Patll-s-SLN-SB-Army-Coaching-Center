import React, { useState } from 'react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const PHONE_NUMBER = "919059620481";

  const handleWhatsApp = (msg) => {
    const defaultMsg = "Hello Patll's SLN SB Army Coaching Center! Nenu coaching details & new batch admissions kosam inquiry chestunnanu.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(msg || defaultMsg)}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:+${PHONE_NUMBER}`, '_self');
  };

  const courses = [
    {
      id: 1,
      title: "Indian Army (Agniveer & Permanent)",
      category: "defense",
      type: "Exam + Physical Both",
      badge: "Most Popular",
      desc: "Comprehensive 1600m track running, obstacle training, daily endurance workouts, plus complete written exam syllabus coverage with daily mock tests.",
      wings: ["Agniveer GD (General Duty)", "Technical & Clerk Wings", "Tradesman Entry", "Nursing Assistant"]
    },
    {
      id: 2,
      title: "SSC GD Constabulary (All Wings)",
      category: "defense",
      type: "Exam + Physical Both",
      badge: "High Selections",
      desc: "Complete focus on CBT written examination (Reasoning, Maths, GK, English/Hindi) along with PET/PST physical ground qualification coaching.",
      wings: ["CISF & SSF (Top Merit)", "BSF & CRPF Forces", "ITBP & SSB", "Assam Rifles (AR)"]
    },
    {
      id: 3,
      title: "Indian Navy & Air Force",
      category: "defense",
      type: "Exam + Physical Both",
      badge: "Specialized Training",
      desc: "Technical & non-technical exam orientation, physical fitness test (PFT) preparation, and adaptivity assessment guidance for Airmen & Sailors.",
      wings: ["Air Force Group X (Technical)", "Air Force Group Y (Non-Tech)", "Navy SSR (Senior Secondary)", "Navy MR (Matric Recruit)"]
    },
    {
      id: 4,
      title: "AP Police Sub-Inspector (SI)",
      category: "police",
      type: "Physical Coaching Only",
      badge: "100% Event Score Focus",
      desc: "Scientific sprint techniques, long jump posture optimization, and shot put distance maximization to secure full physical event merit marks.",
      wings: ["1600m / 800m Running Endurance", "100m Sprint Speed Drills", "Long Jump Technique Training", "Shot Put Maximum Distance Guidance"]
    },
    {
      id: 5,
      title: "AP Police Constable",
      category: "police",
      type: "Physical Coaching Only",
      badge: "High Efficiency",
      desc: "Rigorous daily morning & evening ground practice, stamina building, diet guidance, and weekly physical progress tracking.",
      wings: ["Physical Efficiency Test (PET)", "Physical Measurement Test (PMT)", "Stamina & Breath Control", "Daily Track Time-Trial Practice"]
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', overflowX: 'hidden' }}>
      
      {/* Premium Top Announcement Ticker */}
      <div style={{ background: 'linear-gradient(90deg, #091e3e 0%, #1e3a8a 50%, #091e3e 100%)', borderBottom: '1px solid rgba(250, 204, 21, 0.4)', padding: '10px 20px', textAlign: 'center', fontSize: '12px', fontWeight: 'bold', color: '#facc15', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ backgroundColor: '#facc15', color: '#020617', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '900' }}>ADMISSIONS OPEN</span>
          NEW BATCHES FOR ARMY | SSC GD | AP POLICE PHYSICAL COACHING — PAMIDI
        </span>
        <button 
          onClick={handleCall}
          style={{ backgroundColor: '#facc15', color: '#020617', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontWeight: '900', border: 'none', cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 2px 10px rgba(250,204,21,0.4)' }}
        >
          📞 CALL: 9059620481
        </button>
      </div>

      {/* Main Glassmorphic Header */}
      <header style={{ position: 'sticky', top: 0, backgroundColor: 'rgba(2, 6, 23, 0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(30, 58, 138, 0.5)', zIndex: 100, padding: '16px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'linear-gradient(135deg, #facc15 0%, #ca8a04 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#020617', fontSize: '26px', fontWeight: '900', boxShadow: '0 0 20px rgba(250, 204, 21, 0.4)', border: '1px solid #fde047' }}>
              🛡️
            </div>
            <div>
              <span style={{ fontSize: '24px', fontWeight: '900', color: '#facc15', letterSpacing: '0.5px', display: 'block', lineHeight: 1 }}>
                PATLL'S <span style={{ color: '#ffffff' }}>SLN SB</span>
              </span>
              <span style={{ fontSize: '10px', color: '#fde047', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginTop: '4px' }}>
                ARMY & DEFENSE ACADEMY • PAMIDI
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <button 
              onClick={handleCall}
              style={{ backgroundColor: 'transparent', border: '1.5px solid #facc15', color: '#fde047', padding: '10px 20px', borderRadius: '30px', fontWeight: '800', fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              📞 Direct Call
            </button>
            <button 
              onClick={() => handleWhatsApp('Hello! Nenu new batch details and ground coaching inquiry kosam message chestunnanu.')}
              style={{ background: 'linear-gradient(135deg, #facc15 0%, #eab308 100%)', color: '#020617', padding: '10px 22px', borderRadius: '30px', fontWeight: '900', fontSize: '12px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 18px rgba(250, 204, 21, 0.35)' }}
            >
              💬 WhatsApp Admission
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section with Dynamic Gradient & High Visual Impact */}
      <section style={{ position: 'relative', padding: '100px 20px 120px 20px', textAlign: 'center', background: 'radial-gradient(circle at top, rgba(30,58,138,0.5) 0%, rgba(2,6,23,1) 85%)', borderBottom: '1px solid rgba(30, 58, 138, 0.4)' }}>
        <div style={{ maxWidth: '950px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          
          <span style={{ backgroundColor: 'rgba(30, 58, 138, 0.7)', border: '1px solid rgba(250, 204, 21, 0.5)', color: '#fde047', padding: '10px 24px', borderRadius: '30px', fontSize: '11px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '30px', boxShadow: '0 0 25px rgba(30, 58, 138, 0.8)' }}>
            🎖️ ANANTAPUR DISTRICT'S PREMIER DEFENSE & POLICE TRAINING HUB
          </span>

          <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '900', color: '#ffffff', lineHeight: 1.15, marginBottom: '25px', letterSpacing: '-0.5px' }}>
            YOUR DREAM TO WEAR UNIFORM & SERVE THE NATION <br />
            <span style={{ background: 'linear-gradient(135deg, #fef08a 0%, #facc15 50%, #eab308 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 0 30px rgba(250,204,21,0.25)' }}>
              STARTS AT PATLL'S SLN SB
            </span>
          </h1>

          <p style={{ fontSize: '17px', color: '#94a3b8', marginBottom: '45px', lineHeight: 1.7, maxWidth: '800px', margin: '0 auto 45px auto' }}>
            Unmatched ground physical training combined with high-yield written exam guidance. Specialized coaching for <strong style={{ color: '#facc15' }}>Indian Army, Air Force, Navy, SSC GD</strong> & Physical Events for <strong style={{ color: '#facc15' }}>AP Police SI & Constable</strong>.
          </p>

          <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => handleWhatsApp('Hello sir! Nenu Army/Police coaching admission join avvalanukuntunnanu. Full details ivvandi.')}
              style={{ background: 'linear-gradient(135deg, #facc15 0%, #ca8a04 100%)', color: '#020617', padding: '18px 38px', borderRadius: '35px', fontWeight: '900', fontSize: '15px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 30px rgba(250, 204, 21, 0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}
            >
              🚀 Join New Admission Batch
            </button>
            <button 
              onClick={handleCall}
              style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '2px solid #facc15', color: '#fde047', padding: '18px 38px', borderRadius: '35px', fontWeight: '900', fontSize: '15px', cursor: 'pointer', backdropFilter: 'blur(5px)' }}
            >
              📞 Call: 9059620481
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginTop: '70px', backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(250, 204, 21, 0.3)', borderRadius: '24px', padding: '25px', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#facc15' }}>100%</div>
              <div style={{ fontSize: '11px', color: '#cbd5e1', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '4px' }}>Ground Fitness Dedication</div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#facc15' }}>Daily</div>
              <div style={{ fontSize: '11px', color: '#cbd5e1', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '4px' }}>Morning & Evening Practice</div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#facc15' }}>Both</div>
              <div style={{ fontSize: '11px', color: '#cbd5e1', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '4px' }}>Written & Physical Batches</div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#facc15' }}>Pamidi</div>
              <div style={{ fontSize: '11px', color: '#cbd5e1', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '4px' }}>Beside Highway Location</div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Category Filtered Courses */}
      <section style={{ padding: '90px 20px', maxWidth: '1280px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#facc15', fontSize: '12px', fontWeight: '900', letterSpacing: '3px', textTransform: 'uppercase' }}>CHOOSE YOUR GOAL</span>
          <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#ffffff', marginTop: '8px' }}>Our Specialized Training Programs</h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', marginTop: '8px' }}>Select category to explore comprehensive physical & written exam offerings.</p>

          {/* Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '30px', flexWrap: 'wrap' }}>
            {[
              { key: 'all', label: 'All Programs' },
              { key: 'defense', label: 'Indian Defense & SSC GD (Exam + Physical)' },
              { key: 'police', label: 'AP Police SI & Constable (Physical Only)' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                style={{
                  backgroundColor: activeCategory === tab.key ? '#facc15' : 'rgba(15, 23, 42, 0.8)',
                  color: activeCategory === tab.key ? '#020617' : '#cbd5e1',
                  border: activeCategory === tab.key ? 'none' : '1px solid rgba(250, 204, 21, 0.3)',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  fontWeight: '800',
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
          {filteredCourses.map((course) => (
            <div 
              key={course.id}
              style={{ background: 'linear-gradient(180deg, #091e3e 0%, #0f172a 100%)', border: '2px solid rgba(250, 204, 21, 0.35)', borderRadius: '28px', padding: '36px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ backgroundColor: '#facc15', color: '#020617', fontSize: '10px', fontWeight: '900', padding: '6px 14px', borderRadius: '14px', textTransform: 'uppercase' }}>
                    {course.badge}
                  </span>
                  <span style={{ fontSize: '11px', color: '#fde047', fontWeight: 'bold' }}>
                    {course.type}
                  </span>
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#facc15', marginBottom: '14px', lineHeight: 1.3 }}>
                  {course.title}
                </h3>

                <p style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '25px', lineHeight: 1.6 }}>
                  {course.desc}
                </p>

                <div style={{ marginBottom: '30px' }}>
                  <div style={{ fontSize: '11px', fontWeight: '800', color: '#fde047', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px' }}>
                    Wings / Events Included:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#e2e8f0', lineHeight: 2.2 }}>
                    {course.wings.map((w, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#facc15' }}>✔</span> {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button 
                onClick={() => handleWhatsApp(`Hello! Nenu ${course.title} coaching join avvalanukuntunnanu. Details cheppandi.`)}
                style={{ width: '100%', backgroundColor: '#facc15', color: '#020617', padding: '15px', borderRadius: '16px', fontWeight: '900', fontSize: '13px', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 4px 15px rgba(250, 204, 21, 0.3)' }}
              >
                Inquire For This Batch ➔
              </button>
            </div>
          ))}
        </div>

      </section>

      {/* Why Choose SLN SB - Detailed Features */}
      <section style={{ padding: '90px 20px', backgroundColor: 'rgba(9, 30, 62, 0.4)', borderTop: '1px solid rgba(30, 58, 138, 0.5)', borderBottom: '1px solid rgba(30, 58, 138, 0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#facc15', fontSize: '12px', fontWeight: '900', letterSpacing: '3px', textTransform: 'uppercase' }}>WHY TRAIN WITH US</span>
            <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#ffffff', marginTop: '8px' }}>The SLN SB Coaching Advantage</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {[
              {
                icon: "🏃‍♂️",
                title: "Professional Ground Track",
                desc: "Dedicated daily running track practice for 1600m, 800m, and 100m sprint events with continuous lap timing improvement."
              },
              {
                icon: "🏋️‍♂️",
                title: "Obstacle & Strength Building",
                desc: "High-jump, long-jump pits, pull-up bars, rope climbing, and physical endurance conditioning."
              },
              {
                icon: "📚",
                title: "Exam Practice & Mock Tests",
                desc: "Chapter-wise exam coverage for SSC GD and Army exams with regular mock tests matching exact exam patterns."
              },
              {
                icon: "🥗",
                title: "Disciplined Routine & Diet",
                desc: "Guidance on athletic nutrition, stamina maintenance, and injury recovery techniques to maintain peak physical condition."
              }
            ].map((feature, i) => (
              <div key={i} style={{ backgroundColor: '#0f172a', border: '1px solid rgba(250, 204, 21, 0.3)', padding: '32px', borderRadius: '24px' }}>
                <div style={{ fontSize: '36px', marginBottom: '18px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#facc15', marginBottom: '10px' }}>{feature.title}</h3>
                <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Ground Photos & Practice Moments Gallery Placeholder */}
      <section style={{ padding: '90px 20px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#facc15', fontSize: '12px', fontWeight: '900', letterSpacing: '3px', textTransform: 'uppercase' }}>TRAINING HIGHLIGHTS</span>
          <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#ffffff', marginTop: '8px' }}>Ground Practice & Academy Moments</h2>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '8px' }}>Real ground training sessions and candidate achievements.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {[
            { label: "Morning 1600m Track Practice", bg: "#1e293b" },
            { label: "AP Police Physical Event Practice", bg: "#0f172a" },
            { label: "Army Fitness & Pushup Session", bg: "#1e293b" },
            { label: "SSC GD Written Batch Classroom", bg: "#0f172a" }
          ].map((img, idx) => (
            <div 
              key={idx}
              style={{ backgroundColor: img.bg, border: '2px dashed rgba(250, 204, 21, 0.4)', borderRadius: '20px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#facc15', fontWeight: 'bold', fontSize: '14px', padding: '20px', textAlign: 'center' }}
            >
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>📷</div>
              <span>{img.label}</span>
              <span style={{ fontSize: '10px', color: '#94a3b8', marginTop: '6px' }}>(Client Photos Upload Here)</span>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Address, Google Map & WhatsApp Booking Card */}
      <section style={{ padding: '90px 20px', backgroundColor: '#020617', borderTop: '1px solid rgba(30, 58, 138, 0.5)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', background: 'linear-gradient(135deg, #091e3e 0%, #0f172a 100%)', border: '2px solid rgba(250, 204, 21, 0.5)', borderRadius: '32px', padding: '48px', boxShadow: '0 25px 50px rgba(0,0,0,0.6)' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            
            {/* Address Info */}
            <div>
              <span style={{ backgroundColor: '#facc15', color: '#020617', fontSize: '10px', fontWeight: '900', padding: '6px 16px', borderRadius: '20px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '20px' }}>
                ACADEMY LOCATION
              </span>
              <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#facc15', marginBottom: '20px', lineHeight: 1.2 }}>
                PATLL'S SLN SB ARMY COACHING CENTER
              </h2>

              <div style={{ fontSize: '15px', color: '#e2e8f0', lineHeight: 1.8, marginBottom: '25px' }}>
                <p style={{ marginBottom: '12px' }}>
                  📍 <strong>Address:</strong> PAMIDI, Near Neeluru Road, Beside Highway No.
                </p>
                <p style={{ marginBottom: '12px' }}>
                  📞 <strong>Contact Phone:</strong> <a href="tel:+919059620481" style={{ color: '#facc15', textDecoration: 'underline', fontWeight: 'bold' }}>+91 9059620481</a>
                </p>
                <p>
                  🎯 <strong>Target Exams:</strong> Army Agniveer, SSC GD, Air Force, Navy & AP Police SI / Constable Physicals.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={handleCall}
                  style={{ backgroundColor: '#facc15', color: '#020617', padding: '14px 28px', borderRadius: '14px', fontWeight: '900', fontSize: '13px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(250, 204, 21, 0.3)' }}
                >
                  📞 Direct Call 9059620481
                </button>
                <button 
                  onClick={() => handleWhatsApp('Hello! Nenu Pamidi coaching center location verification kosam message chestunnanu.')}
                  style={{ backgroundColor: '#1e3a8a', border: '1px solid #facc15', color: '#fde047', padding: '14px 28px', borderRadius: '14px', fontWeight: '800', fontSize: '13px', cursor: 'pointer' }}
                >
                  💬 Get WhatsApp Location
                </button>
              </div>
            </div>

            {/* Quick Interactive WhatsApp Inquiry Form */}
            <div style={{ backgroundColor: '#020617', border: '1px solid rgba(250, 204, 21, 0.4)', borderRadius: '24px', padding: '30px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#facc15', marginBottom: '18px', textAlign: 'center' }}>
                Quick Batch Admission Form
              </h3>
              
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value;
                  const targetExam = e.target.targetExam.value;
                  handleWhatsApp(`Hi! My name is ${name}. I want to inquire about ${targetExam} coaching batch at Pamidi center.`);
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#cbd5e1', fontWeight: 'bold', marginBottom: '6px' }}>Student Full Name</label>
                  <input type="text" name="name" required placeholder="Enter your name" style={{ width: '100%', backgroundColor: '#0f172a', border: '1px solid #1e3a8a', borderRadius: '10px', padding: '12px', color: '#ffffff', outline: 'none', fontSize: '13px' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#cbd5e1', fontWeight: 'bold', marginBottom: '6px' }}>Select Preferred Coaching</label>
                  <select name="targetExam" style={{ width: '100%', backgroundColor: '#0f172a', border: '1px solid #1e3a8a', borderRadius: '10px', padding: '12px', color: '#ffffff', outline: 'none', fontSize: '13px' }}>
                    <option value="Indian Army (Agniveer / GD)">Indian Army (Agniveer / GD)</option>
                    <option value="SSC GD (BSF, CISF, CRPF, ITBP)">SSC GD (BSF, CISF, CRPF, ITBP)</option>
                    <option value="AP Police SI & Constable Physical">AP Police SI & Constable Physical</option>
                    <option value="Indian Air Force / Navy">Indian Air Force / Navy</option>
                  </select>
                </div>

                <button type="submit" style={{ backgroundColor: '#facc15', color: '#020617', padding: '14px', borderRadius: '12px', fontWeight: '900', fontSize: '13px', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '10px' }}>
                  Submit Inquiry via WhatsApp
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '45px 20px', textAlign: 'center', backgroundColor: '#020617', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '13px', color: '#64748b' }}>
        <p style={{ color: '#facc15', fontWeight: '900', fontSize: '15px', marginBottom: '8px' }}>PATLL'S SLN SB ARMY COACHING CENTER, PAMIDI</p>
        <p style={{ color: '#cbd5e1', marginBottom: '18px' }}>PAMIDI, Near Neeluru Road, Beside Highway No. | Phone: +91 9059620481</p>
        <p>© 2026 Patll's SLN SB. All rights reserved. Designed by Sunil Digital Web Solutions.</p>
      </footer>

    </div>
  );
}