import { Container, Grid, Typography } from "@mui/material";
import Image from "next/future/image";
import ShowIf from "../../../utils/ShowIf";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { BioDescription } from "./BioDescription";
import { ForYouCard } from "./components/ForYouCard";
import { WorkExpItem } from "./components/WorkExpItem";

export const Biography = () => {
	const { isMobile } = useDeviceDetect();

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
				}}>
				<BioDescription />

				<ShowIf condition={!isMobile}>
					<div style={{ width: "40%", alignItems: "center" }}>
						<Image
							src='/homepage/placeholder.png'
							width='480'
							height='300'
							alt='Head shot'
						/>
					</div>
				</ShowIf>
			</div>
			<Typography
				variant='h3'
				align='center'
				style={{
					marginTop: "150px",
					marginBottom: "25px",
					fontWeight: "bold",
				}}>
				What Can I Do For You?
			</Typography>

			<Grid container spacing={5} justifyContent='center'>
				<Grid item>
					<ForYouCard
						isMobile={isMobile}
						logo={"code"}
						title={"Programming"}
						paragraph1={
							"Champion best practices like TDD, SOLID principles, Object Oriented design and Pair Programming."
						}
						paragraph2={"See Skills for more."}
					/>
				</Grid>
				<Grid item>
					<ForYouCard
						isMobile={isMobile}
						logo={"design"}
						title={"Design"}
						paragraph1={"Crafting user interfaces, wireframes, and prototypes."}
						paragraph2={
							"Researching user needs and following design principles."
						}
					/>
				</Grid>
				<Grid item>
					<ForYouCard
						isMobile={isMobile}
						logo={"postproduction"}
						title={"Post-Production"}
						paragraph1={
							"Producing, editing, color correcting, and rendering motion pictures."
						}
						paragraph2={
							"Skills include VFX, animation and game engine production."
						}
						paragraphGap={false}
					/>
				</Grid>
				<Grid item>
					<ForYouCard
						isMobile={isMobile}
						logo={"volunteer"}
						title={"Volunteering"}
						paragraph1={
							"Sharing knowledge and resources with those eager to learn but who do not have the means to pursue careers in technology."
						}
						paragraph2={"This is my life pursuit."}
						paragraphGap={false}
					/>
				</Grid>
			</Grid>

			<Typography
				variant='h3'
				align='center'
				style={{
					marginTop: "150px",
					marginBottom: "50px",
					fontWeight: "bold",
				}}>
				Work Experience
			</Typography>

			<Container maxWidth='xs'>
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

			<div style={{ height: "100vh" }} />
		</>
	);
};
