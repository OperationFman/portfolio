import Image from "next/image";
import styles from "./HomeFooterImage.module.scss";

export const HomeFooterImage = () => {
	return (
		<div className={styles.container}>
			<Image
				src={"/homepage/moon-footer.svg"}
				alt=''
				width={1920}
				height={720}
			/>
		</div>
	);
};
