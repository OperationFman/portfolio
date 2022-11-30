import { Typography } from "@mui/material";
import ShowIf from "../../utils/ShowIf";
import { ColumnData } from "./types";

type LanguagesColumnProps = {
	columnData: ColumnData;
	isExpanded: boolean;
	isDeveloping: boolean | undefined;
	isMobile: boolean;
};

export const LanguageColumn = (props: LanguagesColumnProps): JSX.Element => {
	const { columnData, isExpanded, isMobile, isDeveloping } = props;
	const { heading, tech } = columnData;

	const techCenter = Math.floor(tech.length / 2);
	const techBreakpoint = techCenter > 6 ? techCenter : 6;

	const primeTech = tech.slice(0, techBreakpoint);
	const extraTech = tech.slice(techBreakpoint, tech.length);

	return (
		<div className='relative'>
			<ShowIf condition={isDeveloping}>
				<p className='absolute w-full top-14 text-center'>Developing...</p>
			</ShowIf>
			<div
				className={
					isDeveloping
						? " bg-black h-[98%] rounded-lg opacity-20 pb-4 pl-4 mr-5 "
						: ""
				}>
				<div className='w-full pr-6 sm:pr-0 sm:w-[175px]'>
					<h1 className='sm:mb-[-7px]'> {heading} </h1>
					<div className='flex flex-row sm:block'>
						<div className='w-[150px] mb-4'>
							{primeTech.map((item, index) => {
								return (
									<div className='pt-3' key={`${index} ${item}`}>
										<Typography
											variant='body1'
											color='text.secondary'
											key={item}>
											{item}
										</Typography>
									</div>
								);
							})}
						</div>
						<ShowIf condition={isExpanded || isMobile}>
							<div className='w-[150px]'>
								{extraTech.map((item, index) => {
									return (
										<div className='pl-1 pt-3' key={`${index} ${item}`}>
											<Typography
												variant='body1'
												color='text.secondary'
												key={index}>
												{item}
											</Typography>
										</div>
									);
								})}
							</div>
						</ShowIf>
					</div>
				</div>
			</div>
		</div>
	);
};
