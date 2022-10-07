import Image from "next/future/image";
import { AnimationProps } from "../types";

export const Train = (props: AnimationProps) => {
	const { selectedTheme, styles, offSetY } = props;

	return (
		<Image
			src={`/homepage/parallax/desktop/${selectedTheme}/Train.svg`}
			alt='Train'
			width='0'
			height='0'
			style={{
				...styles,
				zIndex: -6,
				transform: `translateY(${offSetY * -0.2}px)`,
			}}
		/>
	);
};
