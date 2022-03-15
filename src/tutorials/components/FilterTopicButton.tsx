import QuestionAnswerOutlined from "@mui/icons-material/QuestionAnswerOutlined";
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Topic } from "../types";
import {
  closeMenu,
  keyboardNavigation,
} from "../../../utils/dropDownMenuLogic";

type FilterTopicButtonProps = {
  setTopicFilter: Dispatch<SetStateAction<Topic | undefined>>;
};

// Fix prop type
export const FilterTopicButton = (props: FilterTopicButtonProps) => {
  const { setTopicFilter: setTopicFilter } = props;

  const topics = Object.values(Topic);

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

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          endIcon={<QuestionAnswerOutlined />}
          color="baseGrey"
        >
          Topic
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
                        setTopicFilter(undefined);
                      }}
                    >
                      All
                    </MenuItem>
                    {topics.map((topic, index) => {
                      return (
                        <MenuItem
                          onClick={() => {
                            closeMenu;
                            setTopicFilter(topic);
                          }}
                          key={index}
                        >
                          {topic}
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
