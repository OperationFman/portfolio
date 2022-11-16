import { Card, CardContent, Typography } from "@mui/material";
import { useContext } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";
import ShowIf from "../../../utils/ShowIf";
import useDeviceDetect from "../../../utils/useDeviceDetect";

export const ContactCard = ({
	children,
	contactMethod,
	value,
	link,
}: {
	children: React.ReactNode;
	contactMethod: string;
	value?: string;
	link?: string;
}) => {
	const darkMode = useContext(DarkMode);
	const { isMobile } = useDeviceDetect();

	const handleLinkClick = () => {
		if (link) {
			window.open(link, "_blank");
		}
	};

	return (
		<Card
			onClick={() => handleLinkClick()}
			sx={{
				width: isMobile ? 160 : 210,
				height: isMobile ? 130 : 180,
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
					paddingTop: isMobile ? "25px" : "35px",
				}}>
				{/* Icon */}
				{children}
				<Typography
					variant='h5'
					align='center'
					style={{
						width: "100%",
						fontWeight: "bold",
						marginTop: isMobile ? "15px" : "25px",
						color: "#90caf9",
					}}>
					{contactMethod}
				</Typography>
				<ShowIf condition={value && !isMobile}>
					<Typography
						variant='subtitle2'
						align='center'
						style={{
							width: "100%",
							fontWeight: "regular",
							lineHeight: 1.5,
							color: "#949494",
						}}>
						{value}
					</Typography>
				</ShowIf>
			</CardContent>
		</Card>
	);
};
