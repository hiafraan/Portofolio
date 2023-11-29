import React from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech2 = () => {
  return (
    <div className="p-10 rounded-xl my-10  bg-tertiary flex-1">
      <h3 className="text-3xl  py-2 mb-10 font-bold border-b-2 border-teal-200">
        Skills
      </h3>
      <div className="flex gap-8 justify-center m-2 mb-4 flex-wrap">
        {technologies.map((technology) => (
          <div className="w-14 h-14" key={technology.name}>
            <img src={technology.icon} height={100} width={100} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech2, "");
