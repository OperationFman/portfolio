import { Button } from "@mui/material";
import { ProjectMetaData } from "../../types";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';

type ExternalLinks = {
    metaData: ProjectMetaData
}

export const ExternalLinkButtons = (props: ExternalLinks): JSX.Element => {
    const { metaData } = props;
    
    return (
        <div style={{ 
            display: "flex", 
            margin: "0px 30px 30px 0px", 
            gap: "15px" 
        }}>
            {metaData.deployedURL ? 
                <Button 
                    variant="text" 
                    startIcon={<LanguageIcon />} 
                    color={'baseGrey'}
                    target="_blank"
                    href={metaData.deployedURL}>
            SITE
                </Button> 
            : null}
            {metaData.repoURL ? 
                <Button 
                    variant="text" 
                    startIcon={<GitHubIcon />} 
                    color={'baseGrey'}
                    target="_blank"
                    href={metaData.repoURL}>
            REPO
                </Button> 
            : null}
            {metaData.uxURL ? 
                <Button 
                    variant="text" 
                    startIcon={<FormatPaintIcon />} 
                    color={'baseGrey'}
                    target="_blank"
                    href={metaData.uxURL}>
            UX
                </Button> 
            : null}
        </div>
    )
}