import React from "react";

function SliderContent({ activeIndex, arrayImagens }) {
  return (
    <section>
      {arrayImagens.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slider-image" src={slide.urls} alt=""></img>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
