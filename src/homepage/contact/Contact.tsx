import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { Grid, Typography } from "@mui/material";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
	return (
		<>
			<Typography
				variant='h3'
				align='center'
				style={{
					marginTop: "150px",
					marginBottom: "25px",
					fontWeight: "bold",
				}}>
				Contact
			</Typography>

			<Grid container spacing={3} justifyContent='center'>
				<Grid item>
					<ContactCard contactMethod={"LinkedIn"}>
						<LinkedInIcon color={"primary"} fontSize={"large"} />
					</ContactCard>
				</Grid>
				<Grid item>
					<ContactCard contactMethod={"Phone"} value={"0475 064 993"}>
						<PhoneEnabledIcon color={"primary"} fontSize={"large"} />
					</ContactCard>
				</Grid>
				<Grid item>
					<ContactCard
						contactMethod={"Email"}
						value={"Franklin.v.moon@gmail.com"}>
						<EmailIcon color={"primary"} fontSize={"large"} />
					</ContactCard>
				</Grid>
				<Grid item>
					<ContactCard
						contactMethod={"Location"}
						value={"Melbourne, Australia"}>
						<LocationOnIcon color={"primary"} fontSize={"large"} />
					</ContactCard>
				</Grid>

				<Grid item>
					<ContactCard contactMethod={"Facebook"}>
						<LinkedInIcon color={"primary"} fontSize={"large"} />
					</ContactCard>
				</Grid>
			</Grid>

			<Typography
				variant='h6'
				align='center'
				style={{ marginTop: "250px", marginBottom: "250px" }}>
				-- Some SVG Art --
			</Typography>
		</>
	);
};
