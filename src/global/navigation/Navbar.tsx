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
import useDeviceDetect from "../../../utils/useDeviceDetect";
import {
	centerTabs,
	container,
	darkModeIcon,
	desktopHomeButton,
	mobileHomeButton,
} from "./NavbarStyles";

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

	return (
		<Tabs
			value={tab}
			scrollButtons={true}
			TabIndicatorProps={{ style: { background: setIndicator[tab] } }}
			textColor='inherit'
			variant={"standard"}
			centered
			sx={container(isMobile)}>
			{isMobile ? (
				<Tab
					label={"FVM"}
					icon={
						<AccountCircleOutlinedIcon
							fontSize='small'
							color={tab === 0 ? "primary" : "inherit"}
						/>
					}
					sx={mobileHomeButton}
					onClick={() => {
						handleTabClick("/", 0);
					}}
				/>
			) : (
				<Tab
					label={"FRANKLIN V MOON"}
					icon={
						<AccountCircleOutlinedIcon
							fontSize='small'
							color={tab === 0 ? "primary" : "inherit"}
						/>
					}
					sx={desktopHomeButton}
					onClick={() => {
						handleTabClick("/", 0);
					}}
				/>
			)}
			<Tab
				label='SKILLS'
				icon={
					<LightbulbOutlinedIcon
						fontSize='small'
						color={tab === 1 ? "success" : "inherit"}
					/>
				}
				sx={centerTabs(isMobile)}
				onClick={() => {
					handleTabClick("/skills", 1);
				}}
			/>
			<Tab
				label='TUTORIALS'
				icon={
					<SchoolOutlinedIcon
						fontSize='small'
						color={tab === 2 ? "secondary" : "inherit"}
					/>
				}
				sx={centerTabs(isMobile)}
				onClick={() => {
					handleTabClick("/tutorials", 2);
				}}
			/>
			<Tab
				label='PROJECTS'
				icon={
					<BookmarkBorderOutlinedIcon
						fontSize='small'
						color={tab === 3 ? "error" : "inherit"}
					/>
				}
				sx={centerTabs(isMobile, true)}
				onClick={() => {
					handleTabClick("/projects", 3);
				}}
			/>
			<IconButton
				onClick={() => {
					localStorage.setItem("dark-mode", `${!darkMode}`);
					setDarkMode(!darkMode);
				}}
				sx={darkModeIcon(isMobile)}>
				<Tooltip TransitionComponent={Zoom} title='Dark Mode'>
					{darkMode ? (
						<Brightness6Icon sx={{ color: "#9c9c9c" }} />
					) : (
						<Brightness3Icon sx={{ color: "#fff" }} />
					)}
				</Tooltip>
			</IconButton>
		</Tabs>
	);
};
