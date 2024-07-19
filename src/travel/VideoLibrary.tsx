import Image from "next/future/image";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TravelVideoMetaData } from "./types";
import { CardActionArea, Grid, LinearProgress } from "@mui/material";
import styles from "./videolibrary.module.scss";
import { hasRestrictionBypass, videoEnabled } from "./travelDataService";
import { useEffect, useState } from "react";

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
					<Grid item key={`Video card of ${dataItem.title}`}>
						<div
							style={{
								animation: `fadeIn ${videoIndex + 5}00ms ease-in-out`,
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
								{dataItem.restricted && !hasRestrictionBypass() ? (
									<LockOutlinedIcon
										sx={{ height: "3.125rem", width: "3.125rem" }} // 50px
										className={`${styles.videoButton} ${styles.lockButton}`}
									/>
								) : (
									<PlayArrowTwoToneIcon
										sx={{ height: "3.75rem", width: "3.75rem" }} // 60px
										className={styles.videoButton}
									/>
								)}
								<Image
									src={`/travel/posters/${dataItem.slug}.png`}
									alt={`${dataItem.title} poster`}
									height={isSmallScreen ? 232 : 300}
									width={isSmallScreen ? 148 : 200}
									className={styles.videoCardImage}
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
