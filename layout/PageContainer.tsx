import { Container } from "@mui/material";
import React from "react";
import useDeviceDetect from "../utils/useDeviceDetect";

type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer = (props: PageContainerProps) => {
  const { children } = props;

  const { isMobile } = useDeviceDetect();

  const styling = {
    // border: "2px solid white",
    marginTop: isMobile ? "30px" : "50px",
  };

  return (
    <Container maxWidth="md" sx={styling}>
      {children}
    </Container>
  );
};