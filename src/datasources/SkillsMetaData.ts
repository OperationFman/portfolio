import { ColumnData, BoxListingMetaData } from "../skills/types";

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

export const toolsMetaData: BoxListingMetaData[] = [
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

export const convictionMetaData: BoxListingMetaData[] = [
	{
		heading: "Pairing",
		items: [
			"The art of doing things but also not doing things, which in itself is a thing which negates the chance",
			"A second sentence",
		],
	},
	{
		heading: "TDD",
		items: [
			"The art of doing things but also not doing things, which in itself is a thing which negates the chance",
			"A second sentence",
		],
	},
	{
		heading: "Automated Testing",
		items: [
			"The art of doing things but also not doing things, which in itself is a thing which negates the chance",
			"A second sentence",
		],
	},
	{
		heading: "Sensible Defaults",
		items: [
			"The art of doing things but also not doing things, which in itself is a thing which negates the chance",
			"A second sentence",
		],
	},
];

export const cloudMetaData: BoxListingMetaData[] = [
	{
		heading: "AWS",
		items: ["EC2", "ECR", "Cloudfront", "DynoDB", "Route53", "S3"],
	},

	{
		heading: "Other",
		items: ["Python Anywhere", "Heroku", "Apple Developer", "Vercel"],
	},
	{
		heading: "Google",
		items: ["GCS", "Firebase", "Android App Distribution"],
	},
	{
		heading: "CI/CD",
		items: [
			"CircleCI",
			"GoCD",
			"Buildkite",
			"Travis CI",
			"Github Actions",
			"Jenkins",
		],
	},
];
