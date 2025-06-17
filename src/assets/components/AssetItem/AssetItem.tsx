import {
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Typography,
} from "@mui/material";

import styles from "./assetitem.module.scss";
import { AssetItemMetaData } from "../../types";
import { useRef } from "react";
import Script from "next/script";

export const AssetItem = ({
	item,
}: {
	item: AssetItemMetaData;
}): JSX.Element => {
	const priceDisplay = item.price === null ? "Free" : `$${item.price}`;
	const gumroadButtonRef = useRef<HTMLAnchorElement>(null);

	const handleCardClick = () => {
		if (gumroadButtonRef.current) {
			gumroadButtonRef.current.click();
		}
	};

	return (
		<Card key={item.title} className={styles.assetCard}>
			<Script src='https://gumroad.com/js/gumroad.js' strategy='lazyOnload' />

			<CardActionArea
				onClick={handleCardClick}
				aria-label={`View details for ${item.title}`}>
				<CardMedia
					component='img'
					height='160'
					image={`/assets/${item.thumbnail}`}
					style={{
						borderRadius: "5px",
						boxShadow: item.isPack
							? "-1px -1px 1px 1px rgb(164, 164, 164), -4px -4px 1px 1px rgb(92, 92, 92)"
							: "none",
					}}
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
				{item.length && (
					<Box className={styles.videoLengthTag}>
						<Typography
							variant='body2'
							sx={{ fontWeight: "bold", fontSize: "70%" }}>
							{item.length}s
						</Typography>
					</Box>
				)}
			</CardActionArea>

			<a
				ref={gumroadButtonRef}
				className='gumroad-button'
				href={item.link}
				style={{ display: "none" }}></a>
		</Card>
	);
};

export default AssetItem;
