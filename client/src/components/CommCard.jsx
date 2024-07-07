import React from "react";

export const CommCard = ({ icon, text, description }) => {
  return (
    <div>
      <div className="flex flex-col space-y-6 p-4 ">
        <div className="flex flex-col">
          <img src={icon} alt="icon 1" className="w-[30%] mx-auto " />
          <h1 className="font-inter font-bold text-2xl md:text-4xl leading-9 text-center">
            {text}
          </h1>
        </div>
        <div className="">
          <p className="font-inter font-normal text-sm leading-5 text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
