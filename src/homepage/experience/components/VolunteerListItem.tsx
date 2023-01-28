import CommitIcon from "@mui/icons-material/Commit";
import { Typography } from "@mui/material";
import Image from "next/future/image";
import { setDark } from "../../../../utils/configureCss/configureCss";

import color from "../../../../themes/_colors.module.scss";
import styles from "../Experience.module.scss";
import volunteerStyles from "./VolunteerListItem.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

export const VolunteerListItem = ({
	logo,
	title,
	location,
	year,
	index,
}: {
	logo: string;
	title: string;
	location: string;
	year: string;
	index: number;
}) => {
	return (
		<>
			<CommitIcon
				fontSize='large'
				className={`${styles.lineIcon} ${setDark(volunteerStyles, "lineIcon")}`}
			/>
			<div
				className={`${styles.itemContainer} ${volunteerStyles.itemContainer}`}>
				<Image
					src={`/homepage/companies/${logo}.png`}
					alt={logo}
					width='200'
					height='50'
					className={`${styles.logo} ${volunteerStyles.logo}`}
				/>

				<ScrollAnimation animateIn='fadeIn' animateOnce delay={index * 10}>
					<Typography
						variant='subtitle1'
						className={`${volunteerStyles.title}`}>
						{title}
					</Typography>
					<Typography
						variant='subtitle1'
						className={`${styles.roleLocation} ${volunteerStyles.roleLocation} ${color.brightGrey}`}>
						{location}
					</Typography>
					<Typography
						variant='subtitle1'
						className={`${styles.rolePeriod} ${volunteerStyles.rolePeriod} ${color.brightGrey}`}>
						{year}
					</Typography>
				</ScrollAnimation>
			</div>
		</>
	);
};
