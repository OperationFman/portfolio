import { Container } from "@mui/material";
import React from "react";
import styles from "./PageContainer.module.scss";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			style={{
				animation: "fadeIn 1000ms ease-in-out",
				opacity: 1,
			}}>
			<Container maxWidth='lg' className={styles.container}>
				{children}
			</Container>
		</div>
	);
};
