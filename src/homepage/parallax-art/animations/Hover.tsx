import { animated, easings, useSpring } from "react-spring";
import { AnimationProps } from "../types";

export const Hover = (props: AnimationProps) => {
	const { styles, children } = props;

	const config = useSpring({
		to: { x: 3000 },
		from: { x: -200 },
		loop: { reverse: true },
		config: {
			duration: 100,
			easing: easings.easeInOutCubic,
		},
	});

	<div style={styles.centerImage}>
		<animated.div style={config}>{children}</animated.div>
	</div>;
};
