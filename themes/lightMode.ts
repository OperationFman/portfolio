import { createTheme } from "@mui/material/styles";
import { navBarGlobal } from "./legacyMUIStyles";

declare module "@mui/material/styles" {
	interface Palette {
		baseGrey: Palette["primary"];
		defaultText: Palette["primary"];
	}
	interface PaletteOptions {
		baseGrey?: PaletteOptions["primary"];
		defaultText?: Palette["primary"];
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		baseGrey: true;
		defaultText: true;
	}
}

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		baseGrey: {
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
