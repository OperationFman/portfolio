import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
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
		transition: "400ms",
		...styleOverrides,
	};

	const [subtleFade, setSubtleFade] = useState(styling);

	useEffect(
		() => () => {
			setSubtleFade({ styling, ...{ opacity: 0 } });
		},
		[],
	);

	return (
		<Container maxWidth='lg' sx={subtleFade}>
			{children}
		</Container>
	);
};
