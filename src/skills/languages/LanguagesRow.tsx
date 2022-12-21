import { Typography } from "@mui/material";
import { Payload, Tech } from "../types";

export const LanguagesRow = ({
	item,
	handleOpenModal,
}: {
	item: Tech;
	handleOpenModal: (payload: Payload) => void;
}) => {
	const { title, knowledge, proficiency, description } = item;

	const modalPayload: Payload = {
		heading: title,
		knowledge,
		proficiency,
		description,
	};

	return (
		<div
			className='pt-3 cursor-pointer'
			onClick={() => handleOpenModal(modalPayload)}>
			<Typography variant='body1' color='text.secondary'>
				{item.title}
			</Typography>
		</div>
	);
};
