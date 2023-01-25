import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { IconButton, Tab, Tabs, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";
import colors from "../../../themes/_colors.module.scss";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import styles from "./NavBar.module.scss";

type NavbarProps = {
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Navbar = (props: NavbarProps) => {
	const { setDarkMode } = props;

	const darkMode = useContext(DarkMode);
	const { isMobile } = useDeviceDetect();
	const router = useRouter();

	const setIndicator: string[] = ["#90caf9", "#66bb6a", "#ce93d8", "#f44336"];

	const initialTab = () => {
		const routes: string[] = ["/", "/skills", "/tutorials", "/projects"];

		const route = router.pathname;

		if (route === routes[0]) {
			return 0;
		}

		for (let tab = 1; tab < routes.length; tab++) {
			if (route.startsWith(routes[tab])) {
				return tab;
			}
		}

		return -1;
	};

	const [tab, setTab] = useState(initialTab());

	const handleTabClick = (route: string, tab: number) => {
		setTab(tab);

		setTimeout(() => {
			router.replace(route);
		}, 400);
	};

	const handleDarkModeToggle = () => {
		localStorage.setItem("dark-mode", `${!darkMode}`);
		setDarkMode(!darkMode);
	};

	return (
		<Tabs
			value={tab}
			scrollButtons={true}
			TabIndicatorProps={{ style: { background: setIndicator[tab] } }}
			textColor='inherit'
			variant={"standard"}
			centered
			className={styles.container}>
			<Tab
				label={isMobile ? "FVM" : "FRANKLIN V MOON"}
				icon={
					<AccountCircleOutlinedIcon
						fontSize='small'
						className={tab === 0 ? colors.defaultBlue : styles.colorDefault}
					/>
				}
				className={styles.homepageTab}
				onClick={() => {
					handleTabClick("/", 0);
				}}
			/>
			<Tab
				label='SKILLS'
				icon={
					<LightbulbOutlinedIcon
						fontSize='small'
						className={tab === 1 ? colors.defaultGreen : styles.colorDefault}
					/>
				}
				className={styles.centerTab}
				onClick={() => {
					handleTabClick("/skills", 1);
				}}
			/>
			<Tab
				label='TUTORIALS'
				icon={
					<SchoolOutlinedIcon
						fontSize='small'
						className={tab === 2 ? colors.defaultPurple : styles.colorDefault}
					/>
				}
				className={styles.centerTab}
				onClick={() => {
					handleTabClick("/tutorials", 2);
				}}
			/>
			<Tab
				label='PROJECTS'
				icon={
					<BookmarkBorderOutlinedIcon
						fontSize='small'
						className={tab === 3 ? colors.defaultRed : styles.colorDefault}
					/>
				}
				className={`${styles.centerTab} ${styles.projectTab}`}
				onClick={() => {
					handleTabClick("/projects", 3);
				}}
			/>
			<IconButton
				onClick={() => handleDarkModeToggle()}
				className={styles.darkModeToggle}>
				<Tooltip TransitionComponent={Zoom} title='Dark Mode'>
					{darkMode ? (
						<Brightness6Icon className={styles.iconDim} />
					) : (
						<Brightness3Icon className={styles.iconBright} />
					)}
				</Tooltip>
			</IconButton>
		</Tabs>
	);
};
