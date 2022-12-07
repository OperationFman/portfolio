import ConstructionIcon from "@mui/icons-material/Construction";
import { Card, CardContent } from "@mui/material";
import { groupedToolsMetaData } from "../datasources/SkillsMetaData";
import { SkillSubHeading } from "./components/SkillSubHeading";

export const Tools = () => {
	return (
		<div className='mt-20 w-full sm:mr-4'>
			<SkillSubHeading title='Tools'>
				<ConstructionIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<Card>
				<CardContent className='mb-5 pl-10 flex flex-col flex-wrap lg:pl-12 lg:h-[520px]'>
					{groupedToolsMetaData.map((item) => {
						return (
							<div
								key={`${item.grouping} tools`}
								className='w-[94%] mr-2 lg:w-[220px]'>
								<h1 className='mb-[-7px]'> {item.grouping} </h1>
								<div className='flex flex-row flex-wrap mb-4'>
									{item.tools.map((tool) => {
										return (
											<p
												key={tool}
												className='w-[50%] pr-10 mb-[-8px] lg:pr-5 '>
												{tool}
											</p>
										);
									})}
								</div>
							</div>
						);
					})}
				</CardContent>
			</Card>
		</div>
	);
};
