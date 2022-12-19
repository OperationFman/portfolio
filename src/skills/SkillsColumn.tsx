import { Typography } from "@mui/material";
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
							<h2 className='mb-[-6px] text-[#66bb6a]'>{grouping.heading}</h2>
							{grouping.items && (
								<div className='flex flex-row flex-wrap mb-6'>
									{grouping.items.map((item) => {
										return (
											<div
												className='w-[50%] pt-2 pb-2 pr-10 mb-[-3px] lg:pr-5'
												key={item}>
												<Typography variant='body1' color='text.secondary'>
													{item}
												</Typography>
											</div>
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
