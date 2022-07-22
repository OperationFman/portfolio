import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import "react-notion-x/src/styles.css";
import { Navbar } from "../src/global/navigation/Navbar";
import { GlobalTheme } from "../themes/GlobalTheme";
import { shouldShowScrollBar } from "../utils/shouldShowScrollbar";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		setDarkMode(localStorage.getItem("dark-mode") === "true");
	}, []);

	useEffect(() => {
		shouldShowScrollBar(router);
	}, [router]);

	return (
		<GlobalTheme darkMode={darkMode}>
			<Navbar setDarkMode={setDarkMode} />

			<Component {...pageProps} />
		</GlobalTheme>
	);
}

export default MyApp;
