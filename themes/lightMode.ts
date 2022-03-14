import { createTheme } from "@mui/material/styles";
import { navBarGlobal } from "../layout/navigation/NavbarStyles";

declare module "@mui/material/styles" {
  interface Palette {
    baseGrey: Palette["primary"];
  }
  interface PaletteOptions {
    baseGrey?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    baseGrey: true;
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    baseGrey: {
      main: "#8c8c8c",
    },
  },
  components: navBarGlobal,
});
