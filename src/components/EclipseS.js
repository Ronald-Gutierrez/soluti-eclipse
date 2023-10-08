import React, { useState } from "react";
import eclipseSolar from "../assets/img/eclipseSolar.png";
import eclipseS1 from "../assets/img/eclipseS1.png";
import eclipseS2 from "../assets/img/eclipseS2.png";
import eclipseS3 from "../assets/img/eclipseS3.png";

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

export const EclipseS = () => {
  const images = [eclipseS1, eclipseS2, eclipseS3]; // Array de imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para rastrear la imagen actual

  const toggleImage = () => {
    // Cambiar a la siguiente imagen en el array, volviendo al principio si llega al final
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="game" id="game">
      <img src={eclipseSolar} alt="eclipseSolar" />
      <img src={images[currentImageIndex]} alt={`eclipseS${currentImageIndex + 1}`} />
      <button onClick={toggleImage} style={buttonStyle}>
        Next
      </button>
    </section>
  );
};
