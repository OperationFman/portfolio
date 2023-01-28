import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid } from "@mui/material";
import { SubHeading } from "../SubHeading";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
	return (
		<>
			<SubHeading text={"Get In Touch"} />

			<div className='mt-8'>
				<Grid container spacing={3} justifyContent='center'>
					<Grid item>
						<ContactCard
							contactMethod={"LinkedIn"}
							link={"https://www.linkedin.com/in/franklin-moon-23572518a/"}>
							<LinkedInIcon color={"primary"} fontSize={"large"} />
						</ContactCard>
					</Grid>

					<Grid item>
						<ContactCard
							contactMethod={"Email"}
							value={"Franklin.v.moon@gmail.com"}
							link={"mailto:franklin.v.moon@gmail.com"}>
							<EmailIcon color={"primary"} fontSize={"large"} />
						</ContactCard>
					</Grid>

					<Grid item>
						<ContactCard
							contactMethod={"Github"}
							link={"https://github.com/OperationFman"}>
							<GitHubIcon color={"primary"} fontSize={"large"} />
						</ContactCard>
					</Grid>
				</Grid>
			</div>
		</>
	);
};
