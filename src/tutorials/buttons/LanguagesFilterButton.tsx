import CodeOutlined from "@mui/icons-material/CodeOutlined";
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  SxProps,
  Theme,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Languages, Topic } from "../types";
import {
  closeMenu,
  keyboardNavigation,
} from "../../../utils/dropDownMenuLogic";
import { ContentPasteGoOutlined } from "@mui/icons-material";

type LanguagesFilterButton = {
  setLanguagesFilter: Dispatch<SetStateAction<Languages[]>>;
  languagesFilter: Languages[];
  availableLanguages: Languages[];
};

export const LanguagesFilterButton = (props: LanguagesFilterButton) => {
  // TODO: See if MUI has a toggle ui for the MenuItems. Might be best to place this in a new useEffect here

  // Create logic to update setLanguagesFilter
  // None should clear the array
  // Clicking a language thats not in the array, should add it
  // Clicking a language that is in the array, should remove it
  const {
    setLanguagesFilter: setLanguagesFilter,
    languagesFilter,
    availableLanguages,
  } = props;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    closeMenu(event, setOpen, anchorRef);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    keyboardNavigation(event, setOpen);
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  console.log({ languagesFilter });
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
          endIcon={<CodeOutlined />}
          color="baseGrey"
        >
          Languages
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
                    <MenuItem
                      onClick={() => {
                        closeMenu;
                      }}
                    >
                      None
                    </MenuItem>
                    {availableLanguages.map((language, index) => {
                      return (
                        <MenuItem
                          onClick={() => {
                            closeMenu;
                          }}
                          key={index + 1}
                        >
                          {language}
                        </MenuItem>
                      );
                    })}
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
