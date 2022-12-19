import { ConvictionGrouping } from "./components/ConvictionGrouping";
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
					return <ConvictionGrouping grouping={grouping} />;
				})}
			</div>
		</div>
	);
};
