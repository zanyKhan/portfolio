
import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
  {technologies.map((technology) => (
    <div className="w-28 h-28" key={technology.name}>
      {/* Desktop */}
      <div className="hidden sm:block w-28 h-28">
        <BallCanvas icon={technology.icon} />
      </div>
      {/* Mobile */}
      <div className="flex sm:hidden items-center justify-center w-full h-full">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-black shadow-2xl flex items-center justify-center border border-gray-600">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-12 h-12 object-contain"
          />
        </div>
      </div>
    </div>
  ))}
</div>
  );
};

export default SectionWrapper(Tech, "");
