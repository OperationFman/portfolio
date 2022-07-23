import { ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated, easings } from "react-spring";
import { AnimationProps } from "../types";

export const IronMan = (props: AnimationProps) => {
	const { selectedTheme, windowHeight, styles } = props;

	const config = useSpring({
		to: { x: -2000 },
		from: { x: 8000 },
		loop: { reverse: false },
		config: {
			duration: 25000,
		},
	});

	return (
		<ParallaxLayer offset={0} speed={0.4}>
			<div style={styles.centerImage}>
				<animated.div style={config}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/IronMan.svg`}
						alt='Iron Man'
						height={`${windowHeight}px`}
					/>
				</animated.div>
			</div>
		</ParallaxLayer>
	);
};
