import type { AppProps } from "next/app";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import "react-notion-x/src/styles.css";
import { Navbar } from "../src/global/navigation/Navbar";
import { GlobalTheme } from "../themes/GlobalTheme";
import { isClientSide } from "../utils/isClientSide";
import "../themes/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		setDarkMode(localStorage.getItem("dark-mode") === "true");
	}, []);

	if (isClientSide()) {
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
