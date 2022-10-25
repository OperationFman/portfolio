// import { Typography } from "@mui/material";
// import { intervalToDuration } from "date-fns";
// import { useEffect, useState } from "react";
// // @ts-ignore
// import ReactTypingEffect from "react-typing-effect";

export const TitleSection = (): JSX.Element => {
	// const timeWorked = () => {
	// 	return intervalToDuration({
	// 		start: new Date("August 2, 2021 09:00:00"),
	// 		end: new Date(),
	// 	});
	// };

	// const pluralTime = (timeUnit: string, value: number | undefined) => {
	// 	if (value === undefined) {
	// 		return `0 ${timeUnit}s`;
	// 	}
	// 	return value === 1 ? `${value} ${timeUnit}` : `${value} ${timeUnit}s`;
	// };

	// const [periodWorked, setPeriodWorked] = useState<Duration>(timeWorked());
	const TitleSectionStyles = {
		container: {
			marginTop: "20px",
			lineHeight: 1,
		},
		titleFont: {
			fontSize: "55px",
			fontWeight: "bold",
		},
		autoType: {
			fontSize: "50px",
			fontWeight: "lighter",
		},
		blurb: { fontStyle: "italic", marginTop: "50px" },
	};

	// useEffect(() => {
	// 	const thirtySecondInterval = setInterval(() => {
	// 		setPeriodWorked(timeWorked());
	// 	}, 30 * 1000);
	// 	return () => clearInterval(thirtySecondInterval);
	// });

	return (
		<div style={TitleSectionStyles.container}>
			<span style={TitleSectionStyles.titleFont}>Franklin</span>
			<span style={TitleSectionStyles.titleFont}>{` V `}</span>
			<span
				style={{
					color: "#1565C0",
					...TitleSectionStyles.titleFont,
				}}>
				Moon
			</span>

			{/* <br />ß
	 		<ReactTypingEffect
	 			text={["Developer", "Volunteer", "Designer"]}
	 			cursorRenderer={(cursor: string) => (
	 				<span style={{ color: "#1565C0", ...TitleSectionStyles.autoType }}>
	 					{cursor}
	 				</span>
	 			)}
	 			displayTextRenderer={(text: string) => {
	 				return <span style={TitleSectionStyles.autoType}>{text}</span>;
	 			}}
	 			typingDelay='1500ms'
	 		/>

	 		<Typography
	 			variant='subtitle1'
	 			align='left'
	 			color='baseGrey'
	 			sx={TitleSectionStyles.blurb}>
	 			Full-stack software developer with a passion for user centric design,
	 			volunteering globally and advocating for social change
	 			<br />
	 			<br />
	 			Practicing professional for {pluralTime(
	 				"year",
	 				periodWorked?.years,
	 			)}{" "}
	 			{pluralTime("month", periodWorked?.months)}{" "}
	 			{pluralTime("day", periodWorked?.days)}{" "}
	 			{pluralTime("hour", periodWorked?.hours)}
	 			{" and "}
	 			{pluralTime("minute", periodWorked?.minutes)}{" "}
	 		</Typography> */}
		</div>
	);
};
