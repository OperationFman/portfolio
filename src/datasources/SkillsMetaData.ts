import { ColumnData, Proficiency, Skills } from "../skills/types";
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
			{
				title: "Typescript",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "bar",
			},
			{
				title: "React",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "React Native",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Jest",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "NextJS",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "GraphQL",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Redux",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "React Testing Library",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "React Spring",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "JQuery",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Node",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Express",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
		],
	},
	{
		heading: "Python",
		knowledge:
			"I use Python to write scripts for automation, data processing, web development and other tasks that require quick and efficient execution. My favorite aspect of Python is the integration of hardware and software components that allow for physical inventions, automated tooling and robots.",
		proficiency: Proficient,
		description: Description.Proficient,
		tech: [
			{
				title: "Flask",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Django",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "PyTest",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Selenium",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "RapidAPI",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "NumPy",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Pandas",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Scrapy",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "PyGame",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Unittest",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
		],
	},
	{
		heading: "C#",
		knowledge:
			"C sharp is a modern and object-oriented language, which means it is well-suited for building robust and scalable backend systems. This can be particularly useful as I am interested in becoming a backend and infrastructure expert.",
		proficiency: Learning,
		description: Description.Learning,
		isDeveloping: true,
		tech: [
			{
				title: "ASP .NET Core",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "XUnit",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Unity",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
		],
	},
	{
		heading: "Misc.",
		knowledge:
			"Various languages that I'm fully capable of working in. I understand them well and have significant real world world experience with each of them.",
		proficiency: Proficient,
		description: Description.Proficient,
		tech: [
			{
				title: "Docker",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Terraform",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "HTML",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "CSS",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "SQL",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Bash / Shell",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Git",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Tailwind",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
			{
				title: "Bootstrap",
				knowledge: "foo bar",
				proficiency: HighlyProficient,
				description: "foo bar",
			},
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
