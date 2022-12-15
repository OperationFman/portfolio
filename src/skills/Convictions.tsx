import { ConvictionsRow } from "./types";

export const Convictions = ({
	title,
	metaData,
	splitStringAtFullStop,
}: {
	title: string;
	metaData: ConvictionsRow[];
	splitStringAtFullStop: (str: string) => string[];
}) => {
	return (
		<div className='mt-20 ml-[-10px]'>
			<div className='flex justify-center'>
				<h1 className='m-0 self-center text-[#66bb6a]'>{title}</h1>
			</div>
			<div className='flex flex-row w-[300px] pl-16 md:pl-12'>
				{metaData.map((grouping) => {
					const blurbArray = splitStringAtFullStop(grouping.blurb);
					return (
						<div
							key={`${grouping.heading} conviction`}
							className='mr-6 w-[300px]'>
							<h1 className='mb-[-12px]'> {grouping.heading} </h1>
							{blurbArray &&
								blurbArray.map((sentence, index) => {
									return (
										<p key={index} className='mr-8 mb-4'>
											{sentence}.
										</p>
									);
								})}
						</div>
					);
				})}
			</div>
		</div>
	);
};
