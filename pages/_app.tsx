
import type { AppProps } from "next/app";
import "prismjs/themes/prism-tomorrow.css";
import React, { useEffect, useState } from "react";
import "react-notion-x/src/styles.css";
import { Navbar } from "../src/components/navigation/Navbar";
import { GlobalTheme } from "../themes/GlobalTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem("dark-mode") === "true");
  }, []);

  return (
    <GlobalTheme darkMode={darkMode}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Component {...pageProps} />
    </GlobalTheme>
  );
}

export default MyApp;
