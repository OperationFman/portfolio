import { Typography } from '@mui/material';
import Image from 'next/image';
import Carousel from "react-material-ui-carousel";
import useDeviceDetect from "../../../../utils/useDeviceDetect";
import { ProjectMetaData } from "../../types";
import { LaptopBorder } from "./device-borders/LaptopBorder";
import { MobileBorder } from "./device-borders/MobileBorder";
import { ExternalLinkButtons } from './ExternalLinkButtons';

type ProjectItemProps = {
    metaData: ProjectMetaData
}

export const ProjectItem = (props: ProjectItemProps): JSX.Element => {
    const { metaData } = props;
    const { isMobile } = useDeviceDetect()

    
    return (
            <div style={isMobile ? {
                padding: "0px 0px 100px 0px",
            } : 
            { 
                padding: "0px 100px 100px 100px",
            }
            }>
                <h1 style={{
                    width: "fit-content",
                    padding: "0px 100px 5px 0px",
                    borderBottom: "2px solid #f44336",
                    margin: "5px"
                }}>{metaData.title}</h1>

                <ExternalLinkButtons metaData={metaData}/>

                <Carousel 
                autoPlay={false} 
                navButtonsAlwaysVisible={isMobile ? false : true} 
                indicators={false}
                fullHeightHover={false} 
                animation={"slide"}
                duration={500}
                navButtonsProps={{
                    style: {
                        backgroundColor: "transparent",
                        color: "grey"
                    }
                }}>
                {
                    metaData.images.desktop.map((item, i) => 
                        <>
                            <LaptopBorder key={i}>
                                <Image
                                    src={item} 
                                    width={1280} 
                                    height={720} 
                                    alt="Picture of the website"
                                    style={{
                                        borderRadius: "5px 5px 0px 0px"
                                    }}
                                />
                            </LaptopBorder>
                        
                            {metaData.images.mobile ? 
                                <MobileBorder>
                                    <Image  
                                        src={metaData.images.mobile[i]} 
                                        layout="fill"
                                        alt="Picture of the website on mobile"
                                        style={{
                                            borderRadius: "10px",
                                            position: "absolute",
                                            right: "50px",
                                        }}>
                                    </Image>
                                </MobileBorder> 
                            : null}
                        </>
                    )
                }
                </Carousel>
                
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        textAlign: "center",
                        marginTop: "30px"
                    }}
                >
                    {metaData.subTitle}
                </Typography>
            </div>
    )
}