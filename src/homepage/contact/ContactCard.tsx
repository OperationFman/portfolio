import { Card } from "@mui/material";
import { setDark } from "../../../utils/configureCss/configureCss";

import styles from "./Contact.module.scss";
import Link from "next/link";
import { isClientSide } from "../../../utils/isClientSide";

export const ContactCard = ({
	children,
	contactMethod,
	value,
	link,
}: {
	children: React.ReactNode;
	contactMethod: string;
	value?: string;
	link: string;
}) => {
	return (
		<Link
			href={link}
			target='_blank'
			rel='noopener noreferrer'
			className={styles.link}>
			<Card className={setDark(styles, "cardContainer")}>
				<div className={styles.cardContent}>
					{children}
						<div className={setDark(styles, "contactMethod")}>
						{contactMethod}
					</div>
					{value && <div className={styles.contactSubtitle}>{value}</div>}
				</div>
			</Card>
		</Link>
	);
};
