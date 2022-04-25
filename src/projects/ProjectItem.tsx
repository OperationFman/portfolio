import { ProjectMetaData } from "./types";
import Image from 'next/image'
import { LaptopBorder } from "./components/LaptopBorder";
import Carousel from "react-material-ui-carousel";
import Card from '@mui/material/Card';
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Box } from "@mui/material";

type ProjectItemProps = {
    metaData: ProjectMetaData
}

export const ProjectItem = (props: ProjectItemProps): JSX.Element => {
    const {metaData} = props;
    const { isMobile } = useDeviceDetect()

    
    return (
            <div style={
                {
                    padding: isMobile ? "0px 0px 50px 0px" : "0px 100px 50px 100px",
                }
            }>
                

                <Carousel 
                autoPlay={false} 
                navButtonsAlwaysVisible={false} 
                indicators={false}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'grey',
                        marginLeft: "90px",
                        marginRight: "45px"
                    }
                }} 
                >
                {
                    metaData.images.desktop.map( (item, i) => 
                        <><LaptopBorder key={i}>
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
                            <div style={{
                                position: "absolute",
                                right: isMobile ? "0" : "8%",
                                top: "22%",
                                height: "70%",
                                width: isMobile ? "19%" : "16%",
                                border: isMobile ? "4px solid #282424" : "5px solid #282424",
                                borderRadius: "15px",
                                backgroundColor: "#282424"
                                }}>
                                    <Image  
                                        src={metaData.images.mobile} 
                                        layout="fill"
                                        alt="Picture of the website on mobile"
                                        style={{
                                            borderRadius: "10px",
                                            position: "absolute",
                                            right: "50px",
                                            border: "2px solid blue",
                                        }}>
                                    </Image>
                        </div> : null}</>
                    )
                }
                </Carousel>
                <h1>Title</h1>
                <h3>Description</h3>
            </div>
    )
}