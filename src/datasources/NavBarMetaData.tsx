import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
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
		color: "#90caf9",
		route: "/",
		icon: (tab: number) => (
			<AccountCircleOutlinedIcon
				className={setColor(tab, 0, colors.defaultLightBlue)}
			/>
		),
		order: 0,
	},
	{
		label: "SKILLS",
		color: "#66bb6a",
		route: "/skills",
		icon: (tab: number) => (
			<LightbulbOutlinedIcon
				className={setColor(tab, 1, colors.defaultGreen)}
			/>
		),
		order: 3,
	},
	{
		label: "TUTORIALS",
		color: "#ce93d8",
		route: "/tutorials",
		icon: (tab: number) => (
			<SchoolOutlinedIcon className={setColor(tab, 2, colors.defaultPurple)} />
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
			/>
		),
		order: 5,
	},
];
