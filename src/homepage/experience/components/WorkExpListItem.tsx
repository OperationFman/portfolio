import CommitIcon from "@mui/icons-material/Commit";
import { Typography } from "@mui/material";
import Image from "next/future/image";
import { setDark } from "../../../../utils/configureCss/configureCss";

import color from "../../../../themes/_colors.module.scss";
import styles from "../Experience.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

export const WorkExpListItem = ({
	companyLogo,
	employerName,
	periodWithEmployer,
	employerLocation,
	employerExperiences,
	index,
}: {
	companyLogo: string;
	employerName: string;
	periodWithEmployer: string;
	employerLocation: string;
	employerExperiences: {
		title: string;
		period: string;
	}[];
	index: number;
}) => {
	return (
		<>
			<CommitIcon
				fontSize='large'
				className={`${styles.lineIcon} ${setDark(styles, "workExpLineIcon")}`}
			/>
			<div className={styles.itemContainer}>
				<Image
					src={`/homepage/companies/${companyLogo}.png`}
					alt={companyLogo}
					width='200'
					height='50'
					className={styles.logo}
				/>

				<ScrollAnimation animateIn='fadeIn' delay={index * 100}>
					<Typography variant='subtitle1'>{employerName}</Typography>

					<Typography variant='subtitle1' className={color.brightGrey}>
						{employerLocation}
					</Typography>
					<Typography
						variant='subtitle1'
						className={`${styles.periodText} ${color.brightGrey}`}>
						{periodWithEmployer}
					</Typography>
					{employerExperiences.map((experienceItem, index) => {
						return (
							<div key={index} className={styles.roles}>
								<Typography variant='subtitle1' className={styles.roleTitle}>
									{experienceItem.title}
								</Typography>
								<Typography
									variant='subtitle1'
									className={`${styles.rolePeriod}  ${color.brightGrey}`}>
									{experienceItem.period}
								</Typography>
							</div>
						);
					})}
				</ScrollAnimation>
			</div>
		</>
	);
};
