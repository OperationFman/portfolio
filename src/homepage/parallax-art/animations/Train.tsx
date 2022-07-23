import { ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated, easings } from "react-spring";
import { AnimationProps } from "../types";

export const Train = (props: AnimationProps) => {
	const { selectedTheme, windowHeight, styles } = props;

	const config = useSpring({
		to: { x: 1000 },
		from: { x: -600 },
		loop: { reverse: true },
		config: {
			duration: 15000,
		},
	});

	return (
		<ParallaxLayer offset={0} speed={0.2}>
			<div style={styles.centerImage}>
				<animated.div style={config}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/Train.svg`}
						alt='Train'
						height={`${windowHeight}px`}
					/>
				</animated.div>
			</div>
		</ParallaxLayer>
	);
};
