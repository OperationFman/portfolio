import { MetaData } from "../types";

export const LanguagesRow = ({
	item,
	handleOpenModal,
}: {
	item: MetaData;
	handleOpenModal: (payload: MetaData) => void;
}) => {
	const { title, knowledge, proficiency, description } = item;

	const modalPayload: MetaData = {
		title: title,
		knowledge,
		proficiency,
		description,
	};

	return (
		<div
			className='pt-3 cursor-pointer'
			onClick={() => handleOpenModal(modalPayload)}>
			<div style={{ color: "#9c9c9c" }}>{item.title}</div>
		</div>
	);
};
