import { Box, Card, CardMedia, Typography } from "@mui/material";

import styles from "./assetitem.module.scss";
import { AssetItemMetaData } from "../../types";

export const AssetItem = ({
	item,
}: {
	item: AssetItemMetaData;
}): JSX.Element => {
	const priceDisplay = item.price === null ? "Free" : `$${item.price}`;

	return (
		<Card key={item.title} className={styles.assetCard}>
			<CardMedia
				component='img'
				height='160'
				image={`/assets/${item.hostedLink}/${item.thumbnail}`}
				alt={item.title}
			/>
			<Box className={styles.assetCardTitleOverlay}>
				<Typography variant='h6' className={styles.assetCardTitle}>
					{item.title}
				</Typography>
			</Box>
			<Box className={styles.priceTag}>
				<Typography variant='body2' sx={{ fontWeight: "bold" }}>
					{priceDisplay}
				</Typography>
			</Box>
		</Card>
	);
};

export default AssetItem;
