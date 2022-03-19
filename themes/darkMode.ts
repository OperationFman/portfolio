import { navBarGlobal } from "../components/navigation/NavbarStyles";
import { createTheme } from "@mui/material/styles";

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

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    baseGrey: {
      main: "#949494",
    },
  },
  components: navBarGlobal,
});
