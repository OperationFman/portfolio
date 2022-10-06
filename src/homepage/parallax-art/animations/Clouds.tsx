export {}
// import { useSpring, animated, easings } from "react-spring";
// import { AnimationProps } from "../types";
// import Image from "next/future/image";

// export const Clouds = (props: AnimationProps) => {
// 	const { selectedTheme, windowHeight, styles } = props;
// 	const temporal = 100000;

// 	const config = useSpring({
// 		to: { x: 1000 },
// 		from: { x: -200 },
// 		loop: { reverse: true },
// 		config: {
// 			duration: temporal,
// 			easing: easings.easeInOutCubic,
// 		},
// 	});

// 	return (
// 		<animated.div style={config}>
// 			<Image
// 				src={`/homepage/parallax/desktop/${selectedTheme}/2.svg`}
// 				alt='Clouds'
// 				width='0'
// 				height='0'
// 				style={styles}
// 			/>
// 		</animated.div>
// 	);
// };
