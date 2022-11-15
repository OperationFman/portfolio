import CommitIcon from "@mui/icons-material/Commit";
import { Typography } from "@mui/material";
import Image from "next/future/image";
import { useContext } from "react";
import { DarkMode } from "../../../../themes/GlobalTheme";
import styles from "../Experience.module.css";

export const WorkExpListItem = ({
	companyLogo,
	employerName,
	periodWithEmployer,
	employerLocation,
	employerExperiences,
	isLastElement = false,
}: {
	companyLogo: string;
	employerName: string;
	periodWithEmployer: string;
	employerLocation: string;
	employerExperiences: {
		title: string;
		period: string;
	}[];
	isLastElement?: boolean;
}) => {
	const darkMode = useContext(DarkMode);
	const selectedTheme = darkMode ? "#13181c" : "#FFFFFF";

	return (
		<>
			<CommitIcon
				fontSize='large'
				className={styles.lineIcon}
				style={{
					backgroundColor: selectedTheme,
				}}
			/>
			<div
				className={styles.itemContainer}
				style={{
					padding: isLastElement ? "0px 50px 0px" : "0px 50px 85px",
				}}>
				<Image
					src={`/homepage/companies/${companyLogo}.png`}
					alt='tw'
					width='200'
					height='50'
					className={styles.logo}
				/>

				<Typography variant='subtitle1'>{employerName}</Typography>

				<Typography variant='subtitle1' color='#949494'>
					{employerLocation}
				</Typography>
				<Typography
					variant='subtitle1'
					color='#949494'
					className={styles.periodText}>
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
								color='#949494'
								className={styles.rolePeriod}>
								{experienceItem.period}
							</Typography>
						</div>
					);
				})}
			</div>
		</>
	);
};
