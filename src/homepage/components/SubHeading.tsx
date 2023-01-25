import React from "react";

export const SubHeading = ({ text }: { text: string }) => {
	return (
		<div className='flex justify-center mt-[100px]'>
			<h1 className='text-center text-5xl font-bold'>
				{text}
				<div className='flex relative justify-center'>
					<div className='absolute w-[150px] mt-[6px] border-solid border-b-[1px] border-[#42a5f5] opacity-20  md:inset-[-10%] md:w-[120%]'></div>
				</div>
			</h1>
		</div>
	);
};
