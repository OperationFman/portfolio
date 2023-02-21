import { Button, Card, Grid } from "@mui/material";
import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { languagesMetaData } from "../../datasources/SkillsMetaData";
import { MetaData } from "../types";
import { LanguagesColumn } from "./LanguagesColumn";

import styles from "./Languages.module.scss";

export const Languages = ({
	handleOpenModal,
}: {
	handleOpenModal: (payload: MetaData) => void;
}) => {
	const [expandLanguages, setExpandLanguages] = useState(false);

	return (
		<div className={styles.container}>
			<h2 className={styles.sectionTitle}>Languages</h2>

			<Card>
				<div className={styles.content}>
					<Grid container className={styles.columnContainer}>
						{languagesMetaData.map((columnData, index) => {
							return (
								<Grid item key={index}>
									<ScrollAnimation
										animateIn='fadeIn'
										animateOnce
										delay={index * 100}>
										<LanguagesColumn
											columnData={columnData}
											isExpanded={expandLanguages}
											handleOpenModal={handleOpenModal}
										/>
									</ScrollAnimation>
								</Grid>
							);
						})}
					</Grid>
				</div>

				<div className={styles.expandableContent}>
					<Button
						variant='text'
						color='brightGrey'
						className={styles.expandButton}
						onClick={() => {
							setExpandLanguages(!expandLanguages);
						}}>
						{expandLanguages ? "Less" : "More"}
					</Button>
				</div>
			</Card>
		</div>
	);
};
