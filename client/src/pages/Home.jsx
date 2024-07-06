import React from "react";
import image from "../assets/HeroImg.png";
import Logo1 from "../assets/Logo (3).png";
import Logo2 from "../assets/Logo (4).png";
import Logo3 from "../assets/Logo (5).png";
import Logo4 from "../assets/Logo (6).png";
import Logo5 from "../assets/Logo (7).png";
import Logo6 from "../assets/Logo (8).png";

export const Home = () => {
  return (
    <>
      {/* Hero section  */}
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
      {/* Hero section ends here */}

      {/* Our Client starts here */}
      <div className="flex flex-col p-4">
        <div className="flex flex-col">
          <h1 className="font-inter font-semibold text-3xl leading-[44px] text-center">
            Our Clients
          </h1>
          <p className="font-inter font-normal text-base leading-6 text-center text-[#717171]">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex flex-row justify-between p-4">
          <div className="mx-auto">
            <img src={Logo1} alt="client logo image" />
          </div>
          <div className="mx-auto">
            <img src={Logo2} alt="client logo image" />
          </div>
          <div className="mx-auto">
            <img src={Logo3} alt="client logo image" />
          </div>
          <div className="mx-auto">
            <img src={Logo4} alt="client logo image" />
          </div>
          <div className="mx-auto">
            <img src={Logo5} alt="client logo image" />
          </div>
          <div className="mx-auto">
            <img src={Logo6} alt="client logo image" />
          </div>
          <div className="mx-auto">
            <img src={Logo3} alt="client logo image" />
          </div>
        </div>
      </div>
      {/* Our Client ends here */}
    </>
  );
};
