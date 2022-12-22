import { useContext } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";
import ShowIf from "../../../utils/ShowIf";
import { ColumnData, MetaData } from "../types";
import { LanguagesRow } from "./LanguagesRow";

type LanguagesColumnProps = {
	columnData: ColumnData;
	isExpanded: boolean;
	isDeveloping: boolean | undefined;
	isMobile: boolean;
	handleOpenModal: (payload: MetaData) => void;
};

export const LanguagesColumn = (props: LanguagesColumnProps): JSX.Element => {
	const { columnData, isExpanded, isMobile, isDeveloping, handleOpenModal } =
		props;
	const { title, data, knowledge, proficiency, description } = columnData;
	const darkMode = useContext(DarkMode);

	const TOTAL_PRIME_ITEMS = 6;
	const primeTech = data.slice(0, TOTAL_PRIME_ITEMS);
	const extraTech = data.slice(TOTAL_PRIME_ITEMS, data.length);

	// Remove when switched to using tailwind global theme over MUI
	const developingStyle = {
		color: darkMode ? "bg-black" : "bg-[#b9b9b9]",
		opacity: darkMode ? "opacity-10" : "opacity-40",
	};

	const modalPayload: MetaData = {
		title,
		knowledge,
		proficiency,
		description,
	};

	return (
		<div className='relative'>
			<ShowIf condition={isDeveloping}>
				<p className='absolute w-full top-11 text-center pr-10'>
					Developing...
				</p>
			</ShowIf>
			<div
				className={
					isDeveloping
						? `${developingStyle.color} ${developingStyle.opacity} h-[98%] rounded-lg pb-4 pl-4 mr-10`
						: ""
				}>
				<div className='w-full pr-6 sm:pr-0 sm:w-[175px]'>
					<h2
						className='sm:mb-[-7px] text-[#66bb6a] cursor-pointer'
						onClick={() => handleOpenModal(modalPayload)}>
						{title}
					</h2>
					<div className='flex flex-row sm:block'>
						<div className='w-[150px]'>
							{primeTech.map((item, index) => {
								return (
									<LanguagesRow
										item={item}
										handleOpenModal={handleOpenModal}
										key={index}
									/>
								);
							})}
						</div>
						<ShowIf condition={isExpanded || isMobile}>
							<div className='w-[150px]'>
								{extraTech.map((item, index) => {
									return (
										<LanguagesRow
											item={item}
											handleOpenModal={handleOpenModal}
											key={index}
										/>
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
