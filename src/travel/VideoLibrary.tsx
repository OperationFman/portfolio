import Image from "next/future/image";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TravelVideoMetaData } from "./types";
import { CardActionArea, Grid } from "@mui/material";
import styles from "./videolibrary.module.scss";
import { hasRestrictionBypass, videoEnabled } from "./travelDataService";
import router from "next/router";
import { useEffect, useState } from "react";

export const VideoLibrary = ({
	videoMetaData,
}: {
	videoMetaData: TravelVideoMetaData[];
}): JSX.Element => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth < 900);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return (
		<Grid container>
			{videoMetaData
				.map((dataItem, videoIndex) => {
					return (
						<div
							style={{
								animation: `fadeIn ${videoIndex + 5}00ms ease-in-out`,
								opacity: 1,
							}}
							key={`Video card of ${dataItem.title}`}>
							<Grid item style={{ margin: "10px" }}>
								<CardActionArea
									className={styles.videoCardContainer}
									onClick={() => {
										if (videoEnabled(dataItem)) {
											router.push(`/travel/${dataItem.link}`);
										}
									}}>
									{dataItem.restricted && !hasRestrictionBypass() ? (
										<LockOutlinedIcon
											style={{ height: "50px", width: "50px" }}
											className={`${styles.videoButton} ${styles.lockButton}`}
										/>
									) : (
										<PlayArrowTwoToneIcon
											style={{ height: "60px", width: "60px" }}
											className={styles.videoButton}
										/>
									)}
									<Image
										src={`/travel/posters/${dataItem.slug}.png`}
										alt={`${dataItem.title} poster`}
										height={isSmallScreen ? "255" : "300"}
										width={isSmallScreen ? "170" : "200"}
										className={styles.videoCardImage}
									/>
								</CardActionArea>
							</Grid>
						</div>
					);
				})
				.reverse()}
		</Grid>
	);
};
