import { SxProps, Theme } from "@mui/material";

export const navBarGlobal = {
  MuiTab: {
    styleOverrides: {
      root: {
        color: "#fff",
      },
    },
  },
};

export const container = (isMobile: boolean): SxProps<Theme> => {
  return {
    backgroundColor: "#212121",
    boxShadow: 5,
    paddingRight: isMobile ? "65px" : "0px",
  };
};

export const mobileHome = (): SxProps<Theme> => {
  return {
    minWidth: "30px",
    paddingLeft: "20px",
    marginRight: "10px",
    marginLeft: "10px",
  };
};

export const desktopHome = (): SxProps<Theme> => {
  return {
    display: "flex",
    alignSelf: "center",
    justifyContent: "left",
    position: "fixed",
    left: 0,
    top: "5px",
  };
};

export const darkModeIcon = (isMobile: boolean): SxProps<Theme> => {
  return {
    display: "flex",
    justifyContent: "right",
    alignSelf: "center",
    position: "fixed",
    right: isMobile ? "10px" : "20px",
    "&:hover": {
      backgroundColor: "#242424",
    },
  };
};

export const onHover = (): SxProps<Theme> => {
  return {
    "&:hover": {
      backgroundColor: "#242424",
    },
  };
};
