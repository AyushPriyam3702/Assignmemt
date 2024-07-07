import React, { useState, useEffect } from "react";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for previously stored dark mode preference
    return localStorage.getItem("dark-mode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Store the preference in localStorage
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full p-2 transition-all duration-300"
    >
      {darkMode ? (
        <BsSunFill className="text-yellow-500 text-xl" />
      ) : (
        <BsFillMoonStarsFill className="text-blue-500 text-xl" />
      )}
    </button>
  );
};

export default DarkModeToggle;
