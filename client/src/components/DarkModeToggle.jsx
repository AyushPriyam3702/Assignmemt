// src/components/DarkModeToggle.jsx
import React, { useState, useEffect } from "react";

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
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
    >
      Dark Mode
    </button>
  );
};

export default DarkModeToggle;
