import React, { Dispatch, SetStateAction } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  SvgIconTypeMap,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { TutorialMetaData } from "../../src/tutorials/types";
import { SortOptions } from "../../src/tutorials/tutorialsDataService";

type FilterMenuProps = {
  setSortOption: Dispatch<SetStateAction<SortOptions>>;
};

export const FilterMenu = (props: FilterMenuProps) => {
  const { setSortOption } = props;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleSelectNewest = (event: Event | React.SyntheticEvent) => {
    setSortOption(SortOptions.Newest);
    handleClose(event);
  };

  const handleSelectOldest = (event: Event | React.SyntheticEvent) => {
    setSortOption(SortOptions.Oldest);
    handleClose(event);
  };

  const handleSelectAlphabetical = (event: Event | React.SyntheticEvent) => {
    setSortOption(SortOptions.Alphabetical);
    handleClose(event);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ display: "flex", justifyContent: "right" }}
    >
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          endIcon={<FilterListIcon />}
          color="baseGrey"
        >
          Sort
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "right bottom" : "right top",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleSelectNewest}>
                      <ArrowUpwardIcon />
                      ㅤNewest
                    </MenuItem>
                    <MenuItem onClick={handleSelectOldest}>
                      <ArrowDownwardIcon />
                      ㅤOldest
                    </MenuItem>
                    <MenuItem onClick={handleSelectAlphabetical}>
                      <SortByAlphaIcon />
                      ㅤAlphabetical
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
};
