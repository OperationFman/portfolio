import { ParallaxLayer } from "@react-spring/parallax";

export const Biography = () => {
	return (
		<ParallaxLayer offset={1} factor={1}>
			<h1>Name & Role(s) (Changing)</h1>
			<ul>
				<li>Quick bio</li>
				<li>Who I am (+ mob)</li>
				<li>Where I am</li>
			</ul>
		</ParallaxLayer>
	);
};
