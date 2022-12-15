import { SkillsSubHeading } from "./components/SkillsSubHeading";
import { ConvictionsRow } from "./types";

export const Convictions = ({
	title,
	metaData,
	splitStringAtFullStop,
}: {
	title: string;
	metaData: ConvictionsRow[];
	splitStringAtFullStop: (str: string) => string[];
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
							<h1 className='w-[200px]'>{grouping.heading}</h1>
							{blurbArray.map((sentence, index) => {
								return <p key={index}>{sentence}.</p>;
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};
