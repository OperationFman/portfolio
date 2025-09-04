import type { AppProps } from "next/app";
import "prismjs/themes/prism-tomorrow.css";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import "react-notion-x/src/styles.css";
import { Navbar } from "../src/global/navigation/Navbar";
import "../themes/globals.css";
import { GlobalTheme } from "../themes/GlobalTheme";
import type { NextPageWithSEO } from "../src/global/SEOHeader";

type AppPropsWithSEO = AppProps & {
	Component: NextPageWithSEO;
};

function MyApp({ Component, pageProps }: AppPropsWithSEO) {
	const [darkMode] = useState(true);

	if (typeof window !== "undefined") {
		document.body.style.overflowX = "hidden";
	}

	return (
		<>
			<GlobalTheme darkMode={darkMode}>
				{Component.seoHeader && Component.seoHeader(pageProps)}

				<Navbar />
				<Analytics />
				<Component {...pageProps} />
			</GlobalTheme>
		</>
	);
}

export default MyApp;
