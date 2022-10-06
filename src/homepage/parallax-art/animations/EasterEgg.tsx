// import { animated, easings, useSpring } from "react-spring";
// import { AnimationProps } from "../types";

// export const EasterEgg = (props: AnimationProps) => {
// 	const { selectedTheme, windowHeight, styles } = props;

// 	if (selectedTheme === "light") {
// 		return <></>;
// 	}

// 	const config = useSpring({
// 		firstDestroyer: {
// 			to: { x: 0 },
// 			from: { x: -2000 },
// 			loop: { reverse: false },
// 			config: {
// 				duration: 500,
// 				easing: easings.easeOutExpo,
// 			},
// 		},
// 		secondDestroyer: {
// 			to: { x: 0 },
// 			from: { x: -2000 },
// 			loop: { reverse: false },
// 			delay: 2000,
// 			config: {
// 				duration: 1000,
// 				easing: easings.easeOutExpo,
// 			},
// 		},
// 	});

// 	return (
// 		<>
// 			<div style={styles.centerImage}>
// 				<animated.div style={config.firstDestroyer}>
// 					<img
// 						src={"/homepage/parallax/desktop/dark/StarDestroyerFar.svg"}
// 						alt='Star Destroyer'
// 						height={`${windowHeight}px`}
// 					/>
// 				</animated.div>
// 			</div>
// 			<div style={styles.centerImage}>
// 				<animated.div style={config.secondDestroyer}>
// 					<img
// 						src={"/homepage/parallax/desktop/dark/StarDestroyerClose.svg"}
// 						alt='Star Destroyer 2'
// 						height={`${windowHeight}px`}
// 					/>
// 				</animated.div>
// 			</div>
// 		</>
// 	);
// };
