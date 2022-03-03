import { Button, IconButton, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import Brightness3Icon from "@mui/icons-material/Brightness3";

export const Navbar = (props: any) => {
  const { darkMode, setDarkMode } = props;
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  return (
    <nav>
      <Tabs
        value={tab}
        onChange={handleChange}
        aria-label="icon label tabs example"
        sx={{ backgroundColor: "grey.900" }}
      >
        <Tab label="FRANKLIN V MOON" />
        <Tab icon={<PersonOutlineIcon />} label="SKILLS" />
        <Tab icon={<PersonOutlineIcon />} label="TUTORIALS" />
        <Tab icon={<PersonOutlineIcon />} label="PROJECTS" />

        <IconButton size="large" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <Brightness6Icon fontSize="inherit" />
          ) : (
            <Brightness3Icon fontSize="inherit" />
          )}
        </IconButton>
      </Tabs>
    </nav>
  );
};
