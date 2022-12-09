import { SkillSubHeading } from "./components/SkillSubHeading";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { BoxListing } from "./components/BoxListing";
import { convictionMetaData } from "../datasources/SkillsMetaData";

export const Convictions = () => {
	return (
		<div className='mt-20 ml-[-10px] pb-20'>
			<SkillSubHeading title='Convictions'>
				<EmojiEventsIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<BoxListing metaData={convictionMetaData} />
		</div>
	);
};
