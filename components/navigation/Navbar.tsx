import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        Navbar
      </Link>
      <Button variant="text">Text</Button>
    </nav>
  );
};
