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
				"Google Earth Studio",
				"Blender",
				"AutoCAD",
			],
		},
		{
			grouping: "Adobe",
			tools: [
				"After Effects",
				"InDesign",
				"Flash",
				"Premiere Pro",
				"Photoshop",
				"XD",
				"Dream Weaver",
				"Illustrator",
			],
		},
		{
			grouping: "Imaging",
			tools: ["Figma", "Gimp", "ImageMagick", "Skylum Luminar"],
		},
	];

	return (
		<div className='mt-20 w-full sm:mr-4'>
			<SkillSubHeading title='Tools'>
				<ConstructionIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<Card>
				<CardContent className='mb-5 pl-12 flex flex-col flex-wrap lg:h-[460px]'>
					{groupedToolsMetaData.map((item) => {
						return (
							<div key={`${item.grouping} tools`} className='w-[220px] mr-2'>
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
												className='w-100px] pr-5 mb-2'>
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
