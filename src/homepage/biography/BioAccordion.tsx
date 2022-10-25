import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import useDeviceDetect from "../../../utils/useDeviceDetect";

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion elevation={0} square {...props} />
))(({ theme }) => ({
	border: `5px solid ${theme.palette.background.default}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	backgroundColor: `${theme.palette.background.default}`,
	"&:before": {
		marginLeft: "20px",
		display: "none",
	},
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={
			<KeyboardArrowRightIcon
				sx={{
					fontSize: "1.5rem",
					fontWeight: "bold",
					marginLeft: "20px",
					color: "white",
				}}
			/>
		}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === "dark"
			? "rgba(255, 255, 255, .05)"
			: "rgba(0, 0, 0, .03)",
	flexDirection: "row-reverse",

	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const BioAccordion = () => {
	const { isMobile } = useDeviceDetect();
	const [expanded, setExpanded] = useState<string | false>("panel0");

	const style = {
		summary: { margin: "20px" },
		coverImages: {
			width: "100%",
			height: "100%",
			backgroundSize: "cover",
			borderRadius: "2px",
			transition: "1s",
		},
	};

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	return (
		<div>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}>
				<AccordionSummary
					aria-controls='panel1d-content'
					id='panel1d-header'
					style={{
						...style.coverImages,
						backgroundImage: "url(homepage/biography/software-dev-image.png)",
						filter: expanded === "panel1" ? "" : "grayscale(100%)",
					}}>
					<div style={style.summary}>
						<Typography
							variant='h4'
							style={{
								marginLeft: isMobile ? "" : "50px",
								fontWeight: "bold",
								color: "#FFFFFF",
							}}>
							Software Development
						</Typography>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Blah</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}>
				<AccordionSummary
					aria-controls='panel2d-content'
					id='panel2d-header'
					style={{
						...style.coverImages,
						backgroundImage: "url(homepage/biography/placeholder.png)",
						filter: expanded === "panel2" ? "" : "grayscale(100%)",
					}}>
					<div style={style.summary}>
						<Typography
							variant='h4'
							style={{
								marginLeft: isMobile ? "" : "50px",
								fontWeight: "bold",
								color: "#FFFFFF",
							}}>
							Design
						</Typography>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>blah</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}>
				<AccordionSummary
					aria-controls='panel3d-content'
					id='panel3d-header'
					style={{
						...style.coverImages,
						backgroundImage: "url(homepage/biography/placeholder.png)",
						filter: expanded === "panel3" ? "" : "grayscale(100%)",
					}}>
					<div style={style.summary}>
						<Typography
							variant='h4'
							style={{
								marginLeft: isMobile ? "" : "50px",
								fontWeight: "bold",
								color: "#FFFFFF",
							}}>
							Post Production
						</Typography>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>blah</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel4"}
				onChange={handleChange("panel4")}>
				<AccordionSummary
					aria-controls='panel4d-content'
					id='panel4d-header'
					style={{
						...style.coverImages,
						backgroundImage: "url(homepage/biography/placeholder.png)",
						filter: expanded === "panel4" ? "" : "grayscale(100%)",
					}}>
					<div style={style.summary}>
						<Typography
							variant='h4'
							style={{
								marginLeft: isMobile ? "" : "50px",
								fontWeight: "bold",
								color: "#FFFFFF",
							}}>
							Volunteering
						</Typography>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>blah</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
