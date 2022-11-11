import CommitIcon from "@mui/icons-material/Commit";
import { Typography } from "@mui/material";
import Image from "next/future/image";
import { useContext } from "react";
import { DarkMode } from "../../../../themes/GlobalTheme";

export const VolunteerItem = ({
	companyLogo,
	periodWithEmployer,
	employerLocation,
	employerExperiences,
	isLastElement = false,
}: {
	companyLogo: string;
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
				style={{
					position: "absolute",
					marginLeft: "-16px",
					marginTop: "5px",
					color: "#1565C0",
					backgroundColor: selectedTheme,
				}}
			/>
			<div
				style={{
					width: "100%",
					borderLeft: "3px solid #1565C0",
					padding: isLastElement ? "0px 50px 0px" : "0px 50px 85px",
				}}>
				<Image
					src={`/homepage/biography/companies/${companyLogo}.png`}
					alt='tw'
					width='200'
					height='50'
					style={{ height: 40, width: "auto", lineHeight: 0 }}
				/>

				<Typography variant='subtitle1'>{periodWithEmployer}</Typography>
				<Typography
					variant='subtitle1'
					color='#949494'
					style={{ marginBottom: "15px" }}>
					{employerLocation}
				</Typography>
				{employerExperiences.map((experienceItem, index) => {
					return (
						<div key={index}>
							<Typography
								variant='subtitle1'
								style={{ margin: "25px 0px 0px 25px" }}>
								{experienceItem.title}
							</Typography>
							<Typography
								variant='subtitle1'
								color='#949494'
								style={{ marginLeft: "25px" }}>
								{experienceItem.period}
							</Typography>
						</div>
					);
				})}
			</div>
		</>
	);
};
