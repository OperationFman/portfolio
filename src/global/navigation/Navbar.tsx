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
	const [darkModeLoading, setDarkModeLoading] = useState(true);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth < 900);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		setTimeout(() => {
			setDarkModeLoading(false);
		}, 3000);

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
		if (!darkModeLoading) {
			localStorage.setItem("dark-mode", `${!darkMode}`);
			setDarkMode(!darkMode);

			if (tabIndex === 0 && !isSmallScreen) {
				setDarkModeLoading(true);

				setTimeout(() => {
					setDarkModeLoading(false);
				}, 3000);
			}
		}
	};

	useEffect(() => {
		setTabIndex(initialTab());
	}, [router, initialTab]);

	const ensureTabsFit = (index: number) => {
		const largeScreenTab = index === 0 ? "9.475rem" : "7.7rem";
		return { minWidth: isSmallScreen ? "5rem" : largeScreenTab };
	};

	return (
		<nav>
			<Tabs
				value={tabIndex}
				scrollButtons={true}
				TabIndicatorProps={{ style: { background: tabsData[tabIndex].color } }}
				textColor='inherit'
				variant='standard'
				centered
				className={styles.container}>
				{tabsData.map((item, index) => {
					const tabStyles = ensureTabsFit(index);
					return (
						<Tab
							label={
								item.label || (
									<span className={styles.visuallyHidden}>PORTFOLIO</span>
								)
							}
							icon={item.icon(tabIndex)}
							className={`${styles.tab} ${styles.hover}`}
							style={{
								order: item.order,
								fontSize: isSmallScreen ? "0.7rem" : "0.9rem",
								padding: "0.4375rem",
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

				<div
					className={styles.darkModeToggle}
					style={{
						order: 5,
						opacity: darkModeLoading ? "0.1" : "1",
						cursor: darkModeLoading ? "default" : "pointer",
						position: "absolute",
						right: 0,
						height: "100%",
					}}
					onClick={() => handleDarkModeToggle()}>
					<Tooltip TransitionComponent={Zoom} title='Dark Mode'>
						{darkMode ? (
							<button className={styles.iconDim} tabIndex={5}>
								<Brightness6Icon
									style={{ height: "1.25rem", width: "1.8rem" }}
								/>
							</button>
						) : (
							<button className={styles.iconBright} tabIndex={5}>
								<Brightness3Icon
									style={{ height: "1.25rem", width: "1.8rem" }}
								/>
							</button>
						)}
					</Tooltip>
				</div>
			</Tabs>
		</nav>
	);
};
