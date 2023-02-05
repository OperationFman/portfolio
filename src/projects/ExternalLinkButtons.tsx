import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Button, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { ProjectMetaData } from "./types";

import styles from "./ExternalLinkButtons.module.scss";

export const ExternalLinkButtons = ({
	metaData,
}: {
	metaData: ProjectMetaData;
}): JSX.Element => {
	return (
		<div className={styles.container}>
			{metaData.deployedURL ? (
				<Tooltip TransitionComponent={Zoom} title='Deployed Website'>
					<Button
						startIcon={<LanguageIcon />}
						color='brightGrey'
						target='_blank'
						href={metaData.deployedURL}>
						SITE
					</Button>
				</Tooltip>
			) : null}
			{metaData.repoURL ? (
				<Tooltip TransitionComponent={Zoom} title='Github Repository'>
					<Button
						startIcon={<GitHubIcon />}
						color='brightGrey'
						target='_blank'
						href={metaData.repoURL}>
						REPO
					</Button>
				</Tooltip>
			) : null}
			{metaData.uxURL ? (
				<Tooltip TransitionComponent={Zoom} title='Early Design Documents'>
					<Button
						startIcon={<FormatPaintIcon />}
						color='brightGrey'
						target='_blank'
						href={metaData.uxURL}>
						UX
					</Button>
				</Tooltip>
			) : null}
		</div>
	);
};
