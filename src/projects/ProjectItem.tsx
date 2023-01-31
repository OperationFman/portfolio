import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { ExternalLinkButtons } from "./ExternalLinkButtons";
import { ProjectMetaData } from "./types";

import styles from "./ProjectItem.module.scss";
import { setDark } from "../../utils/configureCss/configureCss";

export const ProjectItem = ({
	metaData,
}: {
	metaData: ProjectMetaData;
}): JSX.Element => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{metaData.title}</h1>
			<ExternalLinkButtons metaData={metaData} />
			<Carousel
				wrapAround={true}
				renderBottomCenterControls={null}
				renderCenterLeftControls={({ previousSlide }) => (
					<Tooltip TransitionComponent={Zoom} title='Previous Slide'>
						<Button
							onClick={previousSlide}
							className={setDark(styles, "navButton")}>
							<KeyboardArrowLeftIcon />
						</Button>
					</Tooltip>
				)}
				renderCenterRightControls={({ nextSlide }) => (
					<Tooltip TransitionComponent={Zoom} title='Next Slide'>
						<Button
							onClick={nextSlide}
							className={setDark(styles, "navButton")}>
							<KeyboardArrowRightIcon />
						</Button>
					</Tooltip>
				)}>
				{metaData.images.map((item, index) => (
					<div className={styles.image} key={index}>
						<Image
							src={item}
							width={1280}
							height={720}
							alt={`Picture of my ${metaData.title} project`}
						/>
					</div>
				))}
			</Carousel>

			<div className={styles.subTitle}>{metaData.subTitle}</div>
		</div>
	);
};
