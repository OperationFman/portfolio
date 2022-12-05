import { ColumnData } from "../skills/types";

export const languagesMetaData: ColumnData[] = [
	{
		heading: "Javascript",
		tech: [
			"Typescript",
			"React",
			"React Native",
			"GraphQL",
			"NextJS",
			"Redux",
			"Jest",
			"React Testing Library",
			"React Spring",
			"JQuery",
			"Node",
			"Express",
		],
	},
	{
		heading: "Python",
		tech: [
			"Flask",
			"Django",
			"PyTest",
			"Selenium",
			"NumPy",
			"RapidAPI",
			"Pandas",
			"Scrapy",
			"PyGame",
			"Unittest",
		],
	},
	{
		heading: "C#",
		isDeveloping: true,
		tech: ["ASP .NET Core", "XUnit", "Unity"],
	},
	{
		heading: "Misc.",
		tech: [
			"Docker",
			"Kubernetes",
			"Terraform",
			"HTML",
			"CSS",
			"SQL",
			"Bash / Shell",
			"Git",
			"Tailwind",
			"Bootstrap",
		],
	},
];

export const groupedToolsMetaData = [
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
