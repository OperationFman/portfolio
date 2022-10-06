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
			<div style={styles}>
				<animated.div style={fastTwinkle}>
					<img
						src={"/homepage/parallax/desktop/dark/TwinklingStars1.svg"}
						alt='Twinkling Stars 2'
						height={`${windowHeight}px`}
					/>
				</animated.div>
			</div>

			<div style={styles}>
				<animated.div style={slowTwinkle}>
					<img
						src={"/homepage/parallax/desktop/dark/TwinklingStars2.svg"}
						alt='Twinkling Stars 1'
						height={`${windowHeight}px`}
					/>
				</animated.div>
			</div>
			<div style={styles}>
				<img
					src={"/homepage/parallax/desktop/dark/StaticStars.svg"}
					alt='Stars'
					height={`${windowHeight}px`}
				/>
			</div>
		</>
	);
};
