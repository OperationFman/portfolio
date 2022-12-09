import ConstructionIcon from "@mui/icons-material/Construction";
import { Card, CardContent } from "@mui/material";
import { toolsMetaData } from "../datasources/SkillsMetaData";
import { BoxListing } from "./components/BoxListing";
import { SkillSubHeading } from "./components/SkillSubHeading";

export const Tools = () => {
	return (
		<div className='mt-36 ml-[-10px] pb-20 sm:mt-20'>
			<SkillSubHeading title='Tools'>
				<ConstructionIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<BoxListing metaData={toolsMetaData} />
		</div>
	);
};
