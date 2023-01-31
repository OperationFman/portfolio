import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Switch, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

import styles from "./SalarySwitch.module.scss";

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
		<div className={styles.container}>
			<Tooltip
				TransitionComponent={Zoom}
				title={description}
				enterTouchDelay={0}
				leaveTouchDelay={5000}>
				<HelpOutlineIcon className={styles.helpIcon} />
			</Tooltip>{" "}
			<Switch
				checked={checked}
				onChange={onChange}
				size='medium'
				className={styles.switch}
			/>
			<div className={styles.text}>{text}</div>
		</div>
	);
};
