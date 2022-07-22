import { useSpring, animated, easings } from "react-spring";
import { AnimationProps } from "../types";

export const Clouds = (props: AnimationProps) => {
	const { selectedTheme, windowHeight, styles } = props;
	const temporal = 60 * 60 * 60;

	const config = useSpring({
		to: { x: 3000 },
		from: { x: -200 },
		loop: { reverse: true },
		config: {
			duration: temporal,
			easing: easings.easeInOutCubic,
		},
	});

	return (
		<div style={styles.centerImage}>
			<animated.div style={config}>
				<img
					src={`/homepage/parallax/desktop/${selectedTheme}/2.svg`}
					alt='Clouds'
					height={`${windowHeight}px`}
				/>
			</animated.div>
		</div>
	);
};
