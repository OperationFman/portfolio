import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Button } from "@mui/material";
import { Dispatch } from "react";

type FilterButtonProps = {
	setShowFilterMenu: Dispatch<React.SetStateAction<boolean>>;
};
export const FilterButton = (props: FilterButtonProps) => {
	const { setShowFilterMenu } = props;

	const handleOpenFilterMenu = () => {
		setShowFilterMenu(true);
	};

	return (
		<Button
			onClick={handleOpenFilterMenu}
			color='brightGrey'
			endIcon={<FilterAltOutlinedIcon />}>
			Filter
		</Button>
	);
};
