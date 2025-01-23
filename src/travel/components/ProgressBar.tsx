import { LinearProgress, Tooltip, Zoom } from "@mui/material";
import styles from "../index.module.scss";
import {
	scorecardColorsPrimary,
	scorecardColorsSecondary,
} from "../../datasources/TravelMetaData";

export const ProgressBar = ({
	title,
	scores,
}: {
	title: string;
	scores: number[];
}) => {
	const scoreKeyData: any = {
		affordability: {
			title: "Affordability",
			tooltip:
				"How far does each dollar go, higher affordability means the country is cheaper",
		},
		food: {
			title: "Food",
			tooltip: "How good is the cuisine. Higher means better",
		},
		safety: { title: "Safety", tooltip: "How safe as a solo traveler" },
		accessibility: {
			title: "Accessibility",
			tooltip:
				"How easy is it to get around and operate independently without a guide. Higher means its easy to get around and book hotels",
		},
		video: {
			title: "Video",
			tooltip:
				"How well the final edited video turned out (See above). Low means I don't like it",
		},
		finalScore: {
			title: "Final Score",
			tooltip:
				"Final result with all other scores considered plus my personal luck, friends made & unique experiences",
		},
	};

	return (
		<>
			<Tooltip
				TransitionComponent={Zoom}
				title={scoreKeyData[title].tooltip}
				followCursor
				key={`score item ${title}`}>
				<div className={styles.scoreItemContainer}>
					<div className={styles.scoreBarsWrapper}>
						{scores.map((countryScore, countryIndex) => (
							<LinearProgress
								variant='determinate'
								value={countryScore === 1 ? 12 : countryScore * 10}
								className={styles.scoreBar}
								sx={{
									height: `${24 / scores.length}px`,
									"& .MuiLinearProgress-bar": {
										background: `linear-gradient(to right, ${scorecardColorsPrimary[countryIndex]}, ${scorecardColorsSecondary[countryIndex]})`,
										borderRadius: "20px",
									},
								}}
								key={`country score index ${countryIndex}`}
							/>
						))}
					</div>

					<h4 className={styles.scoreTitle}> {scoreKeyData[title].title}</h4>
				</div>
			</Tooltip>
		</>
	);
};
