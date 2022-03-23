import { Container } from "@mui/material";
import React from "react";
import useDeviceDetect from "../../utils/useDeviceDetect";

type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer = (props: PageContainerProps) => {
  const { children } = props;

  const { isMobile } = useDeviceDetect();

  const styling = {
    // border: "2px solid blue",
    marginTop: isMobile ? "20px" : "50px",
  };

  return (
    <Container maxWidth="lg" sx={styling}>
      {children}
    </Container>
  );
};
