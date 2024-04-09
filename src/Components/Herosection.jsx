import React from 'react'
import { TypeAnimation } from "react-type-animation";
export default function Herosection() {
  return (
    <div className="font-Montserrat">
      <div className="text-[36px] mt-64 ml-14 ">
        Hii, I'm <span className="text-[#ff014f]">Parth Kalma</span>
      <br /> 
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "a MERN Stack Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              " ",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-[36px]"
          />
      </div>
    </div>        
  );
}
