import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem("dark-mode") === "true");
  }, []);

  return { darkMode, setDarkMode };
};
