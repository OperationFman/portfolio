export type ParallaxArtProps = {
	windowHeight: number;
	selectedTheme: string;
	parallaxBackground: string;
};

export type AnimationProps = {
	windowHeight: number;
	selectedTheme: string;
	styles: {
		centerImage: {
			display: string;
			alignItems: string;
			justifyContent: string;
		};
	};
};
