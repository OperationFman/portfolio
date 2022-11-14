import { Container, Typography } from "@mui/material";
import { VolunteerListItem } from "./components/VolunteerListItem";
import { WorkExpListItem } from "./components/WorkExpListItem";
import styles from "./Experience.module.css";

export const Experience = () => {
	return (
		<>
			<div className={styles.container}>
				<Container maxWidth='xs' className={styles.column}>
					<Typography variant='h3' align='center' className={styles.heading}>
						Volunteering
					</Typography>
					<VolunteerListItem
						logo={"badac"}
						title={
							"BADAC: Website Developer, Photographer and Newsletter Producer"
						}
						location={"Ballarat, Australia"}
						year={"2021"}
					/>
					<VolunteerListItem
						logo={"federation"}
						title={"Federation University: Regional Secondary Schools Outreach"}
						location={"Victoria, Australia"}
						year={"2018 - 2020"}
					/>
					<VolunteerListItem
						logo={"challenges"}
						title={"Challenges Abroad Project Borneo: Media Literacy Outreach"}
						location={"East Kalimantan, Indonesia"}
						year={"2019"}
					/>
					<VolunteerListItem
						logo={"colombo"}
						title={"New Colombo Plan: Post-Production Project"}
						location={"Ballarat, Australia"}
						year={"2018"}
					/>
					<VolunteerListItem
						logo={"navy"}
						title={
							"Australian NAVY Emergency Responder for the Restoration of Network Infrastructure "
						}
						location={"Dhulikhel, Nepal"}
						year={"2018"}
					/>
					<VolunteerListItem
						logo={"paxaus"}
						title={"Penny Arcade Exhibition Enforcer "}
						location={"Melbourne, Australia"}
						year={"2013 - 2018"}
						isLastElement={true}
					/>
				</Container>
				<Container maxWidth='xs' className={styles.column}>
					<Typography variant='h3' align='center' className={styles.heading}>
						Employment
					</Typography>
					<WorkExpListItem
						companyLogo={"thoughtworks"}
						employerName={"Thoughtworks Australia"}
						periodWithEmployer={"2019 - Present"}
						employerLocation={"Melbourne, Australia"}
						employerExperiences={[
							{
								title: "Software Developer",
								period: "2022 - Present",
							},
							{
								title: "Graduate Software Developer",
								period: "2021 - 2022",
							},
							{
								title: "Intern Software Developer",
								period: "2019 - 2021",
							},
							{
								title: "Intern Business Analyst",
								period: "2019",
							},
						]}
					/>
					<WorkExpListItem
						companyLogo={"ibm"}
						employerName={"International Business Machines"}
						periodWithEmployer={"2017 - 2021"}
						employerLocation={"Ballarat, Australia"}
						employerExperiences={[
							{
								title: "Test Automation Engineer",
								period: "2019 - 2021",
							},
							{
								title: "Remote Hardware Technician",
								period: "2017 - 2019",
							},
						]}
					/>
					<WorkExpListItem
						companyLogo={"federation"}
						employerName={"Federation University"}
						periodWithEmployer={"2018 - 2020"}
						employerLocation={"Ballarat, Australia"}
						employerExperiences={[
							{
								title: "Mentor Team Leader",
								period: "2019",
							},
							{
								title: "Academic Support Tutor",
								period: "2018 - 2020",
							},
							{
								title: "Research Assistant",
								period: "2018",
							},
							{
								title: "Mentor Team Member",
								period: "2018 - 2019",
							},
						]}
						isLastElement={true}
					/>
				</Container>
			</div>
		</>
	);
};
