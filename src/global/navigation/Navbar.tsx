import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import { IconButton, Tab, Tabs, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
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
					return (
						<Tab
							label={item.label}
							icon={item.icon(tabIndex)}
							className={styles.tab}
							style={{ order: item.order }}
							key={index}
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
							<Brightness6Icon className={styles.iconDim} />
						) : (
							<Brightness3Icon className={styles.iconBright} />
						)}
					</Tooltip>
				</div>
			</Tabs>
		</nav>
	);
};
