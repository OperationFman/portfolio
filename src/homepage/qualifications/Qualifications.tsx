import { Grid } from "@mui/material";
import { qualificationMetaData } from "../../datasources/HomepageMetaData";
import { SubHeading } from "../components/SubHeading";
import { QualificationCard } from "./QualificationCard";

export const Qualifications = () => {
	return (
		<>
			<SubHeading text={"Qualifications"} />

			<Grid container spacing={5} justifyContent='center'>
				{qualificationMetaData.map((item, index) => {
					return (
						<Grid item key={index}>
							<QualificationCard
								logo={item.logo}
								title={item.title}
								location={item.location}
							/>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};
