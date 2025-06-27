import React from "react";
import './Footer.css';

const ResourcesHub = () => {
  return (
    <>
      <div style={{
        backgroundColor: "#f7f9fc",
        fontFamily: "'Inter', sans-serif",
        padding: "4rem 1rem",
        minHeight: "100vh",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#0f172a" }}>
            Resources Hub
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#475569", marginTop: "0.5rem" }}>
            Your one-stop destination for all support materials related to Studily's AI & Robotics Labs.
          </p>

          {/* ✅ Software & Updates */}
          <div style={cardStyle}>
            <div style={cardInnerStyle}>
              <span style={iconStyle}>⚙️</span>
              <div>
                <h2 style={titleStyle}>Software & Updates</h2>
                <p style={descStyle}>
                  Find the latest versions of Zmrobo, RoboSim, firmware for kits, and other essential software to keep your robotics lab up-to-date.
                </p>
                <a
                  href="/downloads/sample-software.zip"  // ✅ UPDATED LINK
                  download
                  style={{ ...buttonStyle, textDecoration: "none", cursor: "pointer" }}
                >
                  Go to Downloads
                </a>
              </div>
            </div>
          </div>

          {/* Instruction Manuals */}
          <div style={cardStyle}>
            <div style={cardInnerStyle}>
              <span style={iconStyle}>📄</span>
              <div>
                <h2 style={titleStyle}>Instruction Manuals</h2>
                <p style={descStyle}>
                  Access detailed PDF guides for kit assembly, programming, project examples, and troubleshooting for all our kits.
                </p>
                <button style={buttonStyle} disabled>
                  Browse Manuals (Coming Soon)
                </button>
              </div>
            </div>
          </div>

          {/* Studily Brochure */}
          <div style={cardStyle}>
            <div style={cardInnerStyle}>
              <span style={iconStyle}>📥</span>
              <div>
                <h2 style={titleStyle}>Download Studily Brochure</h2>
                <p style={descStyle}>
                  Get our comprehensive brochure detailing our mission, vision, kit offerings, curriculum structure, and lab setup solutions.
                </p>
                <a
                  href="/downloads/studily-brochure.pdf"
                  download
                  style={{ ...buttonStyle, textDecoration: "none", cursor: "pointer" }}
                >
                  Download PDF ↗
                </a>
              </div>
            </div>
          </div>

          {/* FAQs & Support */}
          <div style={cardStyle}>
            <div style={cardInnerStyle}>
              <span style={iconStyle}>🎒</span>
              <div>
                <h2 style={titleStyle}>FAQs & Support</h2>
                <p style={descStyle}>
                  Find answers to common questions about our products, curriculum, and technical support.
                  If you can't find your answer, contact our support team.
                </p>
                <button style={buttonStyle} disabled>
                  Visit Support / Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <img src="logo.png" alt="Studily Logo" className="footer-logo" />
            <p>
              We provide a comprehensive educational experience from Class 1 to 12,
              complete with structured curriculum.
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Blog</li>
              <li>Support</li>
              <li>Site Map</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Information</h4>
            <ul>
              <li>About US</li>
              <li>Careers</li>
              <li>Contact US</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Social Media</h4>
            <div className="social-icons">
              <span>📘</span>
              <span>🔗</span>
              <span>🌐</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Studily Learning. All rights reserved.</p>
          <p>Inspired by Neo Robo Labs. Website design based on user-provided image.</p>
        </div>
      </footer>
    </>
  );
};

// ✅ CSS-in-JS Styles
const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "1.8rem",
  marginTop: "2rem",
  borderRadius: "1rem",
  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
  textAlign: "left",
};

const cardInnerStyle = {
  display: "flex",
  gap: "1rem",
  alignItems: "flex-start",
};

const iconStyle = {
  fontSize: "1.8rem",
  color: "#6366f1",
  marginTop: "0.3rem",
};

const titleStyle = {
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#0f172a",
  marginBottom: "0.5rem",
};

const descStyle = {
  fontSize: "1rem",
  color: "#475569",
  marginBottom: "0.75rem",
};

const buttonStyle = {
  backgroundColor: "#84cc16",
  color: "white",
  padding: "0.6rem 1.2rem",
  border: "none",
  borderRadius: "0.5rem",
  fontWeight: "600",
  cursor: "pointer", // enabled now
};

export default ResourcesHub;
