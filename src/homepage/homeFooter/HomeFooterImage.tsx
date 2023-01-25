import Image from "next/future/image";
import styles from "./HomeFooterImage.module.css";

export const HomeFooterImage = () => {
	return (
		<div className={styles.container}>
			<Image
				src={"/homepage/moon-footer.svg"}
				alt='Moon and Astronaut'
				width={1920}
				height={720}
			/>
		</div>
	);
};
