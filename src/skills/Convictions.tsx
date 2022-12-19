import { Typography } from "@mui/material";
import { splitStringAtFullStop } from "../../utils/splitStringAtFullStop";
import { SkillsSubHeading } from "./components/SkillsSubHeading";
import { ConvictionsRow } from "./types";

export const Convictions = ({
	title,
	metaData,
}: {
	title: string;
	metaData: ConvictionsRow[];
}) => {
	return (
		<div className='mt-20'>
			<SkillsSubHeading title={title} />
			<div className='flex justify-center flex-wrap'>
				{metaData.map((grouping) => {
					const blurbArray = splitStringAtFullStop(grouping.blurb);
					return (
						<div
							key={`${grouping.heading} conviction`}
							className='w-full sm:w-1/2 md:w-1/3 p-4'>
							<h2 className='w-[200px] text-[#66bb6a]'>{grouping.heading}</h2>
							{blurbArray.map((sentence, index) => {
								return (
									<div className={"mb-6"}>
										<Typography
											variant='body1'
											color='text.secondary'
											key={index}>
											{sentence}
										</Typography>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};
