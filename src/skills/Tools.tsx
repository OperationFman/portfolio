import ConstructionIcon from "@mui/icons-material/Construction";
import { Card, CardContent } from "@mui/material";
import { groupedToolsMetaData } from "../datasources/SkillsMetaData";
import { BoxListing } from "./components/BoxListing";
import { SkillSubHeading } from "./components/SkillSubHeading";

export const Tools = () => {
	return (
		<div className='mt-20 w-full sm:mr-4'>
			<SkillSubHeading title='Tools'>
				<ConstructionIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<Card>
				<CardContent>
					<div className='mb-5 pl-10'>
						<BoxListing metaData={groupedToolsMetaData} />
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
