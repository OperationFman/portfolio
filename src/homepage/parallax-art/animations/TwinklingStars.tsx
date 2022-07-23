import { ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import { useSpring, animated, config, easings } from "react-spring";
import { AnimationProps } from "../types";

export const TwinklingStars = (props: AnimationProps) => {
	const { selectedTheme, windowHeight, styles } = props;

	if (selectedTheme === "light") {
		return <></>;
	}

	const slowTwinkle = useSpring({
		to: { opacity: 0.8 },
		from: { opacity: 1 },
		loop: { reverse: true },
		config: {
			easing: easings.easeInOutCubic,
		},
	});

	const [flip, set] = useState(false);
	const fastTwinkle = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0.2 },
		reset: true,
		reverse: flip,
		friction: 100,
		delay: 5000,
		config: config.wobbly,
		onRest: () => set(!flip),
	});

	return (
		<>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<animated.div style={fastTwinkle}>
						<img
							src={`/homepage/parallax/desktop/${selectedTheme}/stars3.svg`}
							alt='Twinkling Stars Fast'
							height={`${windowHeight}px`}
						/>
					</animated.div>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<animated.div style={slowTwinkle}>
						<img
							src={`/homepage/parallax/desktop/${selectedTheme}/stars2.svg`}
							alt='Twinkling Stars Moderate'
							height={`${windowHeight}px`}
						/>
					</animated.div>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/stars1.svg`}
						alt='Twinkling Stars Slow'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
		</>
	);
};
