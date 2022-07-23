import { ParallaxLayer } from "@react-spring/parallax";
import { animated, easings, useSpring } from "react-spring";
import { AnimationProps } from "../types";

export const EasterEgg = (props: AnimationProps) => {
	const { selectedTheme, windowHeight, styles } = props;

	if (selectedTheme === "light") {
		return <></>;
	}

	const firstDestroyer = useSpring({
		to: { x: 0 },
		from: { x: -2000 },
		loop: { reverse: false },
		config: {
			duration: 500,
			easing: easings.easeOutExpo,
		},
	});

	const secondDestroyer = useSpring({
		to: { x: 0 },
		from: { x: -2000 },
		loop: { reverse: false },
		delay: 2000,
		config: {
			duration: 1000,
			easing: easings.easeOutExpo,
		},
	});

	return (
		<>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<animated.div style={firstDestroyer}>
						<img
							src={"/homepage/parallax/desktop/dark/StarDestroyerFar.svg"}
							alt='Star Destroyer'
							height={`${windowHeight}px`}
						/>
					</animated.div>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<animated.div style={secondDestroyer}>
						<img
							src={"/homepage/parallax/desktop/dark/StarDestroyerClose.svg"}
							alt='Star Destroyer 2'
							height={`${windowHeight}px`}
						/>
					</animated.div>
				</div>
			</ParallaxLayer>
		</>
	);
};
