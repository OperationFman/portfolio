import CommitIcon from "@mui/icons-material/Commit";
import { Typography } from "@mui/material";
import Image from "next/future/image";
import { useContext } from "react";
import { DarkMode } from "../../../../themes/GlobalTheme";
import ShowIf from "../../../../utils/ShowIf";

export const VolunteerListItem = ({
	logo,
	title,
	location,
	year,
	isLastElement = false,
}: {
	logo: string;
	title: string;
	location: string;
	year: string;
	isLastElement?: boolean;
}) => {
	const darkMode = useContext(DarkMode);
	const selectedTheme = darkMode ? "#13181c" : "#FFFFFF";

	return (
		<>
			<CommitIcon
				fontSize='large'
				style={{
					float: "right",
					marginRight: "-16px",
					marginTop: "5px",
					color: "#1565C0",
					backgroundColor: selectedTheme,
				}}
			/>
			<div
				style={{
					width: "100%",
					borderRight: "3px solid #1565C0",
					padding: isLastElement ? "0px 50px 0px" : "0px 50px 85px",
				}}>
				<Image
					src={`/homepage/companies/${logo}.png`}
					alt='tw'
					width='200'
					height='50'
					style={{
						float: "right",
						height: 40,
						width: "auto",
						paddingRight: "5px",
					}}
				/>
				<div style={{ height: 47 }} />

				<Typography
					variant='subtitle1'
					align='right'
					style={{ paddingRight: "5px", lineHeight: 1.5 }}>
					{title}
				</Typography>
				<Typography
					variant='subtitle1'
					color='#949494'
					align='right'
					style={{ marginRight: "6px", marginTop: "5px" }}>
					{location}
				</Typography>
				<Typography
					variant='subtitle1'
					color='#949494'
					align='right'
					style={{ marginRight: "6px", marginTop: "-10px" }}>
					{year}
				</Typography>
			</div>
		</>
	);
};
