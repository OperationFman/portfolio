import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/future/image";
import { useContext } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";
import ShowIf from "../../../utils/ShowIf";

export const ForYouCard = ({
	isMobile,
	logo,
	title,
	paragraph1,
	paragraph2,
	paragraphGap = true,
}: {
	isMobile: boolean;
	logo: string;
	title: string;
	paragraph1: string;
	paragraph2?: string;
	paragraphGap?: boolean;
}) => {
	const darkMode = useContext(DarkMode);
	const titleOnlyFirstLetter = title
		.split(" ")
		.map((word) => word[0])
		.join("");

	const titleNoFirstLetter = title.substring(1);

	return (
		<Card
			sx={{
				width: isMobile ? 345 : 415,
				height: isMobile ? 480 : 440,
				boxShadow: 5,
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
					src={`/homepage/foryou/${logo}.svg`}
					alt={logo}
					width={60}
					height={60}
					style={{ width: "100%", marginBottom: "20px" }}
				/>

				<Typography
					variant='h5'
					align='center'
					style={{ width: "100%", fontWeight: "bold", marginBottom: "20px" }}>
					<span style={{ color: "#1565C0" }}>{titleOnlyFirstLetter}</span>
					<span>{titleNoFirstLetter}</span>
				</Typography>

				<Typography
					align='center'
					variant='h5'
					style={{
						width: "100%",
						marginBottom: paragraphGap ? "40px" : "",
						lineHeight: "40px",
					}}>
					{paragraph1}
				</Typography>

				<ShowIf condition={paragraph2}>
					<Typography
						align='center'
						variant='h5'
						style={{ width: "100%", lineHeight: "40px" }}>
						{paragraph2}
					</Typography>
				</ShowIf>
			</CardContent>
		</Card>
	);
};
