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
	typography: {
		button: {
			textTransform: "none",
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
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: "#ffffff",
					backgroundImage: `linear-gradient(180deg, #ffffff 50%, #f5f5f5 100%)`,
				},
			},
		},
	},
});
