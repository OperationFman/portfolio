import React from "react";

import styles from "./SubHeading.module.scss";

export const SubHeading = ({ text }: { text: string }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				{text}
				<div className={styles.lineContainer}>
					<div className={styles.line} />
				</div>
			</h2>
		</div>
	);
};
