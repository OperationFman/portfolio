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
import styles from "./NavBar.module.scss";

export const Navbar = ({
	setDarkMode,
}: {
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const darkMode = useContext(DarkMode);
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
				icon={
					<AccountCircleOutlinedIcon
						className={
							tab === 0 ? colors.defaultLightBlue : styles.colorDefault
						}
					/>
				}
				className={styles.tab}
				style={{ order: 1 }}
				onClick={() => {
					handleTabClick("/", 0);
				}}
			/>

			<Tab
				label='SKILLS'
				icon={
					<LightbulbOutlinedIcon
						className={tab === 1 ? colors.defaultGreen : styles.colorDefault}
					/>
				}
				style={{ order: 3 }}
				className={styles.tab}
				onClick={() => {
					handleTabClick("/skills", 1);
				}}
			/>
			<Tab
				label='TUTORIALS'
				icon={
					<SchoolOutlinedIcon
						className={tab === 2 ? colors.defaultPurple : styles.colorDefault}
					/>
				}
				style={{ order: 4 }}
				className={styles.tab}
				onClick={() => {
					handleTabClick("/tutorials", 2);
				}}
			/>
			<Tab
				label='PROJECTS'
				icon={
					<BookmarkBorderOutlinedIcon
						className={tab === 3 ? colors.defaultRed : styles.colorDefault}
					/>
				}
				style={{ order: 5 }}
				className={`${styles.tab} ${styles.projectTab}`}
				onClick={() => {
					handleTabClick("/projects", 3);
				}}
			/>
			<div className={styles.spacer} style={{ order: 2 }} />
			<div className={styles.spacer} style={{ order: 6 }} />
			<IconButton
				onClick={() => handleDarkModeToggle()}
				className={styles.darkModeToggle}
				style={{ order: 7 }}>
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
