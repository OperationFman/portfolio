import { createTheme } from "@mui/material/styles";
import { navBarGlobal } from "./legacyMUIStyles";

declare module "@mui/material/styles" {
	interface Palette {
		brightGrey: Palette["primary"];
		defaultText: Palette["primary"];
	}
	interface PaletteOptions {
		brightGrey?: PaletteOptions["primary"];
		defaultText?: Palette["primary"];
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		brightGrey: true;
		defaultText: true;
	}
}

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		brightGrey: {
			main: "#8c8c8c",
		},
		defaultText: {
			main: "#13181c",
			light: "#13181c",
			dark: "#13181c",
			contrastText: "#13181c",
		},
	},

	components: navBarGlobal,
});
