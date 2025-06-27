import React from 'react';
import './App.css';
import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app-container">
      {/* Top Section */}
      <div className="section-blue">
        <h1 className="section-title">The Need for AI & Robotics Education in Schools</h1>
        <p className="subtitle">
          In today's technology-driven society, the importance of early exposure to Artificial Intelligence and robotics cannot be overstated.
        </p>
        <div className="card-container">
          <Card icon="⚙️" title="Future-Ready Skill Development" text="Fosters critical thinking, problem-solving, and creativity." />
          <Card icon="📦" title="Bridging the Skills Gap" text="Provides hands-on learning aligned with modern industry needs." />
          <Card icon="💡" title="Encouraging Innovation" text="Inspires students to experiment and think outside the box." />
          <Card icon="🌐" title="Global Competitiveness" text="Equips India's youth to excel in a rapidly evolving economy." />
          <Card icon="✅" title="Early Career Exploration" text="Opens pathways to high-demand fields for tomorrow's workforce." />
        </div>
      </div>

      {/* NEP Section (2x2 layout) */}
      <div className="nep-section">
        <h1 className="section-title">Alignment with NEP 2020 Goals and Policies</h1>
        <p className="subtitle">
          Reinforcing Strategic National Importance including CBSE's Composite Skill Labs
        </p>

        {/* First Row */}
        <div className="nep-row">
          <div className="nep-card">
            <div className="check-icon">✔️</div>
            <div>
              <h2>Digital India Initiative</h2>
              <p>
                Drives a digitally empowered society by seamlessly integrating advanced technology
                into schools, thereby strengthening digital infrastructure and bridging the digital divide.
              </p>
            </div>
          </div>

          <div className="nep-card">
            <div className="check-icon">✔️</div>
            <div>
              <h2>Make in India & Skill India</h2>
              <p>
                Accelerates domestic manufacturing and workforce readiness by promoting hands-on innovation, practical skill development, and entrepreneurship among students.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="nep-row">
          <div className="nep-card">
            <div className="check-icon">✔️</div>
            <div>
              <h2>New Education Policy (NEP) 2020</h2>
              <p>
                Emphasizes experiential, project-based learning and critical thinking, ensuring that students gain multidisciplinary skills aligned with modern educational standards. Our offerings are key to CBSE’s Composite Skill Labs.
              </p>
            </div>
          </div>

          <div className="nep-card">
            <div className="check-icon">✔️</div>
            <div>
              <h2>National Innovation & Technology Goals</h2>
              <p>
                Cultivates a future-ready generation capable of advancing technological breakthroughs and bolstering India's strategic interests on the global stage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <div className="image-row">
          <img src="https://picsum.photos/id/1011/200/150" alt="Example 1" />
          <img src="https://picsum.photos/id/1015/200/150" alt="Example 2" />
          <img src="https://picsum.photos/id/1016/200/150" alt="Example 3" />
        </div>
      </div>
       <div className="offerings-section">
        <h1 className="center-text">Our Comprehensive Offerings</h1>
        <div className="offerings-container">
          <div className="offering-card">
            <h2>Interactive Curriculum Design</h2>
            <ul>
              <li>Structured 16-week program aligned with the academic calendar.</li>
              <li>One 45-60 minute period per week.</li>
              <li>Manuals and step-by-step instructional videos for each module.</li>
              <li>User-friendly LMS platform for support.</li>
            </ul>
            <img src="https://picsum.photos/seed/curriculum/400/200" alt="Curriculum Design" />
          </div>

          <div className="offering-card">
            <h2>State-of-the-Art Laboratory Setups</h2>
            <ul>
              <li>Dedicated computers, ergonomic furniture, and activity spaces.</li>
              <li>Competition mats and inspirational wall arts.</li>
              <li>Secure storage for robotics kits.</li>
              <li>Range of programming software for varying skill levels.</li>
            </ul>
            <img src="https://picsum.photos/seed/labsetup/400/200" alt="Lab Setup" />
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="offerings-section">
       
        <div className="offerings-container">
          <div className="offering-card">
            <h2>Interactive Curriculum Design</h2>
            <ul>
              <li>Structured 16-week program aligned with the academic calendar.</li>
              <li>One 45-60 minute period per week.</li>
              <li>Manuals and step-by-step instructional videos for each module.</li>
              <li>User-friendly LMS platform for support.</li>
            </ul>
            <img src="https://picsum.photos/seed/curriculum/400/200" alt="Curriculum Design" />
          </div>

          <div className="offering-card">
            <h2>State-of-the-Art Laboratory Setups</h2>
            <ul>
              <li>Dedicated computers, ergonomic furniture, and activity spaces.</li>
              <li>Competition mats and inspirational wall arts.</li>
              <li>Secure storage for robotics kits.</li>
              <li>Range of programming software for varying skill levels.</li>
            </ul>
            <img src="https://picsum.photos/seed/labsetup/400/200" alt="Lab Setup" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
