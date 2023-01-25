import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import {
	volunteeringMetaData,
	workExperienceMetaData,
} from "../../datasources/HomepageMetaData";
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

		setStickyColumnLock(smallerColumnHeight);
	}, []);

	const stickyColumn: any = !isMobile
		? {
				position: "sticky",
				top: `calc(100vh - ${stickyColumnLock}px)`,
				height: "100%",
		  }
		: {};

	return (
		<>
			<div className={styles.container}>
				<Container
					maxWidth='xs'
					className={styles.column}
					id='left-column'
					style={stickyColumn}>
					<SubHeading text={"Volunteering"} />
					<div className='mb-8' />

					{volunteeringMetaData.map((item, index) => {
						return (
							<VolunteerListItem
								logo={item.logo}
								title={item.title}
								location={item.location}
								year={item.year}
								isMobile={isMobile}
								key={index}
							/>
						);
					})}
				</Container>
				<Container
					maxWidth='xs'
					className={styles.column}
					id='right-column'
					style={stickyColumn}>
					<SubHeading text={"Employment"} />
					<div className='mb-8' />

					<div>
						{workExperienceMetaData.map((item, index) => {
							return (
								<WorkExpListItem
									companyLogo={item.logo}
									employerName={item.employer}
									periodWithEmployer={item.period}
									employerLocation={item.location}
									employerExperiences={item.experiences}
									key={index}
								/>
							);
						})}
					</div>
				</Container>
			</div>
		</>
	);
};
