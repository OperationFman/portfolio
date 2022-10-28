import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/future/image";
import ShowIf from "../../../../utils/ShowIf";

export const ForYouCard = ({
	logo,
	title,
	paragraph1,
	paragraph2,
	paragraphGap = true,
}: {
	logo: string;
	title: string;
	paragraph1: string;
	paragraph2?: string;
	paragraphGap?: boolean;
}) => {
	const titleOnlyFirstLetter = title
		.split(" ")
		.map((word) => word[0])
		.join("");

	const titleNoFirstLetter = title.substring(1);

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
					src={`/homepage/biography/${logo}.svg`}
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
