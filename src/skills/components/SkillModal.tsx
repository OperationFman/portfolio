import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { DialogTitle, Divider } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
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

	return (
		<div className='mt-2 mb-4 md:m-4 md:mt-3'>
			<DialogTitle>
				<div className='flex justify-between items-center'>
					<h3 className='m-0 font-bold'>{heading}</h3>
					<div className='cursor-pointer'>
						<CloseRoundedIcon
							color='disabled'
							onClick={() => setShowModal(false)}
						/>
					</div>
				</div>
			</DialogTitle>
			<Divider />
			<div className='ml-12 mr-12 mb-14'>
				<p>{knowledge}</p>
				<Divider />
				<div className='flex'>
					<h3>Knowledge:</h3>
					<h3 className='ml-4 font-normal'>{proficiency}</h3>
				</div>
				<Divider />
				<p>{description}</p>
			</div>
		</div>
	);
};
