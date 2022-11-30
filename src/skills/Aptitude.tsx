import { SkillSubHeading } from "./components/SkillSubHeading";
import PsychologyIcon from "@mui/icons-material/Psychology";

export const Aptitude = () => {
	return (
		<div className='mt-20 w-full sm:mr-5 ml-[-4px] sm:ml-0'>
			<SkillSubHeading title='Aptitude'>
				<PsychologyIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<div className='ml-4'>
				<h1 className='sm:mb-[-7px]'> Stuff </h1>
			</div>
		</div>
	);
};
