import type { AppProps } from "next/app";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import "react-notion-x/src/styles.css";
import { Navbar } from "../src/global/navigation/Navbar";
import "../themes/globals.css";
import { GlobalTheme } from "../themes/GlobalTheme";

function MyApp({ Component, pageProps }: AppProps) {
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		setDarkMode(localStorage.getItem("dark-mode") === "true");
	}, []);

	if (typeof window !== "undefined") {
		document.body.style.overflowX = "hidden";
	}

	return (
		<>
			<GlobalTheme darkMode={darkMode}>
				<Navbar setDarkMode={setDarkMode} />

				<Component {...pageProps} />
			</GlobalTheme>
		</>
	);
}

export default MyApp;
