import React from "react";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <div>
      <img src={hero} className="w-full max-h-[600px]" alt="" />
    </div>
  );
}

export default Hero;
