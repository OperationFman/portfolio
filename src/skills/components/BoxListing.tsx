import { BoxListingMetaData } from "../types";

export const BoxListing = ({
	metaData,
}: {
	metaData: BoxListingMetaData[];
}) => {
	return (
		<div className='flex flex-col w-[300px] pl-16 md:pl-12'>
			{metaData.map((grouping) => {
				const blurbArray = grouping.blurb ? grouping.blurb.split(".") : [];

				return (
					<div key={`${grouping.heading} tools`} className='mr-6 w-[300px]'>
						<h1 className='mb-[-12px]'> {grouping.heading} </h1>
						{grouping.items && (
							<div className='flex flex-row flex-wrap mb-6'>
								{grouping.items.map((item) => {
									return (
										<p key={item} className='w-[50%] pr-10 mb-[-3px] lg:pr-5 '>
											{item}
										</p>
									);
								})}
							</div>
						)}
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
	);
};
