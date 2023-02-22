import { Button, Container, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./Footer.module.scss";

export const Footer = () => {
	const toPageTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const router = useRouter();

	return (
		<footer className={styles.container}>
			<Button
				onClick={() => toPageTop()}
				variant='text'
				color='brightGrey'
				className={styles.button}>
				Back To Top
			</Button>
			<Container maxWidth={"md"}>
				<div className={styles.sitemap}>
					<span>
						<Button
							color='brightGrey'
							onClick={() => {
								router.replace("/");
							}}>
							Homepage
						</Button>
					</span>
					<span className={styles.divider}> | </span>
					<span>
						<Button
							color='brightGrey'
							onClick={() => {
								router.replace("/skills");
							}}>
							Skills
						</Button>
					</span>
					<span className={styles.divider}> | </span>
					<span>
						<Button
							color='brightGrey'
							onClick={() => {
								router.replace("/tutorials");
							}}>
							Tutorials
						</Button>
					</span>
					<span className={styles.divider}> | </span>
					<span>
						<Button
							color='brightGrey'
							onClick={() => {
								router.replace("/projects");
							}}>
							Projects
						</Button>
					</span>
				</div>
			</Container>
		</footer>
	);
};
