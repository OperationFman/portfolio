import {
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Tooltip,
	Zoom,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";

export const MoneyInput = ({
	title,
	name,
	value,
	onChange,
	onClear,
	description,
}: {
	title: string;
	name: string;
	value: number;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClear: (fieldName: string) => void;
	description: string;
}) => {
	return (
		<div style={{ display: "flex", margin: "10px 30px", gap: "15px" }}>
			<Tooltip
				TransitionComponent={Zoom}
				title={description}
				enterTouchDelay={0}
				leaveTouchDelay={5000}>
				<HelpOutlineIcon style={{ marginTop: "40px" }} />
			</Tooltip>{" "}
			<div>
				<InputLabel htmlFor='outlined-adornment-amount'>{title}</InputLabel>
				<OutlinedInput
					id='outlined-adornment-amount'
					name={name}
					value={value}
					onChange={onChange}
					startAdornment={<InputAdornment position='start'>$</InputAdornment>}
					type={"number"}
				/>
			</div>
			<Tooltip TransitionComponent={Zoom} title={"Clear"} enterTouchDelay={0}>
				<IconButton
					color='primary'
					component='label'
					onClick={() => onClear(name)}
					sx={{ marginTop: "20px", width: "55px" }}>
					<DeleteOutlineIcon />
				</IconButton>
			</Tooltip>
		</div>
	);
};
