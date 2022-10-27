import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";

export const Accordion = styled((props: AccordionProps) => (
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

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
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

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
