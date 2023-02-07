import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { createContext } from "react";
import { lightTheme } from "./lightMode";
import { darkTheme } from "./darkMode";

type GlobalTheme = {
	children: React.ReactNode;
	darkMode: boolean;
};

export const DarkMode = createContext(true);

export const GlobalTheme = (props: GlobalTheme) => {
	const { children, darkMode } = props;

	React.useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles);
		}
	}, []);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<DarkMode.Provider value={darkMode}>
				<CssBaseline />
				{children}
			</DarkMode.Provider>
		</ThemeProvider>
	);
};
