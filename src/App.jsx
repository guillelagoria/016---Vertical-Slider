import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import React from "react";

export const App = () => {
  const sliderContainerRef = useRef(null);
  const slideRightRef = useRef(null);
  const slideLeftRef = useRef(null);
  const upButtonRef = useRef(null);
  const downButtonRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const images = [
    `url("https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80")`,
    `url("https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80")`,
    `url("https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80")`,
    `url("https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80")`,
  ];

  const slides = images.length;

  const changeSlide = (direction) => {
    let index = 0;
    if (direction === "down") {
      index = activeSlideIndex + 1;
      setActiveSlideIndex(index);
      if (activeSlideIndex >= slides - 1 ) {
        index = 0;
        setActiveSlideIndex(index);
      }
    }
    if (direction === "up") {
      index = activeSlideIndex - 1;
      setActiveSlideIndex(index);
      
      if (activeSlideIndex <= 0) {
        index = slides - 1;
        setActiveSlideIndex(index);
      }
    }
  };
  
  useEffect(() => {
    const sliderHeight = sliderContainerRef.current.clientHeight;
    slideRightRef.current.style.top = `-${(slides - 1) * 100}vh`;

    slideRightRef.current.style.transform = `translateY(${
      activeSlideIndex * sliderHeight
    }px)`;

    slideLeftRef.current.style.transform = `translateY(-${
      sliderHeight * activeSlideIndex
    }px)`;

  }, [activeSlideIndex]);

  return (
    <>
      <body>
        <div className="slider-container" ref={sliderContainerRef}>
          <div className="left-slide" ref={slideLeftRef}>
            <div style={{ backgroundColor: "#FD3555" }}>
              <h1>Nature flower</h1>
              <p>all in pink</p>
            </div>
            <div style={{ backgroundColor: "#2A86BA" }}>
              <h1>Blue Sky</h1>
              <p>what it's mountains</p>
            </div>
            <div style={{ backgroundColor: "#252E33" }}>
              <h1>Lonely castle</h1>
              <p>in the wilderness</p>
            </div>
            <div style={{ backgroundColor: "#FFB866" }}>
              <h1>Flying eagle</h1>
              <p>in the sunset</p>
            </div>
          </div>

          <div className="right-slide" ref={slideRightRef}>
            <div style={{ backgroundImage: images[0] }}></div>
            <div style={{ backgroundImage: images[1] }}></div>
            <div style={{ backgroundImage: images[2] }}></div>
            <div style={{ backgroundImage: images[3] }}></div>
          </div>

          <div className="action-buttons">
            <button
              className="down-button"
              ref={downButtonRef}
              onClick={() => changeSlide("down")}
            >
              <i className="fas fa-arrow-down"></i>
            </button>
            <button
              className="up-button"
              ref={upButtonRef}
              onClick={() => changeSlide("up")}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </body>
    </>
  );
};

export default App;
