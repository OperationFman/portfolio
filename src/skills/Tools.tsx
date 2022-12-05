import { SkillSubHeading } from "./components/SkillSubHeading";
import ConstructionIcon from "@mui/icons-material/Construction";
import { Card, CardContent, Typography } from "@mui/material";

export const Tools = () => {
	const groupedToolsMetaData = [
		{
			grouping: "Dev",
			tools: [
				"Github",
				"VSCode",
				"Insomnia",
				"Postman",
				"Ubuntu",
				"Arch",
				"Debian",
				"Rasbian",
				"ArduinoOS",
			],
		},
		{
			grouping: "VFX",
			tools: [
				"Sony Vegas Pro",
				"Davinci Resolve",
				"AutoCAD",
				"Blender",
				"Google Earth Studio",
			],
		},
		{
			grouping: "Adobe",
			tools: [
				"After Effects",
				"Photoshop",
				"XD",
				"Flash",
				"Dream Weaver",
				"Premiere Pro",
				"InDesign",
				"Illustrator",
			],
		},
		{
			grouping: "Imaging",
			tools: ["Figma", "Gimp", "Skylum Luminar", "ImageMagick"],
		},
	];

	return (
		<div className='mt-20 w-full sm:mr-4'>
			<SkillSubHeading title='Tools'>
				<ConstructionIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<Card>
				<CardContent className='mb-5 pl-10 flex flex-col flex-wrap lg:pl-12 lg:h-[480px]'>
					{groupedToolsMetaData.map((item) => {
						return (
							<div
								key={`${item.grouping} tools`}
								className='w-[94%] mr-2 lg:w-[220px]'>
								{item.grouping !== "Other" && (
									<h1 className='sm:mb-2'> {item.grouping} </h1>
								)}
								<div className='flex flex-row flex-wrap'>
									{item.tools.map((tool) => {
										return (
											<Typography
												variant='body1'
												color='text.secondary'
												key={tool}
												className='w-[50%] pr-10 mb-2 lg:pr-5 lg:mb-1'>
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
