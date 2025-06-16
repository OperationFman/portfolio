import { Box, Card, CardMedia, Typography } from "@mui/material";

import styles from "./assetcard.module.scss";
import { AssetCollectionMetaData } from "../../types";

export const AssetCard = ({
	collection,
}: {
	collection: AssetCollectionMetaData;
}): JSX.Element => {
	return (
		<Card key={collection.title} className={styles.assetCard}>
			<CardMedia
				component='img'
				image={`/images/thumbnails/${collection.thumbnail}.png`}
				alt={collection.title}
			/>
			<Box className={styles.assetCardTitleOverlay}>
				<Typography variant='h6' className={styles.assetCardTitle}>
					{collection.title}
				</Typography>
			</Box>
		</Card>
	);
};

export default AssetCard;
