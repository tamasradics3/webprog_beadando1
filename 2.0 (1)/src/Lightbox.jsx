// src/components/Lightbox.jsx
import React from "react";
import "./Lightbox.css";

const Lightbox = ({ imageSrc, onClose }) => {
  if (!imageSrc) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Nagyított kép" />
        <button className="lightbox-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Lightbox;
