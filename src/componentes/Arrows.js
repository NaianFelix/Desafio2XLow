import React from "react";

function Arrows({ prevSlider, nextSlider }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlider}></span>
      <span className="next" onClick={nextSlider}></span>
    </div>
  );
}

export default Arrows;
