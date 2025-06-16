import { NextPage } from "next";
import styles from "../../src/assets/index.module.scss";
import Head from "next/head";
import { PageContainer } from "../../src/global/PageContainer";
import { Footer } from "../../utils/footer/Footer";
import AssetSearchBar from "../../src/assets/components/Searchbar/Searchbar";
import { stockFootageMetaData } from "../../src/datasources/AssetMetaData";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AssetItem from "../../src/assets/components/AssetItem/AssetItem";
import AssetCollection from "../../src/assets/components/AssetCollection/AssetCollection";
import { getFeaturedItems } from "../../src/assets/components/getFeaturedItems";

const AssetsStore: NextPage = () => {
	const description = "Assets of any digital products I'm selling";

	const responsiveFeatured = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			partialVisibilityGutter: 50,
		},
		tablet: {
			breakpoint: { max: 1024, min: 600 },
			items: 2,
			partialVisibilityGutter: 80,
		},
		mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 1,
			partialVisibilityGutter: 100,
		},
	};

	return (
		<>
			<div className={styles.pageContainer}>
				<Head>
					<title>Assets Store - Franklin V Moon</title>
					<meta name='Assets' content={description} />
					<link rel='icon' href='/favicon-purple.ico' />
					<meta name='description' content={description} />
					<meta property='og:title' content='Franklin Von Moon Assets Store' />
					<meta property='og:description' content={description} />
					<meta
						property='og:url'
						content='https://www.franklin-v-moon.dev/assets-store'
					/>
					<meta property='og:type' content='website' />
				</Head>

				<PageContainer>
					<div className={styles.featuredContainer}>
						<h2>Featured</h2>
						<Box sx={{ position: "relative" }}>
							<Carousel responsive={responsiveFeatured} partialVisible>
								{getFeaturedItems(stockFootageMetaData).map((item, key) => (
									<AssetItem item={item} key={`Featured item ${key + 1}`} />
								))}
							</Carousel>
						</Box>
					</div>
					<AssetSearchBar />
					<h2>Stock Footage</h2>
					<div className={styles.assetCollectionsContainer}>
						<div className={styles.assetCollectionsGrid}>
							{stockFootageMetaData.map((item) => (
								<AssetCollection
									collection={item}
									key={`Asset collection of ${item.title}`}
								/>
							))}
						</div>
					</div>
				</PageContainer>
			</div>
			<Footer />
		</>
	);
};

export default AssetsStore;
