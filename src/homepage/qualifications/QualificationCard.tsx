import Image from "next/image";
import { setDark } from "../../../utils/configureCss/configureCss";

import styles from "./QualificationCard.module.scss";

export const QualificationCard = ({
	logo,
	title,
	location,
}: {
	logo: string;
	title: string;
	location: string;
}) => {
	return (
		<div className={styles.container}>
			<Image
				src={`/homepage/qualifications/${logo}.svg`}
				alt=''
				width={50}
				height={50}
				className={styles.icon}
			/>

			<div className={styles.title}>{title}</div>

			<div className={setDark(styles, "location")}>{location}</div>
		</div>
	);
};
