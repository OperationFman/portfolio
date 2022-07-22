import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { IconButton, Tab, Tabs, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import {
	container,
	darkModeIcon,
	desktopHomeButton,
	mobileHomeButton,
	onHover,
	centerTabs,
} from "./NavbarStyles";

type NavbarProps = {
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Navbar = (props: NavbarProps) => {
	const { setDarkMode } = props;
	const darkMode = useContext(DarkMode);

	const { isMobile } = useDeviceDetect();
	const router = useRouter();
	const [tab, setTab] = useState(-1);

	// Order is important
	const navTabs: string[] = ["/", "/skills", "/tutorials", "/projects"];
	const setIndicator: string[] = ["#90caf9", "#66bb6a", "#ce93d8", "#f44336"];

	useEffect(() => {
		const route = router.pathname;

		if (route === navTabs[0]) {
			setTab(0);
			return;
		}

		for (let i = 1; i < navTabs.length; i++) {
			if (route.startsWith(navTabs[i])) {
				setTab(i);
				break;
			}
		}
	});

	const handleChange = (event: React.SyntheticEvent, newTab: number) => {
		setTab(newTab);
		router.replace(navTabs[newTab]);
	};

	return (
		<Tabs
			value={tab}
			onChange={handleChange}
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
