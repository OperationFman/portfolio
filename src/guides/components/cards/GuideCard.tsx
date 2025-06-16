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
import { GuideMetaData } from "../../types";
import { subTitleShortener, titleShortener } from "./textFormatter";

import styles from "./GuideCard.module.scss";

export const GuideCard = ({
	cardData,
}: {
	cardData: GuideMetaData;
}): JSX.Element => {
	const router = useRouter();

	const [loading, setLoading] = useState(false);

	return (
		<div
			className={styles.container}
			onClick={() => {
				setLoading(true);
				router.push(`guides/${cardData.link}`);
			}}>
			<Card className={styles.card}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='180'
						alt={`${cardData.title} thumbnail`}
						image={cardData.thumbnail}
					/>
					<CardContent>
						<div className={styles.cardContent}>
							<div className={setDark(styles, "topicContainer")}>
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
						{loading && <LinearProgress color='success' />}
					</div>
				</CardActionArea>
			</Card>
		</div>
	);
};
