import { SkillSubHeading } from "./components/SkillSubHeading";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { Card, CardContent } from "@mui/material";

export const Personality = () => {
	return (
		<div className='mt-20 w-full sm:ml-5'>
			<SkillSubHeading title='Personality'>
				<InsertEmoticonIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<Card>
				<CardContent>
					<h1 className='sm:mb-[-7px]'> Stuff </h1>
				</CardContent>
			</Card>
		</div>
	);
};
