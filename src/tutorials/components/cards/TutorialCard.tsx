import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	LinearProgress,
	Tooltip,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { setDark } from "../../../../utils/configureCss/configureCss";
import { TutorialMetaData } from "../../types";
import { subTitleShortener, titleShortener } from "./textFormatter";

import styles from "./TutorialCard.module.scss";

export const TutorialCard = ({
	cardData,
}: {
	cardData: TutorialMetaData;
}): JSX.Element => {
	const router = useRouter();

	const [loading, setLoading] = useState(false);

	return (
		<div
			className={styles.container}
			onClick={() => {
				setLoading(true);
				router.push(`tutorials/${cardData.link}`);
			}}>
			<Card className={styles.card}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='180'
						alt={cardData.title}
						image={cardData.thumbnail}
					/>
					<CardContent>
						<div className={styles.cardContent}>
							<div className={setDark(styles, "topic")}>
								<div className={styles.topicText}>{cardData.topic}</div>
							</div>
							<div className={styles.title}>
								{titleShortener(cardData.title)}
							</div>
							<Tooltip title={cardData.subTitle} followCursor>
								<div className={styles.subtitle}>
									{subTitleShortener(cardData.subTitle)}
								</div>
							</Tooltip>
						</div>
					</CardContent>
					<div className={styles.loadingContainer}>
						{loading && <LinearProgress color='secondary' />}
					</div>
				</CardActionArea>
			</Card>
		</div>
	);
};
