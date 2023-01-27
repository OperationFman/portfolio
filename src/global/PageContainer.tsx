import { Container } from "@mui/material";
import React from "react";
import styles from "./PageContainer.module.scss";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<Container maxWidth='lg' className={styles.container}>
			{children}
		</Container>
	);
};
