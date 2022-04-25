import { ProjectMetaData } from "./types";
import Image from 'next/image'
import { LaptopBorder } from "./form-factors/LaptopBorder";
import Carousel from "react-material-ui-carousel";
import Card from '@mui/material/Card';
import useDeviceDetect from "../../utils/useDeviceDetect";

type ProjectItemProps = {
    metaData: ProjectMetaData
}

export const ProjectItem = (props: ProjectItemProps): JSX.Element => {
    const {metaData} = props;
    const { isMobile } = useDeviceDetect()

    
    return (
            <div style={
                {
                    padding: isMobile ? "0px 0px 50px 0px" : "0px 100px 50px 100px"
                }
            }>
                        <Carousel 
                        autoPlay={false} 
                        navButtonsAlwaysVisible={false} 
                        indicators={false}
                        navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                            style: {
                                backgroundColor: 'grey',
                                margin: "0px 50px"
                            }
                        }} 
                        >
                        {
                            metaData.images.desktop.map( (item, i) => 
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
                            )
                        }
                        </Carousel>
                <h1>Title</h1>
                <h3>Description</h3>
            </div>
    )
}