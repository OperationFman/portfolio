import CommitIcon from "@mui/icons-material/Commit";
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
					alt={`${companyLogo} logo`}
					width='160'
					height='40'
					className={styles.logo}
				/>

				<ScrollAnimation animateIn='fadeIn' animateOnce delay={index * 100}>
					<div>{employerName}</div>

					<div className={styles.location}>{employerLocation}</div>
					<div className={`${styles.periodText} ${color.brightGrey}`}>
						{periodWithEmployer}
					</div>
					{employerExperiences.map((experienceItem, index) => {
						return (
							<div key={index} className={styles.roles}>
								<div className={styles.roleTitle}>{experienceItem.title}</div>
								<div className={`${styles.rolePeriod}  ${color.brightGrey}`}>
									{experienceItem.period}
								</div>
							</div>
						);
					})}
				</ScrollAnimation>
			</div>
		</>
	);
};
