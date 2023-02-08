import { setDark } from "../../../utils/configureCss/configureCss";
import { MetaData, SkillData } from "../types";

import styles from "./SkillGrouping.module.scss";

export const SkillsGrouping = ({
	grouping,
	handleOpenModal,
}: {
	grouping: SkillData;
	handleOpenModal: (payload: MetaData) => void;
}) => {
	return (
		<div className={styles.container}>
			{grouping.data.map((item, index) => {
				const { title, knowledge, proficiency, description } = item;

				const modalPayload: MetaData = {
					title,
					knowledge,
					proficiency,
					description,
				};
				return (
					<button
						className={setDark(styles, "skillItem")}
						onClick={() => handleOpenModal(modalPayload)}
						key={index}>
						{item.title}
					</button>
				);
			})}
		</div>
	);
};
