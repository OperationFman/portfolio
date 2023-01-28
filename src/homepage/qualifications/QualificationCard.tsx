import { Typography } from "@mui/material";
import Image from "next/future/image";

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
				alt={logo}
				width={50}
				height={50}
				className={styles.icon}
			/>

			<Typography variant='h5' className={styles.title}>
				{title}
			</Typography>

			<Typography variant='h5' align='center' className={styles.location}>
				{location}
			</Typography>
		</div>
	);
};
