import useDeviceDetect from "../../utils/useDeviceDetect";
import { FeedCardFormatting, Page } from "../components/feed/types";

export const projectFeedCardStyle = (isMobile: boolean): FeedCardFormatting  => {
    
    return (
        {
            page: Page.ProjectPage,
            accentColor: "#d32f2f",
            theme: "error",
            maxWidth: isMobile ? 345 : 700,
            maxHeight: isMobile ? "180" : "400"
        }
    )
}