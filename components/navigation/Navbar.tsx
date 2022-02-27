import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export const Navbar = (props: any) => {
  const { darkMode, setDarkMode } = props;

  return (
    <nav>
      <Link href="/">Navbar</Link>
      <Button variant="text" onClick={() => setDarkMode(!darkMode)}>
        TOGGLE DARKMODE - Dont forget to add types to all this
      </Button>
    </nav>
  );
};
