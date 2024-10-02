import { ConvictionGrouping } from "./ConvictionGrouping";
import { FolioSubHeading } from "../folio-heading/FolioSubHeading";
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
			<FolioSubHeading title={title} />
			<div className={styles.dataContainer}>
				{metaData.map((grouping, index) => {
					return (
						<ConvictionGrouping grouping={grouping} key={index} index={index} />
					);
				})}
			</div>
		</div>
	);
};
