import { MetaData, SkillData } from "../types";

import styles from "./SkillsGrouping.module.scss";

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
					<div
						className={styles.skillItem}
						onClick={() => handleOpenModal(modalPayload)}
						key={index}>
						{item.title}
					</div>
				);
			})}
		</div>
	);
};
