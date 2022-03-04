import { createTheme } from "@mui/material/styles";
import { navBarGlobal } from "../components/navigation/NavbarStyles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: navBarGlobal,
});
