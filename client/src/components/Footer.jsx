import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Icon.png";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 p-8 bg-gray-900 text-white  dark:bg-black dark:text-white">
        <div className="flex flex-col md:w-[30%] space-y-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="" className="h-8  md:h-8  mr-2" />
            <h1 className="text-3xl md:text-4xl font-bold text-white ">
              Nexcent
            </h1>
          </Link>
          <p>
            Copyright @ 2020 Nexcent ltd. <br />
            All rights reserved
          </p>
          <div className="flex flex-row gap-3 text-green-700 text-2xl">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
        <div className="flex flex-col md:w-[20%] space-y-4 ">
          <h1 className="text-4xl font-bold">Company</h1>

          <ul className="text-xl font-semibold space-y-2">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/testimonial">Testimonial</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:w-[20%] space-y-4 ">
          <h1 className="text-4xl font-bold">Support</h1>

          <ul className="text-xl font-semibold space-y-2">
            <li>
              <Link to="/">Help center</Link>
            </li>
            <li>
              <Link to="/">Terms pf service</Link>
            </li>
            <li>
              <Link to="/">Legal</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Status</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:w-[30%] space-y-4">
          <h1 className="text-4xl font-bold">Stay up to date</h1>
          <div className="flex flex-row md:w-3/4 px-4 rounded-md bg-gray-700 items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="py-3 rounded-md w-full bg-transparent outline-none"
            />
            <FaArrowRight type="submit" className="text-xl text-teal-50" />
          </div>
        </div>
      </div>
    </div>
  );
};
