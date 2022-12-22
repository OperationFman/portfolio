import { Typography } from "@mui/material";
import { SkillData } from "../types";

export const SkillsGrouping = ({ grouping }: { grouping: SkillData }) => {
	return (
		<div className='flex flex-row flex-wrap mb-6'>
			{grouping.data.map((item) => {
				return (
					<div
						className='w-[50%] pt-2 pb-2 pr-10 mb-[-3px] lg:pr-5'
						key={item.title}>
						<Typography variant='body1' color='text.secondary'>
							{item.title}
						</Typography>
					</div>
				);
			})}
		</div>
	);
};
