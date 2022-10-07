import Image from "next/future/image";
import { useState } from "react";
import { animated, config, easings, useSpring } from "react-spring";
import { AnimationProps } from "../types";

export const TwinklingStars = (props: AnimationProps) => {
	const { selectedTheme, styles, offSetY } = props;

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
			<animated.div style={fastTwinkle}>
				<Image
					src={"/homepage/parallax/desktop/dark/TwinklingStars1.svg"}
					alt='Twinkling Stars 2'
					width='0'
					height='0'
					style={{
						...styles,
						zIndex: -7,
						transform: `translateY(${offSetY * 0.1}px)`,
						position: "inherit",
					}}
				/>
			</animated.div>

			<animated.div style={slowTwinkle}>
				<Image
					src={"/homepage/parallax/desktop/dark/TwinklingStars2.svg"}
					alt='Twinkling Stars 1'
					width='0'
					height='0'
					style={{
						...styles,
						zIndex: -7,
						transform: `translateY(${offSetY * 0.2}px)`,
						position: "inherit",
					}}
				/>
			</animated.div>
			<Image
				src={"/homepage/parallax/desktop/dark/StaticStars.svg"}
				alt='Stars'
				width='0'
				height='0'
				style={{
					...styles,
					zIndex: -7,
					transform: `translateY(${offSetY * 0.3}px)`,
				}}
			/>
		</>
	);
};
