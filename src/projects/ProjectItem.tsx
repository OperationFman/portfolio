import { ProjectMetaData } from "./types";
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import { LaptopBorder } from "./form-factors/LaptopBorder";

type ProjectItemProps = {
    metaData: ProjectMetaData
}

export const ProjectItem = (props: ProjectItemProps): JSX.Element => {
    const {metaData} = props;
    
    return (
        // Use new React Bootstrap Carousel
            // <Carousel 
            //     autoPlay={false} 
            //     navButtonsAlwaysVisible={false} 
            //     indicators={false} 
            //     >
            //     {
            //         metaData.images.desktop.map( (item, i) => 
            //             <LaptopBorder key={i}>
            //                 <Image
            //                     src={item} 
            //                     width={1280} 
            //                     height={720} 
            //                     alt="Picture of the website"
            //                 />
            //             </LaptopBorder>
            //         )
            //     }
            // </Carousel>
    )
}