import { SkillsGrouping } from "./SkillGrouping";
import { SkillsSubHeading } from "../sub-heading/SkillsSubHeading";
import { MetaData, SkillData } from "../types";

import styles from "./SkillsColumn.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

export const SkillsColumn = ({
	title,
	metaData,
	handleOpenModal,
}: {
	title: string;
	metaData: SkillData[];
	handleOpenModal: (payload: MetaData) => void;
}) => {
	return (
		<div className={styles.container}>
			<SkillsSubHeading title={title} />

			<div className={styles.dataContainer}>
				{metaData.map((grouping, index) => {
					return (
						<ScrollAnimation
							animateIn='fadeIn'
							animateOnce
							key={index}
							className={styles.skillsGroupingContainer}>
							<h2 className={styles.skillsHeading}>{grouping.title}</h2>
							<SkillsGrouping
								grouping={grouping}
								handleOpenModal={handleOpenModal}
							/>
						</ScrollAnimation>
					);
				})}
			</div>
		</div>
	);
};
