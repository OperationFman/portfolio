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
		items: ["Davinci Resolve", "Blender", "Google Earth Studio", "Sony Vegas"],
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
		items: ["Image Magick", "Figma", "Skylum Luminar", "Gimp"],
	},
];

export const convictionMetaData: BoxListingMetaData[] = [
	{
		heading: "Pairing",
		blurb:
			"A developer's productivity should be evaluated based on the problems they solve. Pair programming enables developers to solve problems more efficiently, share knowledge, and improve their skills",
	},
	{
		heading: "TDD",
		blurb:
			"Unit tests and test-driven development provide long-term benefits by ensuring that code meets project requirements and can save time and effort in the future",
	},
	{
		heading: "Automated Testing",
		blurb:
			"A reliable testing pipeline can ensure that the platform functions correctly without developer intervention, saving time and effort. Making the development process more efficient and effective",
	},
];

export const cloudMetaData: BoxListingMetaData[] = [
	{
		heading: "AWS",
		items: ["EC2", "ECR", "Cloudfront", "DynoDB", "Route53", "S3"],
	},

	{
		heading: "Other",
		items: ["Python Anywhere", "Apple Developer", "Heroku", "Vercel"],
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
