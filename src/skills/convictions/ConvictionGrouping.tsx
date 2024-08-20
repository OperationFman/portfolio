import { setDark } from "../../../utils/configureCss/configureCss";
import { splitStringAtFullStop } from "../../../utils/split-string/splitStringAtFullStop";
import { ConvictionsRow } from "../types";

import styles from "./Convictions.module.scss";

export const ConvictionGrouping = ({
	grouping,
	index,
}: {
	grouping: ConvictionsRow;
	index: number;
}) => {
	const blurbArray = splitStringAtFullStop(grouping.blurb);

	return (
		<div className={styles.grouping}>
			<h2 className={styles.title}>{grouping.title}</h2>
			{blurbArray.map((sentence, index) => {
				return (
					<div className={setDark(styles, "sentence")} key={index}>
						{sentence}
					</div>
				);
			})}
		</div>
	);
};
