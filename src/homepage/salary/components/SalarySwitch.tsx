import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Switch, Tooltip, Typography } from "@mui/material";
import Zoom from "@mui/material/Zoom";

export const SalarySwitch = ({
	text,
	checked = false,
	onChange,
	description,
}: {
	text: string;
	checked?: boolean;
	onChange: () => void;
	description: string;
}) => {
	return (
		<div style={{ display: "flex", margin: "10px 30px", gap: "15px" }}>
			<Tooltip TransitionComponent={Zoom} title={description}>
				<HelpOutlineIcon style={{ marginTop: "7px" }} />
			</Tooltip>{" "}
			<Switch
				checked={checked}
				onChange={onChange}
				size='medium'
				sx={{ fontSize: 100 }}
			/>
			<Typography variant='h6' align='left' style={{ marginTop: "3px" }}>
				{text}
			</Typography>
		</div>
	);
};
