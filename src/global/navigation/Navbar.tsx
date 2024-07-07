import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import { Tab, Tabs, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";

import { tabsData } from "../../datasources/NavBarMetaData";
import styles from "./NavBar.module.scss";

export const Navbar = ({
	setDarkMode,
}: {
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const darkMode = useContext(DarkMode);
	const router = useRouter();

	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth < 900);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	const initialTab = () => {
		const currentBrowserRoute = router.pathname;

		if (currentBrowserRoute === tabsData[0].route) {
			return 0;
		}

		for (let tab = 1; tab < tabsData.length; tab++) {
			if (currentBrowserRoute.startsWith(tabsData[tab].route)) {
				return tab;
			}
		}

		return 0;
	};

	const [tabIndex, setTabIndex] = useState(initialTab());

	const handleTabClick = (route: string, tab: number) => {
		setTabIndex(tab);
		router.replace(route);
	};

	const handleDarkModeToggle = () => {
		localStorage.setItem("dark-mode", `${!darkMode}`);
		setDarkMode(!darkMode);
	};

	useEffect(() => {
		setTabIndex(initialTab());
	}, [router, initialTab]);

	const ensureTabsFit = (index: number) => {
		const largeScreenTab = index === 0 ? "160px" : "120px";
		return { minWidth: isSmallScreen ? "60px" : largeScreenTab };
	};

	return (
		<nav>
			<Tabs
				value={tabIndex}
				scrollButtons={true}
				TabIndicatorProps={{ style: { background: tabsData[tabIndex].color } }}
				textColor='inherit'
				variant={"standard"}
				centered
				className={styles.container}>
				{tabsData.map((item, index) => {
					const tabStyles = ensureTabsFit(index);
					return (
						<Tab
							label={
								item.label || (
									<span className={styles.visuallyHidden}>
										Franklin Von Moon
									</span>
								)
							}
							icon={item.icon(tabIndex)}
							className={styles.tab}
							style={{
								order: item.order,
								fontSize: "12px",
								...tabStyles,
							}}
							key={index}
							tabIndex={index + 1}
							onClick={() => {
								handleTabClick(item.route, index);
							}}
						/>
					);
				})}

				<div className={styles.spacer} style={{ order: 2 }} />
				<div className={styles.spacer} style={{ order: 6 }} />

				<div
					className={styles.darkModeToggle}
					style={{ order: 7 }}
					onClick={() => handleDarkModeToggle()}>
					<Tooltip TransitionComponent={Zoom} title='Dark Mode'>
						{darkMode ? (
							<button className={styles.iconDim} tabIndex={5}>
								<Brightness6Icon style={{ height: "20px", width: "20px" }} />
							</button>
						) : (
							<button className={styles.iconBright} tabIndex={5}>
								<Brightness3Icon style={{ height: "20px", width: "20px" }} />
							</button>
						)}
					</Tooltip>
				</div>
			</Tabs>
		</nav>
	);
};
