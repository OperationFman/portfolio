import { Container, Typography } from "@mui/material";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { VolunteerItem } from "./components/VolunteerItem";
import { WorkExpItem } from "./components/WorkExpItem";

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
					<WorkExpItem
						companyLogo={"thoughtworks"}
						periodWithEmployer={"Aug 2021 - Present"}
						employerLocation={"Melbourne, Australia"}
						employerExperiences={[
							{
								title: "Consultant Software Developer",
								period: "Aug 2022 - Present",
							},
							{
								title: "Graduate Software Developer",
								period: "Aug 2021 - Aug 2022",
							},
							{
								title: "Intern Software Developer",
								period: "Nov 2019 - Aug 2021",
							},
							{
								title: "Intern Business Analyst",
								period: "Jun 2019 - Jul 2019",
							},
						]}
					/>
					<WorkExpItem
						companyLogo={"badac"}
						periodWithEmployer={"Jan 2021 - Aug 2021"}
						employerLocation={"Ballarat, Australia"}
						employerExperiences={[
							{
								title: "Website Developer",
								period: "Mar 2021 - Aug 2021",
							},
							{
								title: "Digital Media Designer",
								period: "Jan 2021 - Aug 2021",
							},
						]}
					/>
					<WorkExpItem
						companyLogo={"ibm"}
						periodWithEmployer={"Apr 2017 - Jan 2021"}
						employerLocation={"Ballarat, Australia"}
						employerExperiences={[
							{
								title: "Test Automation Engineer",
								period: "Feb 2019 - Jan 2021",
							},
							{
								title: "Remote Hardware Technician",
								period: "Apr 2017 - Feb 2019",
							},
						]}
					/>
					<WorkExpItem
						companyLogo={"federation"}
						periodWithEmployer={"May 2018 - Nov 2020"}
						employerLocation={"Ballarat, Australia"}
						employerExperiences={[
							{
								title:
									"Indigenous and Torres Strait Islander Senate Representative",
								period: "Apr 2019 - Nov 2020",
							},
							{
								title: "Mentor Team Leader",
								period: "Jan 2019 - Apr 2019",
							},
							{
								title: "Academic Support Worker",
								period: "May 2018 - Nov 2020",
							},
						]}
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
					<VolunteerItem
						companyLogo={"thoughtworks"}
						periodWithEmployer={"Aug 2021 - Present"}
						employerLocation={"Melbourne, Australia"}
						employerExperiences={[
							{
								title: "Consultant Software Developer",
								period: "Aug 2022 - Present",
							},
							{
								title: "Graduate Software Developer",
								period: "Aug 2021 - Aug 2022",
							},
							{
								title: "Intern Software Developer",
								period: "Nov 2019 - Aug 2021",
							},
							{
								title: "Intern Business Analyst",
								period: "Jun 2019 - Jul 2019",
							},
						]}
					/>
					<VolunteerItem
						companyLogo={"badac"}
						periodWithEmployer={"Jan 2021 - Aug 2021"}
						employerLocation={"Ballarat, Australia"}
						employerExperiences={[
							{
								title: "Website Developer",
								period: "Mar 2021 - Aug 2021",
							},
							{
								title: "Digital Media Designer",
								period: "Jan 2021 - Aug 2021",
							},
						]}
					/>
					<VolunteerItem
						companyLogo={"ibm"}
						periodWithEmployer={"Apr 2017 - Jan 2021"}
						employerLocation={"Ballarat, Australia"}
						employerExperiences={[
							{
								title: "Test Automation Engineer",
								period: "Feb 2019 - Jan 2021",
							},
							{
								title: "Remote Hardware Technician",
								period: "Apr 2017 - Feb 2019",
							},
						]}
					/>
					<VolunteerItem
						companyLogo={"federation"}
						periodWithEmployer={"May 2018 - Nov 2020"}
						employerLocation={"Ballarat, Australia"}
						employerExperiences={[
							{
								title:
									"Indigenous and Torres Strait Islander Senate Representative",
								period: "Apr 2019 - Nov 2020",
							},
							{
								title: "Mentor Team Leader",
								period: "Jan 2019 - Apr 2019",
							},
							{
								title: "Academic Support Worker",
								period: "May 2018 - Nov 2020",
							},
						]}
						isLastElement={true}
					/>
				</Container>
			</div>
		</>
	);
};
