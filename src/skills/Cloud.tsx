import { SkillSubHeading } from "./components/SkillSubHeading";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { BoxListing } from "./components/BoxListing";
import { cloudMetaData } from "../datasources/SkillsMetaData";

export const Cloud = () => {
	return (
		<div className='mt-20 ml-[-10px]'>
			<SkillSubHeading title='Cloud'>
				<FilterDramaIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<BoxListing metaData={cloudMetaData} />
		</div>
	);
};
