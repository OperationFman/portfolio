import { Button, Container } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./Footer.module.scss";

export const Footer = ({
	isHomepage = false,
	hideToTop = false,
}: {
	isHomepage?: boolean;
	hideToTop?: boolean;
}) => {
	const toPageTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const router = useRouter();
	const brightGrey = "brightGrey";

	const links = [
		{ label: "Home", path: "/" },
		{ label: "Guides", path: "/guides" },
		{ label: "Travel", path: "/travel" },
	];

	return (
		<>
			{hideToTop ? (
				<div style={{ height: "100vh" }} />
			) : (
				<div className={styles.buttonContainer}>
					<div
						className={
							isHomepage ? styles.toTopButtonHome : styles.toTopButton
						}>
						<Button onClick={toPageTop} variant='text' color={brightGrey}>
							Back To Top
						</Button>
					</div>
				</div>
			)}

			<footer className={styles.bottomNav}>
				<Container maxWidth={"xs"}>
					<div className={styles.sitemap}>
						{links.map((link, index) => (
							<span key={index}>
								<Button
									color={brightGrey}
									onClick={() => router.replace(link.path)}>
									{link.label}
								</Button>
							</span>
						))}
					</div>
				</Container>
			</footer>
		</>
	);
};
