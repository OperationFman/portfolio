import { SkillsSubHeading } from "./components/SkillsSubHeading";
import { Skills } from "./types";

export const SkillsColumn = ({
	title,
	metaData,
}: {
	title: string;
	metaData: Skills[];
}) => {
	return (
		<div className='mt-20 ml-[-10px]'>
			<SkillsSubHeading title={title} />

			<div className='flex flex-col w-[300px] pl-16 md:pl-12'>
				{metaData.map((grouping) => {
					return (
						<div key={`${grouping.heading} tools`} className='mr-6 w-[300px]'>
							<h1 className='mb-[-12px]'> {grouping.heading} </h1>
							{grouping.items && (
								<div className='flex flex-row flex-wrap mb-6'>
									{grouping.items.map((item) => {
										return (
											<p
												key={item}
												className='w-[50%] pr-10 mb-[-3px] lg:pr-5 '>
												{item}
											</p>
										);
									})}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
