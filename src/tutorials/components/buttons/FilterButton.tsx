import { Button } from "@mui/material";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
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
      color="baseGrey"
      endIcon={<FilterAltOutlinedIcon />}
    >
      Filter
    </Button>
  );
};
