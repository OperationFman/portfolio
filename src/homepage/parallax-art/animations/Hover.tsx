import { animated, easings, useSpring } from "react-spring";
import { AnimationProps } from "../types";

export const Hover = (props: AnimationProps) => {
	const { styles, children } = props;

	const randomHoverAmount = Math.floor(Math.random() * 9000) + 5000;

	const config = useSpring({
		to: { y: -40 },
		from: { y: -20 },
		loop: { reverse: true },
		config: {
			duration: randomHoverAmount,
			easing: easings.easeInOutQuad,
		},
	});

	return (
		<div style={styles.centerImage}>
			<animated.div style={config}>{children}</animated.div>
		</div>
	);
};
