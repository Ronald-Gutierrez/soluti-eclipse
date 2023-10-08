import React, { useState } from "react";
import eclipseLunar from "../assets/img/eclipseLunar.jpg";
import eclipseL1 from "../assets/img/eclipseL1.jpg";
import eclipseL2 from "../assets/img/eclipseL2.png";
import eclipseL3 from "../assets/img/eclipseL3.png";
const buttonStyle = {
  backgroundColor: "white",
  color: "black",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "auto",
  display: "block",
};

export const EclipseL = () => {
  const images = [eclipseL1, eclipseL2, eclipseL3]; // Array de imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para rastrear la imagen actual

  const toggleImage = () => {
    // Cambiar a la siguiente imagen en el array, volviendo al principio si llega al final
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="game" id="game">
      <img src={eclipseLunar} alt="eclipseLunar" />
      <img src={images[currentImageIndex]} alt={`eclipseL${currentImageIndex + 1}`} />
      <button onClick={toggleImage} style={buttonStyle}>
        Next
      </button>
    </section>
  );
};
