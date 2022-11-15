import CommitIcon from "@mui/icons-material/Commit";
import { Typography } from "@mui/material";
import Image from "next/future/image";
import { useContext } from "react";
import { DarkMode } from "../../../../themes/GlobalTheme";
import styles from "../Experience.module.css";

export const VolunteerListItem = ({
	logo,
	title,
	location,
	year,
	isLastElement = false,
	isMobile,
}: {
	logo: string;
	title: string;
	location: string;
	year: string;
	isLastElement?: boolean;
	isMobile: boolean;
}) => {
	const darkMode = useContext(DarkMode);
	const selectedTheme = darkMode ? "#13181c" : "#FFFFFF";

	return (
		<>
			<CommitIcon
				fontSize='large'
				className={`${styles.lineIcon} ${styles.lineIconDesktop}`}
				style={{
					backgroundColor: selectedTheme,
				}}
			/>
			<div
				className={`${styles.itemContainer} ${styles.itemContainerDesktop}`}
				style={{
					padding: isLastElement ? "0px 50px 0px" : "0px 50px 85px",
				}}>
				<Image
					src={`/homepage/companies/${logo}.png`}
					alt='tw'
					width='200'
					height='50'
					className={`${styles.logo} ${styles.logoDesktop}`}
				/>

				<Typography
					variant='subtitle1'
					align={isMobile ? "left" : "right"}
					className={styles.title}>
					{title}
				</Typography>
				<Typography
					variant='subtitle1'
					color='#949494'
					align={isMobile ? "left" : "right"}
					className={styles.roleLocation}>
					{location}
				</Typography>
				<Typography
					variant='subtitle1'
					color='#949494'
					align={isMobile ? "left" : "right"}
					className={`${styles.rolePeriod} ${styles.rolePeriodDesktop}`}>
					{year}
				</Typography>
			</div>
		</>
	);
};
