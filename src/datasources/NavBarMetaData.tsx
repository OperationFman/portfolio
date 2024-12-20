import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import colors from "../../themes/_colors.module.scss";

const setColor = (tab: number, id: number, color: string) => {
	return tab === id ? color : colors.brightGrey;
};

export const tabsData: {
	label?: string;
	color: string;
	gradient: string;
	route: string;
	icon: (tab: number) => JSX.Element;
	order: number;
}[] = [
	{
		label: "",
		color: "#90caf9",
		gradient: "defaultDarkBlueGradient",
		route: "/",
		icon: (tab: number) => (
			<AccountCircleOutlinedIcon
				className={setColor(tab, 0, colors.defaultLightBlue)}
				style={{ height: "20px", width: "20px" }}
			/>
		),
		order: 1,
	},
	{
		label: "GUIDES",
		color: "#ce93d8",
		gradient: "defaultPurpleGradient",
		route: "/guides",
		icon: (tab: number) => (
			<SchoolOutlinedIcon
				className={setColor(tab, 1, colors.defaultPurple)}
				style={{ height: "20px", width: "20px" }}
			/>
		),
		order: 2,
	},
	{
		label: "TRAVEL",
		color: "#ffeb3b",
		gradient: "defaultYellowGradient",
		route: "/travel",
		icon: (tab: number) => (
			<HikingOutlinedIcon
				className={setColor(tab, 2, colors.defaultYellow)}
				style={{ height: "20px", width: "20px" }}
			/>
		),
		order: 3,
	},
];
