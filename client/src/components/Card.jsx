import React from "react";

export const Card = ({ image, text }) => {
  return (
    <div className="relative flex flex-col items-center w-full max-w-sm mx-auto bg-transparent rounded-lg shadow-lg overflow-hidden dark:bg-gray-900 dark:text-white">
      <div className="relative w-full h-fit bg-transparent">
        <img src={image} alt="" className="w-full object-cover opacity-75" />
      </div>
      <div className="relative -mt-12 w-11/12 dark:bg-gray-900 dark:text-white p-6 rounded-md shadow-lg z-10 mx-auto">
        <h1 className="text-xl font-bold mb-2">{text}</h1>
        <p className="text-[#4CAF4F] cursor-pointer">Read more &rarr;</p>
      </div>
    </div>
  );
};
