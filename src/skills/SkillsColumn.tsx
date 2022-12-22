import { SkillsGrouping } from "./components/SkillGrouping";
import { SkillsSubHeading } from "./components/SkillsSubHeading";
import { SkillData } from "./types";

export const SkillsColumn = ({
	title,
	metaData,
}: {
	title: string;
	metaData: SkillData[];
}) => {
	return (
		<div className='mt-20 ml-[-10px]'>
			<SkillsSubHeading title={title} />

			<div className='flex flex-col w-[300px] pl-16 md:pl-12'>
				{metaData.map((grouping) => {
					return (
						<div key={`${grouping.title} tools`} className='mr-6 w-[300px]'>
							<h2 className='mb-[-6px] text-[#66bb6a]'>{grouping.title}</h2>
							<SkillsGrouping grouping={grouping} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
