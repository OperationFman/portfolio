import { animated, easings, useSpring } from "react-spring";
import { AnimationProps } from "../types";
import Image from "next/future/image";

export const ShootingStar = (props: AnimationProps) => {
	const { selectedTheme, styles, offSetY } = props;

	if (selectedTheme === "light") {
		return <></>;
	}

	const starShot = useSpring({
		// to: { x: 2000, y: 2000 },
		from: { x: 0, y: 0 },
		config: {
			duration: 8000,
			easing: easings.easeInOutCubic,
		},
	});

	return (
		// <animated.div style={starShot}>
		<Image
			src={"/homepage/parallax/desktop/dark/ShootingStar.svg"}
			alt='Twinkling Stars 1'
			width='0'
			height='0'
			style={{
				...styles,
				zIndex: -7,
				border: "2px solid pink",
			}}
		/>
		// </animated.div>
	);
};
