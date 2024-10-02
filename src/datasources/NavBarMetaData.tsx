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
	route: string;
	icon: (tab: number) => JSX.Element;
	order: number;
}[] = [
	{
		label: "",
		color: "#90caf9",
		route: "/",
		icon: (tab: number) => (
			<AccountCircleOutlinedIcon
				className={setColor(tab, 0, colors.defaultLightBlue)}
				style={{ height: "20px", width: "20px" }}
			/>
		),
		order: 0,
	},
	{
		label: "FOLIO",
		color: "#66bb6a",
		route: "/folio",
		icon: (tab: number) => (
			<WorkOutlineOutlinedIcon
				className={setColor(tab, 1, colors.defaultGreen)}
				style={{ height: "18px", width: "18px" }}
			/>
		),
		order: 3,
	},
	{
		label: "GUIDES",
		color: "#ce93d8",
		route: "/guides",
		icon: (tab: number) => (
			<SchoolOutlinedIcon
				className={setColor(tab, 2, colors.defaultPurple)}
				style={{ height: "20px", width: "20px" }}
			/>
		),
		order: 4,
	},
	{
		label: "PROJECTS",
		color: "#f44336",
		route: "/projects",
		icon: (tab: number) => (
			<BookmarkBorderOutlinedIcon
				className={setColor(tab, 3, colors.defaultRed)}
				style={{ height: "20px", width: "20px" }}
			/>
		),
		order: 5,
	},
	{
		label: "TRAVEL",
		color: "#ffeb3b",
		route: "/travel",
		icon: (tab: number) => (
			<HikingOutlinedIcon
				className={setColor(tab, 4, colors.defaultYellow)}
				style={{ height: "20px", width: "20px" }}
			/>
		),
		order: 6,
	},
];
