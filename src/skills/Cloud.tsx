import { SkillSubHeading } from "./components/SkillSubHeading";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

export const Cloud = () => {
	return (
		<div className='mt-20 w-full sm:ml-5'>
			<SkillSubHeading title='Cloud'>
				<FilterDramaIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<div className='ml-4'>
				<h1 className='sm:mb-[-7px]'> Stuff </h1>
			</div>
		</div>
	);
};
