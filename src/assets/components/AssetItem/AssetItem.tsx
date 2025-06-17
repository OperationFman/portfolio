import {
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Typography,
} from "@mui/material";

import styles from "./assetitem.module.scss";
import { AssetItemMetaData } from "../../types";

export const AssetItem = ({
	item,
}: {
	item: AssetItemMetaData;
}): JSX.Element => {
	const priceDisplay = item.price === null ? "Free" : `$${item.price}`;

	console.log(item);

	return (
		<Card key={item.title} className={styles.assetCard}>
			<CardActionArea
				onClick={() => console.log("Asset item clicked:", item.title)}
				aria-label={`View details for ${item.title}`}>
				<CardMedia
					component='img'
					height='160'
					image={`/assets/${item.thumbnail}`}
					alt={item.title}
				/>
				<Box className={styles.assetCardTitleOverlay}>
					<Typography variant='h6' className={styles.assetCardTitle}>
						{item.title}
					</Typography>
				</Box>
				<Box className={styles.priceTag}>
					<Typography variant='body2' sx={{ fontWeight: 500 }}>
						{priceDisplay}
					</Typography>
				</Box>
			</CardActionArea>
		</Card>
	);
};

export default AssetItem;
