import { navBarGlobal } from "./../components/navigation/NavbarStyle";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: navBarGlobal,
});
