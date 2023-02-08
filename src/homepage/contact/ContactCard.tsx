import { Card } from "@mui/material";
import { setDark } from "../../../utils/configureCss/configureCss";
import ShowIf from "../../../utils/show-if/ShowIf";

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
			<div className={styles.cardContent}>
				{children}
				<button className={setDark(styles, "contactMethod")}>
					{contactMethod}
				</button>
				<ShowIf condition={value}>
					<div className={styles.contactSubtitle}>{value}</div>
				</ShowIf>
			</div>
		</Card>
	);
};
