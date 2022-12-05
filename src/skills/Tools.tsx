import { SkillSubHeading } from "./components/SkillSubHeading";
import ConstructionIcon from "@mui/icons-material/Construction";
import { Card, CardContent, Typography } from "@mui/material";

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
				<CardContent className='mb-5 md:ml-12 flex flex-row flex-wrap'>
					{toolsMetaData.map((item) => {
						if (item.grouping === "Other") {
							return;
						}

						return (
							<div
								key={`${item.grouping} tools`}
								className='w-[200px] mb-4 ml-2 mr-2'>
								<h1 className='sm:mb-2'> {item.grouping} </h1>
								<div className='flex flex-row flex-wrap'>
									{item.tools.map((tool) => {
										return (
											<Typography
												variant='body1'
												color='text.secondary'
												key={tool}
												className='w-[80px] mr-4 mb-2'>
												{tool}
											</Typography>
										);
									})}
								</div>
							</div>
						);
					})}
				</CardContent>
			</Card>
		</div>
	);
};
