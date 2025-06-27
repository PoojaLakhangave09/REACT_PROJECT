import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    console.log(form);
    setForm({ name: '', email: '', message: '' });
  };

  // ✅ Use direct image URLs here
  const imageUrls = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
  ];

  return (
    <>
      <div className="container">
        <h1>Get In Touch</h1>
        <p className="subtitle">
          We'd love to hear from you! Reach out for inquiries, partnerships, or to learn more about our Robotics & AI Labs.
        </p>

        <div className="card">
          <div className="left">
            <h2>Contact Information</h2>
            <p><strong>📞 Phone:</strong> +91 8793757639</p>
            <p><strong>📧 Email:</strong> knagpure@studily.xyz</p>
            <p><strong>📍 Address:</strong><br />
              111, The Business Hub, Vandevi Corner,<br />
              Kothrud, Pune 411038
            </p>
            <p><strong>🌐 Partner:</strong> <a href="https://neorobo.io" target="_blank" rel="noopener noreferrer">neorobo.io</a></p>
          </div>

          <form className="right" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* ✅ Certifications section with image URLs */}
        <div className="certifications">
          <h3>Our Certifications & Recognitions</h3>
          <div className="cert-grid">
            {imageUrls.map((url, index) => (
              <div className="cert-image" key={index}>
                <img src={url} alt={`Certification ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
