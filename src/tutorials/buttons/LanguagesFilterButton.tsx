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
  const {
    setLanguagesFilter: setLanguagesFilter,
    languagesFilter,
    availableLanguages,
  } = props;

  const handleNoneSelected = (): void => {
    const emptyLanguageArray: Languages[] = [];
    setLanguagesFilter(emptyLanguageArray);
  };

  const handleToggleLanguageSelection = (language: Languages): void => {
    console.log("toggle Language");
    const languageIndex = languagesFilter.indexOf(language);

    if (languageIndex === -1) {
      languagesFilter.push(language);
      setLanguagesFilter(languagesFilter);
    } else {
      const langFilter = languagesFilter.slice(languageIndex);
      setLanguagesFilter(langFilter);
    }
  };

  const isNoneHighlighted = (): SxProps<Theme> => {
    console.log({ languagesFilter });
    if (languagesFilter.length === 0) {
      return {};
    }
    return { color: "#8c8c8c" };
  };

  const isHighlighted = (language: Languages): SxProps<Theme> => {
    if (
      languagesFilter.includes(language) &&
      availableLanguages.length !== languagesFilter.length
    ) {
      return {};
    }

    return { color: "#8c8c8c" };
  };

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
                        handleNoneSelected();
                      }}
                      sx={isNoneHighlighted()}
                    >
                      None
                    </MenuItem>
                    {availableLanguages.map((language, index) => {
                      return (
                        <MenuItem
                          onClick={() => {
                            closeMenu;
                            handleToggleLanguageSelection(language);
                          }}
                          key={index + 1}
                          sx={isHighlighted(language)}
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
