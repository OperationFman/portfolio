import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";
import "react-notion-x/src/styles.css";
import { Navbar } from "../src/global/navigation/Navbar";
import { GlobalTheme } from "../themes/GlobalTheme";
import { shouldShowScrollBar } from "../utils/shouldShowScrollbar";
import { useDarkMode } from "../utils/useDarkMode";

function MyApp({ Component, pageProps }: AppProps) {
  const { darkMode, setDarkMode } = useDarkMode();
  const router = useRouter();

  useEffect(() => {
    shouldShowScrollBar(router);
  }, [router]);

  return (
    <GlobalTheme darkMode={darkMode}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Component {...pageProps} />
    </GlobalTheme>
  );
}

export default MyApp;
