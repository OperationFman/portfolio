import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	LinearProgress,
	Tooltip,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { TutorialMetaData } from "../../types";
import { subTitleShortener, titleShortener } from "./textFormatter";

type TutorialCardProps = {
	cardData: TutorialMetaData;
	accentColor: string;
};

export const TutorialCard = (props: TutorialCardProps): JSX.Element => {
	const { cardData, accentColor } = props;
	const router = useRouter();

	const [loading, setLoading] = useState(false);

	return (
		<div
			onClick={() => {
				setLoading(true);
				router.push(`tutorials/${cardData.link}`);
			}}>
			<Card sx={{ maxWidth: 345, boxShadow: 3 }}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='180'
						alt={cardData.title}
						image={cardData.thumbnail}
					/>
					<CardContent sx={{ height: 140 }}>
						<Box
							sx={{
								height: "25px",
								margin: "-35px 0px 0px 0px",
								padding: "0px 15px",
								border: `2px solid ${accentColor}`,
								borderRadius: 6,
								position: "absolute",
								backgroundColor: "background.paper",
								boxShadow: 2,
							}}>
							<div
								style={{
									fontWeight: 200,
									textAlign: "right",
									marginTop: "2px",
								}}>
								{cardData.topic}
							</div>
						</Box>
						<div
							style={{
								marginBottom: loading ? "0px" : "5px",
								fontSize: "22px",
								paddingLeft: "5px",
							}}>
							{titleShortener(cardData.title)}
						</div>
						<Tooltip title={cardData.subTitle} followCursor enterDelay={100}>
							<div
								style={{
									padding: "10px 0 0 5px",
									fontWeight: 200,
									fontSize: "15px",
									color: "#9c9c9c",
								}}>
								{subTitleShortener(cardData.subTitle)}
							</div>
						</Tooltip>
					</CardContent>
					{loading && <LinearProgress color='secondary' />}
				</CardActionArea>
			</Card>
		</div>
	);
};
