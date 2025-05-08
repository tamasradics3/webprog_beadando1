
import React, { useState } from "react";
import Lightbox from "./Lightbox";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/kepek/foto1.jpg", alt: "Esküvői fotó" },
    { src: "/kepek/foto2.jpg", alt: "Portréfotó" },
    { src: "/kepek/foto3.jpg", alt: "Tabló fotózás" },
    { src: "/kepek/foto4.jpg", alt: "Rendezvényfotó" },
    { src: "/kepek/foto5.jpg", alt: "Kismama fotózás" },
    { src: "/kepek/foto6.jpg", alt: "Kisállat fotó" },
    { src: "/kepek/foto6.jpg", alt: "Családi fotó" },
    { src: "/kepek/foto6.jpg", alt: "Autók" },
  ];

  return (
    <section id="portfolio">
      <h2>Portfólió</h2>
      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            onClick={() => setSelectedImage(img.src)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      <Lightbox imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};

export default Portfolio;
