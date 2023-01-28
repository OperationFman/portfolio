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

import styles from "./SalaryInput.module.scss";

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
		<div className={styles.container}>
			<Tooltip
				TransitionComponent={Zoom}
				title={description}
				enterTouchDelay={0}
				leaveTouchDelay={5000}>
				<HelpOutlineIcon className={styles.helpIcon} />
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
					className={styles.iconButton}>
					<DeleteOutlineIcon />
				</IconButton>
			</Tooltip>
		</div>
	);
};
