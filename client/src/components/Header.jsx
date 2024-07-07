import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Icon.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex flex-row justify-between items-center p-4 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-row items-center ">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="" className="h-8  md:h-8  mr-2" />
          <h1 className="text-3xl md:text-4xl font-bold text-[#263238]  dark:text-white">
            Nexcent
          </h1>
        </Link>
      </div>

      {menuOpen ? (
        <div className="md:hidden flex flex-col absolute top-16 right-0 w-1/2">
          <ul className="  flex flex-col  items-center gap-2 ">
            <Link
              to="/"
              className="text-xl font-semibold text-[#263238] w-full bg-white  text-center py-2 shadow-xl"
            >
              <li className=" ">Home</li>
            </Link>
            <Link
              to="/service"
              className="text-xl font-semibold text-[#263238] w-full bg-white text-center py-2 shadow-xl"
            >
              <li className=" text-xl  text-[#263238]">Service</li>
            </Link>
            <Link
              to="/feature"
              className="text-xl font-semibold text-[#263238] w-full bg-white text-center py-2 shadow-xl"
            >
              <li className=" text-xl  text-[#263238]">Feature</li>
            </Link>
            <Link
              to="/product"
              className="text-xl font-semibold text-[#263238] w-full bg-white text-center py-2 shadow-xl"
            >
              <li className=" text-xl  text-[#263238]">Product</li>
            </Link>
            <Link
              to="/testimonial"
              className="text-xl font-semibold text-[#263238] w-full bg-white text-center py-2 shadow-xl"
            >
              <li className=" text-xl  text-[#263238]">Testimonial</li>
            </Link>
            <Link
              to="/FAQ"
              className="text-xl font-semibold text-[#263238] w-full bg-white text-center py-2 shadow-xl"
            >
              <li className=" text-xl  text-[#263238]">FAQ</li>
            </Link>
            <Link
              to="/"
              className="text-xl font-semibold  w-full bg-white text-center py-2 shadow-xl rounded-lg"
            >
              <button className="  ">Login</button>
            </Link>

            <Link
              to="/"
              className="text-xl font-semibold  w-full bg-[#4CAF4F] text-center py-2 shadow-xl rounded-lg"
            >
              <button className="  text-white ">Signup</button>
            </Link>
          </ul>
          <div className="flex flex-col gap-2 "></div>
        </div>
      ) : (
        ""
      )}

      <ul className="md:flex hidden items-center gap-8 text-[#263238] dark:bg-gray-900 dark:text-white">
        <Link to="/" className="">
          <li className=" text-xl  ">Home</li>
        </Link>
        <Link to="/service" className="">
          <li className=" text-xl  ">Service</li>
        </Link>
        <Link to="/feature" className="">
          <li className=" text-xl  ">Feature</li>
        </Link>
        <Link to="/product" className="">
          <li className=" text-xl  ">Product</li>
        </Link>
        <Link to="/testimonial" className="">
          <li className=" text-xl  ">Testimonial</li>
        </Link>
        <Link to="/FAQ" className="">
          <li className=" text-xl  ">FAQ</li>
        </Link>
      </ul>

      <div className="hidden md:flex flex-row items-center gap-4 ">
        <Link to="/" className="flex items-center">
          <button className=" px-4 py-2 rounded-lg ">Login</button>
        </Link>

        <Link to="/" className="flex items-center">
          <button className="bg-[#4CAF4F] px-4 py-2 rounded-lg text-white ">
            Signup
          </button>
        </Link>
      </div>

      <div className="flex items-center md:hidden">
        <button onClick={toggleMenu} className="text-5xl focus:outline-none">
          ☰
        </button>
      </div>
    </header>
  );
};
