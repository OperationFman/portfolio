import { Button } from "@mui/material";
import styles from "./Footer.module.scss";

export const Footer = () => {
	const toPageTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className={styles.container}>
			<Button
				onClick={() => toPageTop()}
				variant='text'
				color='brightGrey'
				className={styles.button}>
				Back To Top
			</Button>
		</footer>
	);
};
