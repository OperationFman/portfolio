import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { DialogTitle, Divider } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { splitStringAtFullStop } from "../../../utils/splitStringAtFullStop";
import { Payload } from "../types";

export const SkillModal = (
	setShowModal: Dispatch<SetStateAction<boolean>>,
	payload: Payload | undefined,
) => {
	if (
		!payload ||
		!payload?.heading ||
		!payload?.knowledge ||
		!payload?.proficiency ||
		!payload?.description
	) {
		return;
	}

	const { heading, knowledge, proficiency, description } = payload;

	const knowledgeSentences = splitStringAtFullStop(knowledge);
	const descriptionSentences = splitStringAtFullStop(description);

	return (
		<div className='mt-2 mb-4 md:m-4 md:mt-3'>
			<DialogTitle>
				<div className='flex justify-between items-center'>
					<h3 className='m-0 ml-6 font-bold'>{heading}</h3>
					<div className='cursor-pointer'>
						<CloseRoundedIcon
							color='disabled'
							onClick={() => setShowModal(false)}
						/>
					</div>
				</div>
			</DialogTitle>
			<div className='border-[0.5px] border-solid border-[#66bb6a] ml-4 mr-4' />
			<div className='ml-12 mr-12 mb-14'>
				{knowledgeSentences.map((sentence, index) => {
					return <p key={index}>{sentence}</p>;
				})}

				<Divider />
				<div className='sm:flex'>
					<h3 className='mb-0 sm:mb-5'>Knowledge:</h3>
					<h3 className='font-normal mt-0 sm:mt-[19px] sm:ml-4'>
						{proficiency}
					</h3>
				</div>
				<Divider />
				{descriptionSentences.map((sentence, index) => {
					return <p key={index}>{sentence}</p>;
				})}
			</div>
		</div>
	);
};
