import Image from 'next/image';
import Carousel from "react-material-ui-carousel";
import useDeviceDetect from "../../../../utils/useDeviceDetect";
import { ProjectMetaData } from "../../types";
import { LaptopBorder } from "./device-borders/LaptopBorder";
import { MobileBorder } from "./device-borders/mobileBorder";

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
                    paddingRight: "100px",
                    borderBottom: "2px solid #f44336"
                }}>{metaData.title}</h1>

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
                }}
                >
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
                
                <p style={{textAlign: 'center'}}>{metaData.subTitle}</p>
            </div>
    )
}