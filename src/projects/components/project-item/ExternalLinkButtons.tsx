import { Button, Tooltip } from "@mui/material";
import { ProjectMetaData } from "../../types";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import Zoom from "@mui/material/Zoom";

type ExternalLinks = {
	metaData: ProjectMetaData;
};

export const ExternalLinkButtons = (props: ExternalLinks): JSX.Element => {
	const { metaData } = props;

	return (
		<div
			style={{
				display: "flex",
				margin: "0px 30px 30px 0px",
				gap: "15px",
			}}>
			{metaData.deployedURL ? (
				<Tooltip TransitionComponent={Zoom} title='Deployed Website'>
					<Button
						variant='text'
						startIcon={<LanguageIcon />}
						color={"baseGrey"}
						target='_blank'
						href={metaData.deployedURL}>
						SITE
					</Button>
				</Tooltip>
			) : null}
			{metaData.repoURL ? (
				<Tooltip TransitionComponent={Zoom} title='Github Repository'>
					<Button
						variant='text'
						startIcon={<GitHubIcon />}
						color={"baseGrey"}
						target='_blank'
						href={metaData.repoURL}>
						REPO
					</Button>
				</Tooltip>
			) : null}
			{metaData.uxURL ? (
				<Tooltip TransitionComponent={Zoom} title='Early Design Documents'>
					<Button
						variant='text'
						startIcon={<FormatPaintIcon />}
						color={"baseGrey"}
						target='_blank'
						href={metaData.uxURL}>
						UX
					</Button>
				</Tooltip>
			) : null}
		</div>
	);
};
