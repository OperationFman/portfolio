import { Container, Typography } from "@mui/material";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { VolunteerListItem } from "./components/VolunteerListItem";
import { WorkExpListItem } from "./components/WorkExpListItem";
import styles from "./Experience.module.css";

export const Experience = () => {
	const { isMobile } = useDeviceDetect();

	return (
		<>
			<div className={styles.container}>
				<Container maxWidth='xs' className={styles.column}>
					<Typography
						variant='h3'
						align='center'
						style={{
							fontWeight: "bold",
							marginBottom: "50px",
							marginTop: "150px",
						}}>
						Volunteering
					</Typography>
					<VolunteerListItem
						logo={"badac"}
						title={
							"B.A.D.A.C Website Developer, Photographer and Newsletter Producer"
						}
						location={"Ballarat, Australia"}
						year={"2021"}
						isMobile={isMobile}
					/>
					<VolunteerListItem
						logo={"creative"}
						title={"Ballarat Creative City Production Manager"}
						location={"Ballarat, Australia"}
						year={"2021"}
						isMobile={isMobile}
					/>
					<VolunteerListItem
						logo={"outreach"}
						title={"Federation University: Regional Schools Outreach Exponent"}
						location={"Victoria, Australia"}
						year={"2018 - 2020"}
						isMobile={isMobile}
					/>
					<VolunteerListItem
						logo={"senate"}
						title={
							"Federation University Student Senate: Indigenous Representative"
						}
						location={"Ballarat, Australia"}
						year={"2019"}
						isMobile={isMobile}
					/>
					<VolunteerListItem
						logo={"challenges"}
						title={"Challenges Abroad Project Borneo: Media Literacy Trainer"}
						location={"East Kalimantan, Indonesia"}
						year={"2019"}
						isMobile={isMobile}
					/>
					<VolunteerListItem
						logo={"navy"}
						title={
							"Restoration of Rural Network Infrastructure Emergency Responder"
						}
						location={"Dhulikhel, Nepal"}
						year={"2018"}
						isMobile={isMobile}
					/>
					<VolunteerListItem
						logo={"colombo"}
						title={"New Colombo Plan: Post-Production Project Videographer"}
						location={"Shaoguan, China"}
						year={"2017"}
						isMobile={isMobile}
					/>
					<VolunteerListItem
						logo={"paxaus"}
						title={"PAX Aus Enforcer"}
						location={"Melbourne, Australia"}
						year={"2013 - 2018"}
						isMobile={isMobile}
						isLastElement={true}
					/>
				</Container>
				<Container maxWidth='xs' className={styles.column}>
					<Typography
						variant='h3'
						align='center'
						style={{
							fontWeight: "bold",
							marginBottom: "50px",
							marginTop: "150px",
						}}>
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
