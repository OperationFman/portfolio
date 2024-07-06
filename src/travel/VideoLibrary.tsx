import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/future/image";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TravelVideoMetaData } from "./types";
import { Grid } from "@mui/material";
import styles from "./videolibrary.module.scss";
import { hasRestrictionBypass, videoEnabled } from "./travelDataService";
import router from "next/router";

export const VideoLibrary = ({
	videoMetaData,
}: {
	videoMetaData: TravelVideoMetaData[];
}): JSX.Element => {
	return (
		<Grid container className={styles.gridContainer}>
			{videoMetaData.map((dataItem, videoIndex) => {
				return (
					<div
						style={{
							animation: `fadeIn ${videoIndex + 5}00ms ease-in-out`,
							opacity: 1,
						}}>
						<Grid item>
							<div
								className={styles.videoCardContainer}
								onClick={() => {
									if (videoEnabled(dataItem))
										router.push(`travel/${dataItem.link}`);
								}}>
								{dataItem.restricted && !hasRestrictionBypass() ? (
									<LockOutlinedIcon className={styles.videoButton} />
								) : (
									<PlayArrowTwoToneIcon
										className={`${styles.videoButton} ${styles.videoButtonBigger}`}
									/>
								)}
								<Image
									src={`/travel/posters/${dataItem.slug}.png`}
									alt={`${dataItem.title} poster`}
									height='300'
									width='200'
									className={styles.videoCardImage}
								/>
							</div>
						</Grid>
					</div>
				);
			})}
		</Grid>
	);
};
