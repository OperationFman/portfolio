import { Typography } from "@mui/material";
import Image from "next/future/image";

export const WorkExpItem = ({
	companyLogo,
	periodWithEmployer,
	employerLocation,
	employerExperiences,
}: {
	companyLogo: string;
	periodWithEmployer: string;
	employerLocation: string;
	employerExperiences: {
		title: string;
		period: string;
	}[];
}) => {
	return (
		<div
			style={{
				width: "100%",
				marginBottom: "50px",
				borderLeft: "3px solid #1565C0",
				padding: "0px 25px 25px",
			}}>
			<Image
				src={`/homepage/biography/companies/${companyLogo}.png`}
				alt='tw'
				width='200'
				height='50'
				style={{ height: 50, width: "auto", lineHeight: 0 }}
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
	);
};
