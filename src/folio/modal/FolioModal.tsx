import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { DialogTitle, Divider, IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { splitStringAtFullStop } from "../../../utils/split-string/splitStringAtFullStop";
import { MetaData } from "../types";

import styles from "./FolioModal.module.scss";

export const FolioModal = (
	setShowModal: Dispatch<SetStateAction<boolean>>,
	payload: MetaData | undefined,
) => {
	if (
		!payload ||
		!payload?.title ||
		!payload?.knowledge ||
		!payload?.proficiency ||
		!payload?.description
	) {
		return;
	}

	const { title: heading, knowledge, proficiency, description } = payload;

	const knowledgeSentences = splitStringAtFullStop(knowledge);
	const descriptionSentences = splitStringAtFullStop(description);

	return (
		<div className={styles.container}>
			<DialogTitle>
				<div className={styles.titleContainer}>
					<h3 className={styles.title}>{heading}</h3>
					<IconButton aria-label='Close' onClick={() => setShowModal(false)}>
						<CloseRoundedIcon color='disabled' />
					</IconButton>
				</div>
			</DialogTitle>
			<div className={styles.titleDivider} />
			<div className={styles.content}>
				{knowledgeSentences.map((sentence, index) => {
					return <p key={index}>{sentence}</p>;
				})}

				<Divider />
				<div className={styles.knowledgeContainer}>
					<h3 className={styles.knowledgeTitle}>Knowledge:</h3>
					<h3 className={styles.proficiency}>{proficiency}</h3>
				</div>
				<Divider />
				{descriptionSentences.map((sentence, index) => {
					return <p key={index}>{sentence}</p>;
				})}
			</div>
		</div>
	);
};
