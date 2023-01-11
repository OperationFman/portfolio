import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { SubHeading } from "../components/SubHeading";
import { VolunteerListItem } from "./components/VolunteerListItem";
import { WorkExpListItem } from "./components/WorkExpListItem";
import styles from "./Experience.module.css";

export const Experience = () => {
	const { isMobile } = useDeviceDetect();

	const [stickyColumnLock, setStickyColumnLock] = useState(0);

	useEffect(() => {
		const leftColumn = document.getElementById("right-column");
		const rightColumn = document.getElementById("left-column");

		if (!rightColumn || !leftColumn) {
			return;
		}

		const getSmallerColumnHeight = (leftCol: string, rightCol: string) => {
			const leftHeightValue = parseFloat(leftCol.replace("px", ""));
			const rightHeightValue = parseFloat(rightCol.replace("px", ""));
			return Math.min(leftHeightValue, rightHeightValue);
		};

		const smallerColumnHeight = getSmallerColumnHeight(
			window.getComputedStyle(leftColumn).getPropertyValue("height"),
			window.getComputedStyle(rightColumn).getPropertyValue("height"),
		);

		console.log({ smallerColumnHeight });
		setStickyColumnLock(smallerColumnHeight);
	}, []);

	return (
		<>
			<div className={styles.container}>
				<Container
					maxWidth='xs'
					className={styles.column}
					id='left-column'
					style={
						!isMobile
							? {
									position: "sticky",
									top: `calc(90vh - ${stickyColumnLock}px)`,
									height: "100%",
							  }
							: {}
					}>
					<SubHeading text={"Volunteering"} />
					<div className='mb-8' />
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
				<Container
					maxWidth='xs'
					className={styles.column}
					id='right-column'
					style={
						!isMobile
							? {
									position: "sticky",
									top: `calc(90vh - ${stickyColumnLock}px)`,
									height: "100%",
							  }
							: {}
					}>
					<SubHeading text={"Employment"} />
					<div className='mb-8' />
					<div className={styles.foo}>
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
					</div>
				</Container>
			</div>
		</>
	);
};
