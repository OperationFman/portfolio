import { ColumnData, MetaData } from "../types";
import { LanguagesRow } from "./LanguagesRow";

import styles from "./LanguagesColumn.module.scss";

type LanguagesColumnProps = {
	columnData: ColumnData;
	isExpanded: boolean;
	handleOpenModal: (payload: MetaData) => void;
};

export const LanguagesColumn = (props: LanguagesColumnProps): JSX.Element => {
	const { columnData, isExpanded, handleOpenModal } = props;
	const { title, data, knowledge, proficiency, description } = columnData;

	const TOTAL_PRIME_ITEMS = 6;
	const primeTech = data.slice(0, TOTAL_PRIME_ITEMS);
	const extraTech = data.slice(TOTAL_PRIME_ITEMS, data.length);

	const modalPayload: MetaData = {
		title,
		knowledge,
		proficiency,
		description,
	};

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.columnWrapper}>
					<h2
						className={styles.title}
						onClick={() => handleOpenModal(modalPayload)}>
						{title}
					</h2>
					<div className={styles.columnContainer}>
						<div className={styles.column}>
							{primeTech.map((item, index) => {
								return (
									<LanguagesRow
										item={item}
										handleOpenModal={handleOpenModal}
										key={index}
									/>
								);
							})}
						</div>

						<div
							className={`${styles.column} ${styles.expandedColumnOnMobile} ${
								isExpanded && styles.expandPressed
							}`}>
							{extraTech.map((item, index) => {
								return (
									<LanguagesRow
										item={item}
										handleOpenModal={handleOpenModal}
										key={index}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
