// src/components/Card.js
import React from 'react';
import './Card.css';

function Card({ icon, title, text }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Card;
