import { Button, Container } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./Footer.module.scss";

export const Footer = ({ isHomepage }: { isHomepage?: false }) => {
	const toPageTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const router = useRouter();
	const brightGrey = "brightGrey";

	const links = [
		{ label: "Home", path: "/" },
		{ label: "Skills", path: "/skills" },
		{ label: "Tutorials", path: "/tutorials" },
		{ label: "Projects", path: "/projects" },
		{ label: "Travel", path: "/travel" },
	];

	return (
		<>
			<div className={styles.buttonContainer}>
				<Button
					onClick={toPageTop}
					variant='text'
					color={brightGrey}
					className={isHomepage ? styles.toTopButton : styles.toTopButtonHome}>
					Back To Top
				</Button>
			</div>

			<footer className={styles.bottomNav}>
				<Container maxWidth={"md"}>
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
