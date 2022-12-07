import { BoxListingMetaData } from "../types";

export const BoxListing = ({
	metaData,
}: {
	metaData: BoxListingMetaData[];
}) => {
	return (
		<div className='flex flex-col w-[300px] pl-6'>
			{metaData.map((grouping) => {
				return (
					<div key={`${grouping.heading} tools`} className='mr-6 w-[300px]'>
						<h1 className='mb-1'> {grouping.heading} </h1>
						{grouping.items && (
							<div className='flex flex-row flex-wrap mb-4'>
								{grouping.items.map((item) => {
									return (
										<p key={item} className='w-[50%] pr-10 mb-[-3px] lg:pr-5 '>
											{item}
										</p>
									);
								})}
							</div>
						)}
						{grouping.blurb && <p>{grouping.blurb}</p>}
					</div>
				);
			})}
		</div>
	);
};
