import React from "react";

import styles from "./SubHeading.module.scss";

export const SubHeading = ({ text }: { text: string }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				{text}
				<div className={styles.lineContainer}>
					<div className={styles.line} />
				</div>
			</h1>
		</div>
	);
};
