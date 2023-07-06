import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white p-3" data-aos="slide-right">Mern Stack Developer</h2>
            <div className="h-50">
              <lottie-player
                src="https://assets6.lottiefiles.com/private_files/lf30_xeb8piyr.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="part2 d-flex flex-column justify-content-center align-items-center">
            <div className="h-50">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_z01bika0.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h2 className="text-white mt-3 "  data-aos="slide-left">Srinath Kenguva</h2>
          </div>
        </div>
        <div className="separater-text">
           <span> Sri's Spot</span>
        </div>
      </div>
    </>
  );
};

export default Home;
