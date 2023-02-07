import Image from "next/future/image";
import { splitStringAtFullStop } from "../../../utils/split-string/splitStringAtFullStop";

import styles from "./ForYouCard.module.scss";

export const ForYouCard = ({
	logo,
	title,
	paragraph,
}: {
	logo: string;
	title: string;
	paragraph: string;
}) => {
	const paragraphArray = splitStringAtFullStop(paragraph);

	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<div className={styles.title}>{title}</div>

				<div className={styles.content}>
					{paragraphArray.map((sentence, index) => {
						return (
							<div key={index} className={styles.sentence}>
								{sentence}
							</div>
						);
					})}
				</div>

				<Image
					src={`/homepage/foryou/${logo}.svg`}
					alt={logo}
					width={60}
					height={60}
					className={styles.logo}
				/>
			</div>
		</div>
	);
};
