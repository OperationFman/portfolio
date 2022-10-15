import { DesktopArt } from "./DesktopArt";

export type ParallaxArtProps = {
	selectedTheme: string;
};

export const ParallaxArt = (props: ParallaxArtProps) => {
	const { selectedTheme } = props;

	return <DesktopArt selectedTheme={selectedTheme} />;
};
