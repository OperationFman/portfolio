import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { Grid, Typography } from "@mui/material";
import { ContactCard } from "./ContactCard";
import FacebookIcon from "@mui/icons-material/Facebook";
import { SubHeading } from "../components/SubHeading";

export const Contact = () => {
	return (
		<>
			<SubHeading text={"Get In Touch"} />

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
						contactMethod={"Phone"}
						value={"0475 064 993"}
						link={"tel:0475064993"}>
						<PhoneEnabledIcon color={"primary"} fontSize={"large"} />
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
						contactMethod={"Location"}
						value={"Melbourne, Australia"}
						link={"https://goo.gl/maps/NbAkwiG8RxdSeR8i7"}>
						<LocationOnIcon color={"primary"} fontSize={"large"} />
					</ContactCard>
				</Grid>

				<Grid item>
					<ContactCard
						contactMethod={"Facebook"}
						link={"https://www.facebook.com/frank.moon.731/"}>
						<FacebookIcon color={"primary"} fontSize={"large"} />
					</ContactCard>
				</Grid>
			</Grid>

		</>
	);
};