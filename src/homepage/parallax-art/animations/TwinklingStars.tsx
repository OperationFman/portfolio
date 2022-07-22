import { ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import { useSpring, animated, config, easings } from "react-spring";
import { AnimationProps } from "../types";

export const TwinklingStars = (props: AnimationProps) => {
	const { selectedTheme, windowHeight, styles } = props;
	const [flip, set] = useState(false);

	// Has the most stars
	const moderateConfig = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0.8 },
		loop: { reverse: true },
		config: {
			easing: easings.easeInOutCubic,
		},
	});

	const fastConfig = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0.3 },
		reset: true,
		reverse: flip,
		friction: 100,
		delay: 5000,
		config: config.wobbly,
		onRest: () => set(!flip),
	});

	const slowConfig = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0.3 },
		loop: { reverse: true },
		config: {
			duration: 100 * 60,
			easing: easings.easeInOutCubic,
		},
	});

	return (
		<>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<animated.div style={fastConfig}>
						<img
							src={`/homepage/parallax/desktop/${selectedTheme}/stars2.svg`}
							alt='Twinkling Stars Fast'
							height={`${windowHeight}px`}
						/>
					</animated.div>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<animated.div style={moderateConfig}>
						<img
							src={`/homepage/parallax/desktop/${selectedTheme}/stars1.svg`}
							alt='Twinkling Stars Moderate'
							height={`${windowHeight}px`}
						/>
					</animated.div>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<animated.div style={slowConfig}>
						<img
							src={`/homepage/parallax/desktop/${selectedTheme}/stars3.svg`}
							alt='Twinkling Stars Slow'
							height={`${windowHeight}px`}
						/>
					</animated.div>
				</div>
			</ParallaxLayer>
		</>
	);
};
