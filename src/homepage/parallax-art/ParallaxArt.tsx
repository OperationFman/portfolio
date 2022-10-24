import useDeviceDetect from "../../../utils/useDeviceDetect";
import { DesktopArt } from "./DesktopArt";
import { MobileArt } from "./MobileArt";

export type ParallaxArtProps = {
	selectedTheme: string;
};

export const ParallaxArt = (props: ParallaxArtProps) => {
	const { selectedTheme } = props;

	const { isMobile } = useDeviceDetect();

	return <DesktopArt selectedTheme={selectedTheme} />;
};
