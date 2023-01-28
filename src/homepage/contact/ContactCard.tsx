import { Card, CardContent, Typography } from "@mui/material";
import { setDark } from "../../../utils/configureCss/configureCss";
import ShowIf from "../../../utils/ShowIf";

import styles from "./Contact.module.scss";

export const ContactCard = ({
	children,
	contactMethod,
	value,
	link,
}: {
	children: React.ReactNode;
	contactMethod: string;
	value?: string;
	link?: string;
}) => {
	const handleLinkClick = () => {
		if (link) {
			window.open(link, "_blank");
		}
	};

	return (
		<Card
			onClick={() => handleLinkClick()}
			className={setDark(styles, "cardContainer")}>
			<CardContent className={styles.cardContent}>
				{/* Icon */}
				{children}
				<Typography
					variant='h5'
					align='center'
					className={styles.contactMethod}>
					{contactMethod}
				</Typography>
				<ShowIf condition={value}>
					<Typography
						variant='subtitle2'
						align='center'
						className={styles.contactSubtitle}>
						{value}
					</Typography>
				</ShowIf>
			</CardContent>
		</Card>
	);
};
