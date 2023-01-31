import { MetaData, SkillData } from "../types";

export const SkillsGrouping = ({
	grouping,
	handleOpenModal,
}: {
	grouping: SkillData;
	handleOpenModal: (payload: MetaData) => void;
}) => {
	return (
		<div className='flex flex-row flex-wrap mb-6'>
			{grouping.data.map((item) => {
				const { title, knowledge, proficiency, description } = item;

				const modalPayload: MetaData = {
					title,
					knowledge,
					proficiency,
					description,
				};
				return (
					<div
						className='w-[50%] pt-2 pb-2 pr-10 mb-[-3px] lg:pr-5  cursor-pointer'
						onClick={() => handleOpenModal(modalPayload)}
						key={item.title}>
						<div style={{ color: "#9c9c9c" }}>{item.title}</div>
					</div>
				);
			})}
		</div>
	);
};
