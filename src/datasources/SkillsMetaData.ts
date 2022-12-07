import { ColumnData, ListingMetaData } from "../skills/types";

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

export const groupedToolsMetaData: ListingMetaData[] = [
	{
		heading: "Dev",
		items: ["Github", "Insomnia", "Postman", "Ubuntu", "Debian", "Rasbian"],
	},
	{
		heading: "VFX",
		items: ["Davinci Resolve", "Google Earth Studio", "Blender", "Sony Vegas"],
	},
	{
		heading: "Adobe",
		items: [
			"Photoshop",
			"After Effects",
			"InDesign",
			"Illustrator",
			"Premiere",
			"XD",
		],
	},
	{
		heading: "Imaging",
		items: ["Skylum Luminar", "Image Magick", "Figma", "Gimp"],
	},
];

export const groupedCloudMetaData: ListingMetaData[] = [
	{
		heading: "AWS",
		items: ["EC2", "ECR", "Cloudfront", "DynamoDB", "Route53", "S3"],
	},
	{
		heading: "Google",
		items: ["GCS", "Firebase", "Android App Distribution", "Play Store"],
	},
	{
		heading: "Other",
		items: ["Python Anywhere", "Heroku", "Apple Developer", "Vercel"],
	},
	{
		heading: "CI/CD",
		items: [
			"Circle",
			"GoCD",
			"Buildkite",
			"Travis CI",
			"Github Actions",
			"Jenkins",
		],
	},
];
