import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Icon.png";

export const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center p-4">
      <div className="flex flex-row items-center ">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="" className="h-8  md:h-8  mr-2" />
          <h1 className="text-3xl md:text-4xl font-bold text-[#263238]">
            Nexcent
          </h1>
        </Link>
      </div>

      <ul className="flex  items-center gap-8">
        <Link to="/" className="">
          <li className=" text-xl  text-[#263238]">Home</li>
        </Link>
        <Link to="/service" className="">
          <li className=" text-xl  text-[#263238]">Service</li>
        </Link>
        <Link to="/feature" className="">
          <li className=" text-xl  text-[#263238]">Feature</li>
        </Link>
        <Link to="/product" className="">
          <li className=" text-xl  text-[#263238]">Product</li>
        </Link>
        <Link to="/testimonial" className="">
          <li className=" text-xl  text-[#263238]">Testimonial</li>
        </Link>
        <Link to="/FAQ" className="">
          <li className=" text-xl  text-[#263238]">FAQ</li>
        </Link>
      </ul>

      <div className="flex flex-row items-center gap-4 ">
        <Link to="/" className="flex items-center">
          <button className=" px-4 py-2 rounded-lg ">Login</button>
        </Link>

        <Link to="/" className="flex items-center">
          <button className="bg-[#4CAF4F] px-4 py-2 rounded-lg text-white ">
            Signup
          </button>
        </Link>
      </div>
    </header>
  );
};
