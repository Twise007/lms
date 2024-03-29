import React from "react";
import Homepic from "../assets/homePic.jpg";

const Home = () => {
  return (
    <div>
      <div
        className="min-h-screen hero text-bg-off-white"
        style={{ backgroundImage: `url(${Homepic})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Learning Management System
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
