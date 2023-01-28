import Image from "next/future/image";
import { useContext } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./Biography.module.scss";
import { BioDescription } from "./BioDescription";

export const Biography = () => {
	const darkMode = useContext(DarkMode);

	const selectedTheme = darkMode ? "dark" : "light";

	return (
		<ScrollAnimation
			animateIn='fadeIn'
			className={styles.container}>
			<BioDescription />

			<ScrollAnimation animateIn='fadeIn' className={styles.headshot}>
				<Image
					src={`/homepage/biography/headshot-${selectedTheme}.svg`}
					width='480'
					height='300'
					alt='Head shot'
				/>
			</ScrollAnimation>
		</ScrollAnimation>
	);
};
