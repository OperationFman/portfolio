import { Box, Card, CardMedia, Typography } from "@mui/material";

import styles from "./assetcollection.module.scss";
import { AssetCollectionMetaData } from "../../types";

export const AssetCollection = ({
	collection,
}: {
	collection: AssetCollectionMetaData;
}): JSX.Element => {
	return (
		<Card key={collection.title} className={styles.assetCard}>
			<CardMedia
				component='img'
				height='160'
				image={`/assets/${collection.hostedLink}/${collection.thumbnail}`}
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

export default AssetCollection;
