import { splitStringAtFullStop } from "../../../utils/splitStringAtFullStop";
import { ConvictionsRow } from "../types";

import styles from "./Convictions.module.scss";

export const ConvictionGrouping = ({
	grouping,
}: {
	grouping: ConvictionsRow;
}) => {
	const blurbArray = splitStringAtFullStop(grouping.blurb);

	return (
		<div className={styles.grouping}>
			<h2 className={styles.title}>{grouping.title}</h2>
			{blurbArray.map((sentence, index) => {
				return (
					<div className={styles.sentence} key={index}>
						{sentence}
					</div>
				);
			})}
		</div>
	);
};
