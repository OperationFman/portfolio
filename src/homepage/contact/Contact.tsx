import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid } from "@mui/material";
import { SubHeading } from "../SubHeading";
import { ContactCard } from "./ContactCard";

import styles from "./Contact.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

export const Contact = () => {
	return (
		<>
			<SubHeading text={"Get In Touch"} />

			<div className={styles.gap}>
				<Grid container spacing={3} justifyContent='center'>
					<Grid item>
						<ScrollAnimation animateIn='fadeIn' animateOnce>
							<ContactCard
								contactMethod={"LinkedIn"}
								link={"https://www.linkedin.com/in/franklin-moon-23572518a/"}>
								<LinkedInIcon color={"primary"} fontSize={"large"} />
							</ContactCard>
						</ScrollAnimation>
					</Grid>

					<Grid item>
						<ScrollAnimation animateIn='fadeIn' animateOnce delay={100}>
							<ContactCard
								contactMethod={"Email"}
								value={"Franklin.v.moon@gmail.com"}
								link={"mailto:franklin.v.moon@gmail.com"}>
								<EmailIcon color={"primary"} fontSize={"large"} />
							</ContactCard>
						</ScrollAnimation>
					</Grid>

					<Grid item>
						<ScrollAnimation animateIn='fadeIn' animateOnce delay={200}>
							<ContactCard
								contactMethod={"Github"}
								link={"https://github.com/OperationFman"}>
								<GitHubIcon color={"primary"} fontSize={"large"} />
							</ContactCard>
						</ScrollAnimation>
					</Grid>
				</Grid>
			</div>
		</>
	);
};
