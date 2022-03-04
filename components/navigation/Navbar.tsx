import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { IconButton, Tab, Tabs, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import React, { useState } from "react";
import useDeviceDetect from "../../utils/useDeviceDetect";
import {
  container,
  mobileHome,
  desktopHome,
  onHover,
  darkModeIcon,
} from "./NavbarStyles";

export const Navbar = (props: any) => {
  const { darkMode, setDarkMode } = props;
  const { isMobile } = useDeviceDetect();
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  const setIndicator: string[] = ["#90caf9", "#66bb6a", "#ce93d8", "#f44336"];

  return (
    <nav>
      <Tabs
        value={tab}
        onChange={handleChange}
        scrollButtons={false}
        TabIndicatorProps={{ style: { background: setIndicator[tab] } }}
        textColor="inherit"
        variant={isMobile ? "fullWidth" : "standard"}
        centered
        sx={container(isMobile)}
      >
        {isMobile ? (
          <Tab
            label={"FVM"}
            icon={
              <AccountCircleOutlinedIcon
                fontSize="small"
                color={tab === 0 ? "primary" : "inherit"}
              />
            }
            sx={mobileHome()}
          />
        ) : (
          <Tab
            label={"FRANKLIN V MOON"}
            icon={
              <AccountCircleOutlinedIcon
                fontSize="small"
                color={tab === 0 ? "primary" : "inherit"}
              />
            }
            sx={desktopHome()}
          />
        )}

        <Tab
          label="SKILLS"
          icon={
            <LightbulbOutlinedIcon
              fontSize="small"
              color={tab === 1 ? "success" : "inherit"}
            />
          }
          sx={onHover()}
        />
        <Tab
          label="TUTORIALS"
          icon={
            <SchoolOutlinedIcon
              fontSize="small"
              color={tab === 2 ? "secondary" : "inherit"}
            />
          }
          sx={onHover()}
        />
        <Tab
          label="PROJECTS"
          icon={
            <BookmarkBorderOutlinedIcon
              fontSize="small"
              color={tab === 3 ? "error" : "inherit"}
            />
          }
          sx={onHover()}
        />
        <IconButton
          onClick={() => setDarkMode(!darkMode)}
          disableRipple
          sx={darkModeIcon(isMobile)}
        >
          <Tooltip TransitionComponent={Zoom} title="Dark Mode">
            {darkMode ? (
              <Brightness6Icon sx={{ color: "#9c9c9c" }} />
            ) : (
              <Brightness3Icon sx={{ color: "#fff" }} />
            )}
          </Tooltip>
        </IconButton>
      </Tabs>
    </nav>
  );
};
