import { SxProps, Theme } from "@mui/material";

export const navBarGlobal = {
  MuiTab: {
    styleOverrides: {
      root: {
        color: "#fff",
        transition: "linear 200ms",
      },
    },
  },
};

export const onHover: SxProps<Theme> = {
  "&:hover": {
    backgroundColor: "#2E2E2E",
    transition: "linear 400ms",
  },
};

export const mobileHomeButton: SxProps<Theme> = {
  minWidth: "30px",
  paddingLeft: "20px",
  marginRight: "10px",
  marginLeft: "10px",
  ...onHover,
};

export const desktopHomeButton: SxProps<Theme> = {
  display: "flex",
  alignSelf: "center",
  justifyContent: "left",
  position: "absolute",
  left: 0,
  paddingTop: "15px",
  ...onHover,
};

export const container = (isMobile: boolean): SxProps<Theme> => {
  return {
    backgroundColor: "#212121",
    boxShadow: 5,
    paddingRight: isMobile ? "65px" : "0px",
  };
};

export const darkModeIcon = (isMobile: boolean): SxProps<Theme> => {
  return {
    display: "flex",
    justifyContent: "right",
    alignSelf: "center",
    // TODO: Find root cause for absolute forcing icon over container
    position: isMobile ? "fixed" : "absolute",
    right: isMobile ? "10px" : "20px",
    ...onHover,
  };
};
