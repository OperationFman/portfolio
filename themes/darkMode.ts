import { createTheme } from "@mui/material/styles";

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

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		background: {
			paper: "#212121",
			default: "#13181c",
		},
		brightGrey: {
			main: "#949494",
		},
		defaultText: {
			main: "#FFFFFF",
			light: "#FFFFFF",
			dark: "#FFFFFF",
			contrastText: "#FFFFFF",
		},
	},
	components: {
		MuiTab: {
			styleOverrides: {
				root: {
					color: "#fff",
					transition: "linear 200ms",
				},
			},
		},
		
	},
	typography: {
		button: {
			textTransform: "none",
		},
	},
});
