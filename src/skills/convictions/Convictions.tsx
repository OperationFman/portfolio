import { ConvictionGrouping } from "./ConvictionGrouping";
import { SkillsSubHeading } from "../sub-heading/SkillsSubHeading";
import { ConvictionsRow } from "../types";

import styles from "./Convictions.module.scss";

export const Convictions = ({
	title,
	metaData,
}: {
	title: string;
	metaData: ConvictionsRow[];
}) => {
	return (
		<div className={styles.container}>
			<SkillsSubHeading title={title} />
			<div className={styles.dataContainer}>
				{metaData.map((grouping, index) => {
					return <ConvictionGrouping grouping={grouping} key={index} />;
				})}
			</div>
		</div>
	);
};
