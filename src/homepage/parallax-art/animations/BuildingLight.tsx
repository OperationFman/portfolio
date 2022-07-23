import { ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { AnimationProps } from "../types";

export const BuildingLight = (props: AnimationProps) => {
	const { selectedTheme, windowHeight, styles } = props;
	const [shouldAppear, setShouldAppear] = useState(false);

	setInterval(() => {
		setShouldAppear(!shouldAppear);
	}, 50000);

	return shouldAppear ? (
		<ParallaxLayer offset={0} speed={0.1}>
			<div style={styles.centerImage}>
				<img
					src={`/homepage/parallax/desktop/${selectedTheme}/TownLight.svg`}
					alt='Building Light'
					height={`${windowHeight}px`}
				/>
			</div>
		</ParallaxLayer>
	) : (
		<></>
	);
};
