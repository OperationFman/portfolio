import { SkillSubHeading } from "./components/SkillSubHeading";
import ConstructionIcon from "@mui/icons-material/Construction";
import { Card, CardContent } from "@mui/material";

export const Tools = () => {
	const toolsMetaData = [
		{
			grouping: "Adobe",
			tools: [
				"After Effects",
				"Premiere Pro",
				"Photoshop",
				"Illustrator",
				"XD",
				"InDesign",
			],
		},
		{
			grouping: "Linux",
			tools: ["Raspbian", "Arch", "Debian", "Ubuntu"],
		},
		{
			grouping: "Atlassian",
			tools: ["Jira", "Confluence"],
		},
		{
			grouping: "Other",
			tools: [
				"Github",
				"Blackmagic Davinci Resolve",
				"Figma",
				"Sony Vegas, Gimp",
				"Blender",
				"MacOS",
				"Postman",
				"Insomnia",
			],
		},
	];

	return (
		<div className='mt-20 w-full sm:mr-5'>
			<SkillSubHeading title='Tools'>
				<ConstructionIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<Card>
				<CardContent>
					<h1 className='sm:mb-[-7px]'> Stuff </h1>
				</CardContent>
			</Card>
		</div>
	);
};
