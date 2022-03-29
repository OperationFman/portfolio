import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { Navbar } from "../src/global/navigation/Navbar";
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
