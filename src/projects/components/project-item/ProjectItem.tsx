import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "nuka-carousel";
import useDeviceDetect from "../../../../utils/useDeviceDetect";
import { ProjectMetaData } from "../../types";
import { ExternalLinkButtons } from "./ExternalLinkButtons";
import Zoom from "@mui/material/Zoom";

type ProjectItemProps = {
	metaData: ProjectMetaData;
};

export const ProjectItem = (props: ProjectItemProps): JSX.Element => {
	const { metaData } = props;
	const { isMobile } = useDeviceDetect();

	return (
		<div
			style={
				isMobile
					? {
							padding: "0px 0px 100px 0px",
					  }
					: {
							padding: "0px 100px 100px 100px",
					  }
			}>
			<h1
				style={{
					width: "fit-content",
					padding: "0px 100px 5px 0px",
					borderBottom: "2px solid #f44336",
					margin: "5px",
				}}>
				{metaData.title}
			</h1>
			<ExternalLinkButtons metaData={metaData} />
			<Carousel
				wrapAround={true}
				renderBottomCenterControls={null}
				renderCenterLeftControls={({ previousSlide }) => (
					<Tooltip TransitionComponent={Zoom} title='Previous Slide'>
						<Button
							color='defaultText'
							onClick={previousSlide}
							style={{ borderRadius: "50px" }}>
							<KeyboardArrowLeftIcon />
						</Button>
					</Tooltip>
				)}
				renderCenterRightControls={({ nextSlide }) => (
					<Tooltip TransitionComponent={Zoom} title='Next Slide'>
						<Button
							color='defaultText'
							onClick={nextSlide}
							style={{ borderRadius: "50px" }}>
							<KeyboardArrowRightIcon />
						</Button>
					</Tooltip>
				)}>
				{metaData.images.desktop.map((item) => (
					<div style={{ padding: "0px 50px" }}>
						<Image
							src={item}
							width={1280}
							height={720}
							alt='Picture of the website'
							placeholder={"empty"}
						/>
					</div>
				))}
			</Carousel>

			<Typography
				variant='body2'
				color='text.secondary'
				sx={{
					textAlign: "center",
					marginTop: "30px",
				}}>
				{metaData.subTitle}
			</Typography>
		</div>
	);
};
