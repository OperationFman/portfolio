import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Dispatch, SetStateAction } from "react";
import { Topic } from "../../../types";
import { addTransparency } from "../filterAnimations";

type TopicFilterProps = {
	filter: Topic | undefined;
	setFilter: Dispatch<SetStateAction<Topic | undefined>>;
	dropDownData: Topic[];
};

type SingleSelectFilterField = TopicFilterProps & {
	label: string;
	defaultValue: string;
	highlightColor: string;
};

export const SingleSelectFilterField = (props: SingleSelectFilterField) => {
	const {
		label,
		defaultValue,
		filter,
		setFilter,
		dropDownData,
		highlightColor,
	} = props;

	const handleChange = (event: any) => {
		const {
			target: { value },
		} = event;
		setFilter(value === defaultValue ? undefined : value);
	};

	const dropDownStyling = {
		"&:hover": {
			backgroundColor: `${addTransparency(highlightColor, 0.4)} !important`,
		},
		"&.Mui-selected": {
			backgroundColor: addTransparency(highlightColor, 0.2),
		},
	};

	return (
		<Box
			sx={{
				m: 2,
				width: 200,
				paddingTop: "20px",
			}}>
			<FormControl fullWidth>
				<InputLabel
					sx={{
						"&.Mui-focused": {
							color: highlightColor,
						},
					}}>
					Topic
				</InputLabel>
				<Select
					value={filter ? filter : defaultValue}
					label={label}
					onChange={handleChange}
					sx={{
						"&.Mui-focused": {
							"&& fieldset": {
								borderColor: highlightColor,
							},
						},
					}}>
					<MenuItem value={defaultValue} sx={dropDownStyling}>
						{defaultValue}
					</MenuItem>
					{dropDownData.map((item, index) => {
						return (
							<MenuItem key={index} value={item} sx={dropDownStyling}>
								{item}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</Box>
	);
};
