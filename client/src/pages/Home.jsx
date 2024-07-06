import React from "react";
import image from "../assets/HeroImg.png";

export const Home = () => {
  return (
    <>
      <div className="flex  flex-col md:flex-row justify-center items-center p-4 ">
        <div className="flex md:w-1/2 p-4 ">
          <div className="mx-auto">
            <h1 className="font-inter text-3xl md:text-6xl font-semibold md:leading-[76px] text-left  ">
              Lessons and insights <br />
              <span className="text-[#4CAF4F]">from 8 years</span>
            </h1>
            <p className="font-inter font-normal text-base md:leading-6">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className=" bg-[#4CAF4F] text-white px-6 py-3 my-4 rounded-md">
              Register
            </button>
          </div>
        </div>
        <div className="flex md:w-1/2 p-4 ">
          <div className="mx-auto">
            <img src={image} alt="Hero image " />
          </div>
        </div>
      </div>
    </>
  );
};
