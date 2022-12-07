import { ListingMetaData } from "../types";

export const BoxListing = ({ metaData }: { metaData: ListingMetaData[] }) => {
	return (
		<div className='flex flex-col flex-wrap content-center xl:h-[420px]'>
			{metaData.map((grouping) => {
				return (
					<div
						key={`${grouping.heading} tools`}
						className='w-[94%] h-[50%] mr-6 lg:w-[220px]'>
						<h1 className='mb-[-7px]'> {grouping.heading} </h1>
						<div className='flex flex-row flex-wrap mb-4'>
							{grouping.items.map((item) => {
								return (
									<p key={item} className='w-[50%] pr-10 mb-[-3px] lg:pr-5 '>
										{item}
									</p>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};
