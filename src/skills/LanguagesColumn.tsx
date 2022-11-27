import { Typography } from "@mui/material";
import ShowIf from "../../utils/ShowIf";
import { ColumnData } from "./Languages";

type LanguagesColumnProps = {
	columnData: ColumnData;
	isExpanded: boolean;
	developing: boolean;
	isMobile: boolean;
};

export const LanguageColumn = (props: LanguagesColumnProps): JSX.Element => {
	const { isMobile, columnData } = props;
	const { heading, tech } = columnData;

	const initialTech = tech.slice(0, 6);
	const remaining = tech.slice(6, tech.length);

	return (
		<>
			<div className='w-full pr-6 md:pr-0 md:w-[175px]'>
				<h1 className='md:mb-[-10px]'> {heading} </h1>
				<div className='flex flex-row'>
					<div className='w-[150px]'>
						{initialTech.map((item) => {
							return (
								<div className='pt-3' key={item}>
									<Typography variant='body1' color='text.secondary' key={item}>
										{item}
									</Typography>
								</div>
							);
						})}
					</div>
					<ShowIf condition={isMobile}>
						<div>
							{remaining.map((item, index) => {
								return (
									<div className='pt-3' key={item}>
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
		</>
	);
};
