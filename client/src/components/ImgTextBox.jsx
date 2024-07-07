import React from "react";

export const ImgTextBox = ({ image, text, description, buttonText }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center p-4 bg-white">
        <div className="md:w-1/2 ">
          <div className="">
            <img src={image} alt="" className="mx-auto" />
          </div>
        </div>

        <div className="flex flex-col md:w-1/2 p-4">
          <h1 className="font-inter font-semibold md:text-3xl text-2xl md:leading-[44px]">
            {text}
          </h1>
          <p className="font-inter font-normal text-sm md:leading-5">
            {description}
          </p>
          <div className="">
            <button className=" bg-[#4CAF4F] text-white px-6 py-3 my-4 rounded-md">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
