import type { AppProps } from "next/app";
import React, { useState } from "react";
import { Navbar } from "../layout/navigation/Navbar";
import { GlobalTheme } from "../themes/GlobalTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <GlobalTheme darkMode={darkMode}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Component {...pageProps} />
    </GlobalTheme>
  );
}

export default MyApp;
