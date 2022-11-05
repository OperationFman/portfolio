import { Grid, Typography } from "@mui/material";
import { QualificationCard } from "./QualificationCard";

export const Qualifications = () => {
	return (
		<>
			<Typography
				variant='h3'
				align='center'
				style={{
					marginTop: "150px",
					marginBottom: "25px",
					fontWeight: "bold",
				}}>
				Qualifications
			</Typography>

			<Grid container spacing={7} justifyContent='center'>
				<Grid item>
					<QualificationCard
						logo={"degree"}
						title={"Masters of Information Systems and Finance"}
						location={"Deakin University"}
						lowerLocation={true}
					/>
				</Grid>
				<Grid item>
					<QualificationCard
						logo={"degree"}
						title={"Bachelors of Information Technology Professional Practice"}
						location={"Federation University"}
					/>
				</Grid>
				<Grid item>
					<QualificationCard
						logo={"certificate"}
						title={"Certificate of Communication Information & Design"}
						location={"theGordon"}
					/>
				</Grid>
				<Grid item>
					<QualificationCard
						logo={"certificate"}
						title={"Certificate of Web Scraping with Python"}
						location={"LeWagon"}
						lowerLocation={true}
					/>
				</Grid>
				<Grid item>
					<QualificationCard
						logo={"certificate"}
						title={"Certificate of Backend Development for the Metaverse"}
						location={"Decentraland, Gitex"}
					/>
				</Grid>
				<Grid item>
					<QualificationCard
						logo={"language"}
						title={"Certificate of Teaching English as a Second Language"}
						location={"Teflen College"}
					/>
				</Grid>
			</Grid>
		</>
	);
};
