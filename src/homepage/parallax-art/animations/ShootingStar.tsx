import { ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import { useSpring, animated, config, easings } from "react-spring";
import { AnimationProps } from "../types";

export const ShootingStar = (props: AnimationProps) => {
	const { selectedTheme, windowHeight, styles } = props;

	if (selectedTheme === "light") {
		return <></>;
	}

	const config = useSpring({
		to: { x: 2000, y: 2000 },
		from: { x: -2000, y: -2000 },
		config: {
			duration: 4000,
			easing: easings.easeInOutCubic,
		},
	});

	return (
		<ParallaxLayer offset={0} speed={0.1}>
			<div style={styles.centerImage}>
				<animated.div style={config}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/ShootingStar.svg`}
						alt='Twinkling Stars Fast'
						height={`${windowHeight}px`}
					/>
				</animated.div>
			</div>
		</ParallaxLayer>
	);
};
