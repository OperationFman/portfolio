import { ColumnData, Descriptions, Proficiency, Skills } from "../skills/types";
import { ConvictionsRow } from "./../skills/types";

export const headerBlurb = `
On this page, you'll find an outline of my skills & experience with various programming languages, tools, and development methodologies.
Click on any of the technologies listed below, you can learn more about my current specific abilities and level of involvement in each area.`;

const { Learning, Capable, Proficient, HighlyProficient } = Proficiency;

const Description = {
	Learning:
		"Want to learn for career development. I've never worked with it professionally and knowledge is theoretical only. But I am interested in this and want to prove myself.",
	Capable:
		"Practiced some. Knowledge is practical and I have played around a little but haven’t gone into significant depth yet.",
	Proficient:
		"I've worked with it, I've gone into depth, and I'm comfortable guiding others. I can pair with other developers and influence at my peer level and with folks I'm guiding.",
	HighlyProficient:
		"Can lead pairing on a project no matter who the pair is. Very comfortable in the language and can teach others at different skill levels and in different project situations.",
};

export const languagesMetaData: ColumnData[] = [
	{
		heading: "Javascript",
		knowledge:
			"I have a strong understanding in the language and am confident in my ability to use it effectively. My understanding of the syntax and modern concepts of the language, as well as the tools and frameworks that are commonly used with it is very strong. JavaScript has evolved over time and I genuinely enjoy staying up-to-date with the latest developments.",
		proficiency: HighlyProficient,
		description: Description.HighlyProficient,
		tech: [
			"Typescript",
			"React",
			"React Native",
			"Jest",
			"NextJS",
			"GraphQL",
			"Redux",
			"React Testing Library",
			"React Spring",
			"JQuery",
			"Node",
			"Express",
		],
	},
	{
		heading: "Python",
		knowledge:
			"I use Python to write scripts for automation, data processing, web development and other tasks that require quick and efficient execution. My favorite aspect of Python is the integration of hardware and software components that allow for physical inventions, automated tooling and robots.",
		proficiency: Proficient,
		description: Description.Proficient,
		tech: [
			"Flask",
			"Django",
			"PyTest",
			"Selenium",
			"RapidAPI",
			"NumPy",
			"Pandas",
			"Scrapy",
			"PyGame",
			"Unittest",
		],
	},
	{
		heading: "C#",
		knowledge: "foo",
		proficiency: Learning,
		description: Description.Learning,
		isDeveloping: true,
		tech: ["ASP .NET Core", "XUnit", "Unity"],
	},
	{
		heading: "Misc.",
		knowledge: "foo",
		proficiency: HighlyProficient,
		description: Description.HighlyProficient,
		tech: [
			"Docker",
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

export const toolsMetaData: Skills[] = [
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

export const cloudMetaData: Skills[] = [
	{
		heading: "AWS",
		items: ["EC2", "ECR", "Cloudfront", "DynoDB", "Route53", "S3"],
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
	{
		heading: "Other",
		items: ["Python Anywhere", "Apple Developer", "Heroku", "Vercel"],
	},
];

export const convictionMetaData: ConvictionsRow[] = [
	{
		heading: "Pair Programming",
		blurb:
			"A developer's productivity should be evaluated based on the problems they solve. Pair programming enables developers to solve problems more efficiently, share knowledge, and improve their skills",
	},
	{
		heading: "Automated Testing",
		blurb:
			"A reliable testing pipeline can ensure that the platform functions correctly without developer intervention, saving time and effort. Making the development process more efficient and effective",
	},
	{
		heading: "Test Driven Development",
		blurb:
			"Improve the quality of code by ensuring that it is correct and complete. By writing tests before writing the code, you can identify and fix problems early in the development process, before they become more difficult and costly to fix",
	},
	{
		heading: "Continuous Learning",
		blurb:
			"The field of software development is constantly evolving and changing. New technologies, tools, and best practices are being developed all the time, and staying up to date with these developments is essential for staying competitive and ensuring that you are able to deliver the best possible solutions",
	},
	{
		heading: "Self Sustainability",
		blurb:
			"Helps you to maintain a healthy and balanced work-life and prevent burnout. Self-sustainability involves taking care of your physical, mental, and emotional well-being, and finding ways to support yourself and manage stress in a healthy way",
	},
	{
		heading: "User Focused Development",
		blurb:
			"Ensures that the software you create meets the needs and expectations of the people who will be using it. User-focused development involves putting yourself in the user's shoes and considering their perspective when designing, building, and testing your software",
	},
];
