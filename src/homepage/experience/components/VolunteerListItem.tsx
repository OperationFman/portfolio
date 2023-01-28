import CommitIcon from "@mui/icons-material/Commit";
import { Typography } from "@mui/material";
import Image from "next/future/image";
import { setDark } from "../../../../utils/configureCss/configureCss";

import color from "../../../../themes/_colors.module.scss";
import styles from "../Experience.module.scss";
import volunteerStyles from "./VolunteerListItem.module.scss";

export const VolunteerListItem = ({
	logo,
	title,
	location,
	year,
}: {
	logo: string;
	title: string;
	location: string;
	year: string;
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

				<Typography variant='subtitle1' className={`${volunteerStyles.title}`}>
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
			</div>
		</>
	);
};
