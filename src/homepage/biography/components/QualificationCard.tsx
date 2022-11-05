import { CardContent, Card, Typography } from "@mui/material";
import Image from "next/future/image";
import { useContext } from "react";
import { DarkMode } from "../../../../themes/GlobalTheme";

export const QualificationCard = ({
	logo,
	title,
	location,
	lowerLocation = false,
}: {
	logo: string;
	title: string;
	location: string;
	lowerLocation?: boolean;
}) => {
	const darkMode = useContext(DarkMode);

	return (
		<Card
			sx={{
				width: 345,
				height: 300,
				boxShadow: 3,
				"&:hover": {
					backgroundColor: darkMode ? "#2D2D2D" : "#f2f2f2",
					transition: "linear 400ms",
				},
			}}>
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
					src={`/homepage/biography/qualifications/${logo}.svg`}
					alt={logo}
					width={50}
					height={50}
					style={{ width: "100%", marginBottom: "10px" }}
				/>

				<Typography
					variant='h5'
					align='center'
					style={{
						width: "100%",
						fontWeight: "bold",
						marginTop: "10px",
						lineHeight: 1.5,
					}}>
					{title}
				</Typography>

				<Typography
					variant='h5'
					align='center'
					style={{
						marginTop: lowerLocation ? "58px" : "20px",
						width: "100%",
						fontWeight: "bold",
						color: "#1565C0",
					}}>
					{location}
				</Typography>
			</CardContent>
		</Card>
	);
};
