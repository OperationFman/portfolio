import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import "react-notion-x/src/styles.css";
import { Navbar } from "../src/global/navigation/Navbar";
import { GlobalTheme } from "../themes/GlobalTheme";
import { isClientSide } from "../utils/isClientSide";
import { useDarkMode } from "../utils/useDarkMode";

function MyApp({ Component, pageProps }: AppProps) {
	const [darkMode, setDarkMode] = useState(false);
	const router = useRouter();
  const { darkMode, setDarkMode } = useDarkMode();

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			// React Spring Parallax needed scrollbar removed for Homepage.tsx, this adds it back for other pages:
			if (url !== "/" && isClientSide()) {
				document.body.style.overflow = "visible";
			}
		};

		router.events.on("routeChangeStart", handleRouteChange);
	}, []);

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
