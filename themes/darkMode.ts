import { navBarGlobal } from "../src/global/navigation/NavbarStyles";
import { createTheme } from "@mui/material/styles";

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

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		background: {
			paper: "#212121",
			default: "#13181c",
		},
		baseGrey: {
			main: "#949494",
		},
		defaultText: {
			main: "#FFFFFF",
			light: "#FFFFFF",
			dark: "#FFFFFF",
			contrastText: "#FFFFFF",
		},
	},
	components: navBarGlobal,
	typography: {
		button: {
			textTransform: "none",
		},
	},
});
