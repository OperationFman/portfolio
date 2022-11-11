import { Container, Typography } from "@mui/material";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { WorkExpListItem } from "./components/WorkExpListItem";
import { VolunteerListItem } from "./components/VolunteerListItem";

export const Experience = () => {
	const { isMobile } = useDeviceDetect();

	return (
		<>
			<Typography
				variant='h3'
				align='center'
				style={{
					marginTop: "150px",
					marginBottom: "50px",
					fontWeight: "bold",
				}}>
				Experience
			</Typography>
			<div
				style={{
					display: isMobile ? "" : "flex",
				}}>
				<Container maxWidth='xs' style={{ flex: 1 }}>
					<Typography
						variant='h4'
						align='center'
						style={{
							fontWeight: "bold",
							marginBottom: "50px",
						}}>
						Volunteering
					</Typography>
					<VolunteerListItem
						logo={"badac"}
						title={
							"BADAC Website Developer, Photographer and Newsletter Producer"
						}
						location={"Ballarat, Australia"}
						year={"2021"}
					/>
					<VolunteerListItem
						logo={"badac"}
						title={"Federation University: Regional Secondary Schools Outreach"}
						location={"Victoria, Australia"}
						year={"2018 - 2020"}
					/>
					<VolunteerListItem
						logo={"badac"}
						title={"Project Borneo: Media Literacy Outreach Challenge"}
						location={"East Kalimantan, Indonesia"}
						year={"2019"}
					/>
					<VolunteerListItem
						logo={"badac"}
						title={
							"Post-Production Project for the Australian New Colombo Plan"
						}
						location={"Ballarat, Australia"}
						year={"2018"}
					/>
					<VolunteerListItem
						logo={"badac"}
						title={
							"Australian Emergency Response: Restoration of Network Infrastructure "
						}
						location={"Dhulikhel, Nepal"}
						year={"2018"}
					/>
					<VolunteerListItem
						logo={"badac"}
						title={
							"Enforcer for the Penny Arcade Exhibition Australia (PAXAUS)"
						}
						location={"Melbourne, Australia"}
						year={"2013 - 2018"}
						isLastElement={true}
					/>
				</Container>
				<Container maxWidth='xs' style={{ flex: 1 }}>
					<Typography
						variant='h4'
						align='center'
						style={{
							fontWeight: "bold",
							marginBottom: "50px",
						}}>
						Employment
					</Typography>
					<WorkExpListItem
						companyLogo={"thoughtworks"}
						employerName={"Thoughtworks Australia"}
						periodWithEmployer={"2021 - Present"}
						employerLocation={"Melbourne, Australia"}
						employerExperiences={[
							{
								title: "Consultant Software Developer",
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
								period: "2019 - 2019",
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
								period: "2019 - 2019",
							},
							{
								title: "Academic Support Worker",
								period: "2018 - 2020",
							},
						]}
						isLastElement={true}
					/>
				</Container>
			</div>
		</>
	);
};
