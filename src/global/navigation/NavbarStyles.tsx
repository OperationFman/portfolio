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
	marginLeft: "10px",
	marginRight: "5px",
	fontSize: 12,
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

export const centerTabs = (
	isMobile: boolean,
	isProject: boolean = false,
): SxProps<Theme> => {
	return {
		minWidth: isMobile ? "85px" : "",
		fontSize: isMobile ? 12 : "",
		marginRight: isProject && isMobile ? "65px" : "",
		...onHover,
	};
};

export const container = (isMobile: boolean): SxProps<Theme> => {
	return {
		backgroundColor: "#212121",
		boxShadow: 5,
		position: "sticky",
		top: 0,
		zIndex: 9999,
	};
};

export const darkModeIcon = (isMobile: boolean): SxProps<Theme> => {
	return {
		display: "flex",
		justifyContent: "right",
		alignSelf: "center",
		position: "absolute",
		right: isMobile ? "5px" : "20px",
		...onHover,
	};
};
