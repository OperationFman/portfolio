import { Typography } from "@mui/material";
import React from "react";
import styles from "./SubHeading.module.css";

export const SubHeading = ({ text }: { text: string }) => {
	const maxTextLength = 20;

	const textOversized = () => {
		return text.length > maxTextLength;
	};
	return (
		<div className={styles.container}>
			<Typography variant='h3' align='center' className={styles.typography}>
				{text}
				<div className={styles.lineContainer}>
					<div className={styles.line}></div>
				</div>
			</Typography>
		</div>
	);
};
