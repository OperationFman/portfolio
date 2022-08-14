import { Container } from "@mui/material";
import React from "react";
import useDeviceDetect from "../../utils/useDeviceDetect";

type PageContainerProps = {
  children: React.ReactNode;
  styleOverrides?: any;
};

export const PageContainer = (props: PageContainerProps) => {
  const { children, styleOverrides } = props;

  const { isMobile } = useDeviceDetect();

  const styling = {
    marginTop: isMobile ? "20px" : "50px",
    ...styleOverrides,
  };

  return (
    <Container maxWidth="lg" sx={styling}>
      {children}
    </Container>
  );
};
