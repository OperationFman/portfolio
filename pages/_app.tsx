import type { AppProps } from "next/app";
import React, { useState } from "react";
import { Navbar } from "../components/navigation/Navbar";
import { GlobalTheme } from "../themes/GlobalTheme";

import Brightness6Icon from "@mui/icons-material/Brightness6";
import Brightness3Icon from "@mui/icons-material/Brightness3";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <GlobalTheme darkMode={darkMode}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Brightness3Icon />
      <Brightness6Icon />

      <Component {...pageProps} />
    </GlobalTheme>
  );
}

export default MyApp;
