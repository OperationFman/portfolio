import Image from "next/image";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VideocamOffRoundedIcon from "@mui/icons-material/VideocamOffRounded";
import { TravelVideoMetaData } from "./types";
import { CardActionArea, Grid, LinearProgress } from "@mui/material";
import styles from "./videolibrary.module.scss";
import { hasRestrictionBypass, videoEnabled } from "./travelDataService";
import { useEffect, useState } from "react";
import router from "next/router";

export const VideoLibrary = ({
	videoMetaData,
}: {
	videoMetaData: TravelVideoMetaData[];
}): JSX.Element => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [loading, setLoading] = useState({ state: false, index: -1 });

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth < 500);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	const posterIcon = (dataItem: TravelVideoMetaData) => {
		if (dataItem.restricted && !hasRestrictionBypass()) {
			return (
				<LockOutlinedIcon
					sx={{ height: "3.125rem", width: "3.125rem" }}
					className={`${styles.videoButton} ${styles.lockButton}`}
				/>
			);
		}

		return dataItem.backupLink ? (
			<PlayArrowTwoToneIcon
				sx={{ height: "3.75rem", width: "3.75rem" }}
				className={styles.videoButton}
			/>
		) : (
			<VideocamOffRoundedIcon
				sx={{ height: "2.75rem", width: "2.75rem" }}
				className={styles.videoButton}
			/>
		);
	};

	return (
		<Grid
			container
			spacing={1.25}
			style={{
				margin: 0,
				padding: "0 40px 0 20px",
				justifyContent: isSmallScreen ? "space-between" : "",
			}}>
			{videoMetaData
				.map((dataItem, videoIndex) => (
					<Grid
						item
						key={`Video card of ${dataItem.title}`}
						xs={isSmallScreen && 6}>
						<div
							style={{
								animation: `fadeIn ${videoIndex}000ms ease-in-out`,
								opacity: 1,
							}}>
							<CardActionArea
								className={styles.videoCardContainer}
								onClick={() => {
									if (videoEnabled(dataItem)) {
										setLoading({ state: true, index: videoIndex });
										router.push(`/travel/${dataItem.link}`);
									}
								}}>
								{posterIcon(dataItem)}
								{dataItem.newestVideo && (
									<h5 className={styles.newestVideo}>LATEST VIDEO</h5>
								)}
								<Image
									src={`/travel/posters/${dataItem.hostedLink}.png`}
									alt={`${dataItem.title} poster`}
									className={styles.videoCardImage}
									height={300}
									width={200}
									layout='responsive'
								/>
								<div className={styles.loadingContainer}>
									{loading.state && loading.index === videoIndex && (
										<LinearProgress color='inherit' />
									)}
								</div>
							</CardActionArea>
						</div>
					</Grid>
				))
				.reverse()}
		</Grid>
	);
};
