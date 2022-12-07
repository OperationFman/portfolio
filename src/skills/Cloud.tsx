import { SkillSubHeading } from "./components/SkillSubHeading";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { BoxListing } from "./components/BoxListing";
import { groupedCloudMetaData } from "../datasources/SkillsMetaData";

export const Cloud = () => {
	return (
		<div className='mt-20 w-full sm:ml-5'>
			<SkillSubHeading title='Cloud'>
				<FilterDramaIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<div className='ml-10 mt-4'>
				<BoxListing metaData={groupedCloudMetaData} />
			</div>
		</div>
	);
};
