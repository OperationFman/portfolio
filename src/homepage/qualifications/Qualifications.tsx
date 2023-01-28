import { Grid } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import { qualificationMetaData } from "../../datasources/HomepageMetaData";
import { SubHeading } from "../SubHeading";
import { QualificationCard } from "./QualificationCard";

export const Qualifications = () => {
	return (
		<>
			<SubHeading text={"Qualifications"} />

			<Grid container spacing={5} justifyContent='center'>
				{qualificationMetaData.map((item, index) => {
					return (
						<Grid item key={index}>
							<ScrollAnimation animateIn='fadeIn' delay={index * 100}>
								<QualificationCard
									logo={item.logo}
									title={item.title}
									location={item.location}
								/>
							</ScrollAnimation>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};
