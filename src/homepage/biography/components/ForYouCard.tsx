import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/future/image";

export const ForYouCard = () => {
	return (
		<Card sx={{ width: 415, height: 440 }}>
			<CardContent
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					alignItems: "flex-end",
					justifyContent: "center",
					padding: "30px",
				}}>
				<Image
					src={`/homepage/biography/code.svg`}
					alt='Train'
					width={60}
					height={60}
					style={{ width: "100%", marginBottom: "20px" }}
				/>

				<Typography
					variant='h5'
					align='center'
					style={{ width: "100%", fontWeight: "bold", marginBottom: "20px" }}>
					<span style={{ color: "#1565C0" }}>P</span>
					<span>rogramming</span>
				</Typography>

				<Typography
					align='center'
					variant='h5'
					style={{ width: "100%", marginBottom: "40px", lineHeight: "40px" }}>
					Champion best practices like TDD, SOLID principles, Object Oriented
					design and Pair Programming.
				</Typography>

				<Typography align='center' variant='h5' style={{ width: "100%" }}>
					See Skills for more.
				</Typography>
			</CardContent>
		</Card>
	);
};
