import { ColumnData, Proficiency, SkillData } from "../skills/types";
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
		title: "Javascript",
		knowledge:
			"I have a strong understanding in the language and am confident in my ability to use it effectively. My understanding of the syntax and modern concepts of the language, as well as the tools and frameworks that are commonly used with it is very strong. JavaScript has evolved over time and I genuinely enjoy staying up-to-date with the latest developments.",
		proficiency: HighlyProficient,
		description: Description.HighlyProficient,
		data: [
			{
				title: "Typescript",
				knowledge:
					"I have used Typescript in various projects, including web applications and mobile apps, and have found that it helps me catch errors early on in the development process, reducing the time spent on debugging and testing. Additionally, Typescript's type system allows me to write more modular and reusable code, which helps me work more efficiently and effectively.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "React",
				knowledge:
					"I have a strong understanding of the framework and am able to effectively utilize its features to build efficient and effective user interfaces. I'm confident in my ability to troubleshoot and debug issues that may arise while working with React, and am able to quickly adapt to new features and updates to the framework.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "React Native",
				knowledge:
					"I am able to effectively utilize its features to build high-quality, performant mobile applications. I'm also confident in my ability to troubleshoot issues and find solutions when working with React Native and have a good sense of best practices and design patterns for building applications and am able to apply this knowledge to my projects.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Jest",
				knowledge:
					"I am effective at using Jest to write and run tests for various back and frontend applications. I'm familiar with the various assertion methods and test utilities that Jest provides, and you am able to troubleshoot and debug any issues that may arise during testing.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "NextJS",
				knowledge:
					"I have a strong understanding of Vercels NextJS features like SSR and Code splitting. I am able to effectively apply them in various projects and am confident in my ability to use NextJs to build high-quality applications and am able to troubleshoot any issues that may arise.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "React Testing Library",
				knowledge:
					"I've used RTL on various front end projects and have a good understanding of its benefits and drawbacks when compared to alternative libraries, and I'm able to effectively apply it when practicing effective TDD.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},

			{
				title: "Node",
				knowledge:
					"I can confidently say that I use it regularly in my work and have a strong understanding of its benefits and drawbacks. Benefits of using NodeJS include its ability to handle a large number of concurrent connections, its lightweight and efficient nature, and its support for real-time web applications. It is a flawed tool, given it's single-threaded nature.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "GraphQL",
				knowledge:
					"I've worked with GraphQL on various projects and am familiar with its benefits and drawbacks. For example, some benefits include the ability to request specific data from an API, usage of a single endpoint for all data queries, and the ability to easily update and evolve the API. Drawbacks include the need for a GraphQL server, the learning curve for developers who are new to the technology, and the potential for performance issues if not implemented correctly.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Redux",
				knowledge:
					"I have used React Redux and have a solid understanding of its ability to manage complex state in a scalable and maintainable way. It allows for clear separation of concerns, making it easier to understand and update the codebase. Additionally, it provides a predictable way to update the application's state, which helps to minimize potential bugs. However, there are also some drawbacks to using React Redux, such as added complexity.",
				proficiency: HighlyProficient,
				description: Description.Proficient,
			},
			{
				title: "React Spring",
				knowledge:
					"I find React Spring valuable in my work as a developer because it allows me to create visually appealing and engaging animations that add depth and interactivity to my projects. I have found that using React Spring can help to make my applications more dynamic and engaging, which can be particularly useful in creating user interfaces that are intuitive and easy to use. Overall, I believe that React Spring is a valuable tool for any developer looking to create high-quality animations in their projects.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "JQuery",
				knowledge:
					"I've Jquery on various legacy applications and understand it's valuable tool for manipulating the DOM and adding interactivity to my web applications. However, it is important to consider the drawbacks of using Jquery, it can add a significant amount of weight to a page if many Jquery plugins are used, and it is not as performant as some newer JavaScript libraries and frameworks.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "Express",
				knowledge:
					"I find it to be a valuable tool in my work. I use it regularly in my projects and have a strong understanding of its features and capabilities. ExpressJS is a lightweight, flexible framework that makes it easy to build web applications and APIs. It provides a wide range of features and middleware that can be easily customized and integrated into any project. I appreciate the simplicity and power of ExpressJS, and find it to be an essential part of my toolkit as a developer.",
				proficiency: Capable,
				description: Description.Capable,
			},
		],
	},
	{
		title: "Python",
		knowledge:
			"I use Python to write scripts for automation, data processing, web development and other tasks that require quick and efficient execution. My favorite aspect of Python is the integration of hardware and software components that allow for physical inventions, automated tooling and robots.",
		proficiency: Proficient,
		description: Description.Proficient,
		data: [
			{
				title: "Flask",
				knowledge:
					"I can confidently say that I am very familiar with it and use it regularly in my projects. I have a strong understanding of its features and capabilities, and am able to effectively apply them to build web applications. In my experience, Python Flask has proven to be a valuable tool for building web applications quickly and efficiently. Its simplicity and flexibility make it an excellent choice for a wide range of projects.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "PyTest",
				knowledge:
					" I find it to be a valuable tool for testing my code. PyTest makes it easy to write and execute tests, and the ability to run tests in parallel helps to speed up the testing process. In addition, the rich set of features offered by PyTest, such as fixture support and the ability to customize test discovery, make it a flexible and powerful testing framework.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Selenium",
				knowledge:
					"I have found it to be a valuable tool for automating web browser tasks. It allows me to easily write scripts that can interact with websites and perform tasks such as filling out forms, clicking buttons, and navigating pages. This can save a lot of time and effort, especially when it comes to tasks that need to be repeated frequently or on a large scale.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "RapidAPI",
				knowledge:
					"I have found it to be a valuable tool in my work. It allows me to easily access and integrate a wide range of APIs into my projects, saving me time and effort in the development process. I have used Python RapidAPI to connect to a variety of APIs and have found it to be easy to use and reliable. I appreciate the convenience and efficiency that it provides, and believe it is a valuable resource for any developer working with APIs.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Unittest",
				knowledge:
					"Using Python Unittest has helped me to write more robust and reliable code. It gives me confidence that my code is working as intended and allows me to catch and fix issues before they become more significant problems.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Django",
				knowledge:
					" I have a strong understanding of its capabilities and how it can be used to build powerful web applications. I have found it to be a valuable tool in my work as a developer because it provides a robust and flexible framework that makes it easy to build and maintain complex applications. In addition, the extensive library of tools and modules available for Django makes it possible to add a wide range of functionality to applications, further enhancing its value as a development platform.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "NumPy",
				knowledge:
					"I have used NumPy in a variety of projects, including scientific computing and machine learning, and have come to appreciate its efficiency and versatility. Overall, I believe that my experience with NumPy has helped me to become a more effective and efficient developer, and I continue to find it valuable in my work.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "Pandas",
				knowledge:
					"Pandas is a powerful library for data analysis and manipulation, and I have used it to perform a variety of tasks such as cleaning and preprocessing data, aggregating and summarizing data, and creating charts and visualizations.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "Scrapy",
				knowledge:
					"I have used it in the past for tasks such as gathering information for data analysis or building a database of information from the web.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "PyGame",
				knowledge:
					"I am familiar with its capabilities and have experience applying it in a university project setting. I find Python PyGame to be a valuable tool for building interactive and visually appealing applications.",
				proficiency: Capable,
				description: Description.Capable,
			},
		],
	},
	{
		title: "C#",
		knowledge:
			"C sharp is a modern and object-oriented language, which means it is well-suited for building robust and scalable backend systems. This can be particularly useful as I am interested in becoming a backend and infrastructure expert.",
		proficiency: Learning,
		description: Description.Learning,
		isDeveloping: true,
		data: [
			{
				title: "ASP .NET Core",
				knowledge:
					"I'm excited to be prioritizing dotNET as my next major learning goal.",
				proficiency: Learning,
				description: Description.Learning,
			},
			{
				title: "XUnit",
				knowledge:
					"To compliment my learning of dotNET, I must ensure I'm writing maintainable reliable C# code with XUnit unit tests.",
				proficiency: Learning,
				description: Description.Learning,
			},
			{
				title: "Unity",
				knowledge:
					"After I feel confident with C# and dotNET I hope to explore game development with Unity.",
				proficiency: Learning,
				description: Description.Learning,
			},
		],
	},
	{
		title: "Misc.",
		knowledge:
			"Various languages that I'm fully capable of working in. I understand them well and have significant real world world experience with each of them.",
		proficiency: Proficient,
		description: Description.Proficient,
		data: [
			{
				title: "HTML",
				knowledge:
					"In my experience, HTML has proven to be a core reliable and essential part of any web developers career. It allows me to create well-structured and visually appealing web pages, and I am comfortable using it to implement a wide range of design elements in various methods.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "CSS",
				knowledge:
					"I have used CSS in numerous projects in the past and have found it to be an invaluable tool for styling and formatting the front-end of web applications. I appreciate the flexibility and control that CSS gives me as a developer, and I am confident in my ability to use it effectively to create visually appealing and user-friendly interfaces.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Docker",
				knowledge:
					"I understand the value it brings to projects. Docker allows for easy containerization of applications, which makes it easier to deploy and run applications in different environments. I have used Docker in a variety of projects, including deploying and scaling web applications and microservices.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Git",
				knowledge:
					"Git allows for version control of code, which means I can track changes made to my code over time and easily revert back to previous versions if necessary. It also makes it easy to collaborate with other developers by allowing us to work on the same codebase without overwriting each other's changes. Overall, I find Git to be an invaluable tool for any developer, as it helps to streamline the development process and make it more efficient and effective.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Terraform",
				knowledge:
					"Its declarative configuration language makes it easy to understand and maintain infrastructure as code, which helps to improve the reliability and repeatability of my deployments. Overall, I have found Terraform to be an invaluable tool in my work as a developer and believe it can be a valuable asset for any organization.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "SQL",
				knowledge:
					"I have used SQL to write queries to extract, manipulate, and analyze data, and you have gained a good understanding of its syntax and capabilities. ",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "Bash / Shell",
				knowledge:
					"BASH/Shell allows me to automate tasks and perform actions quickly and efficiently on the command line. I have used it to manage and manipulate files and directories, run scripts, and execute commands on remote servers.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "Tailwind",
				knowledge:
					"I find it valuable because it is a utility-first CSS framework that allows me to rapidly build custom user interfaces with ease. Instead of having to write custom CSS for every design element, I can use the pre-defined utility classes provided by Tailwind to style my components quickly and consistently. This saves me a lot of time and effort when building and styling web applications, as I don't have to spend as much time writing custom CSS.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Bootstrap",
				knowledge:
					"One of the main reasons I find Bootstrap valuable is because it saves me a lot of time in the development process. With its pre-designed components and grid system, I can easily create a consistent and professional looking layout without having to write a lot of custom CSS.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
		],
	},
];

export const toolsMetaData: SkillData[] = [
	{
		title: "Dev",
		data: [
			{
				title: "Github",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Insomnia",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Postman",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Ubuntu",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Debian",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Rasbian",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
		],
	},
	{
		title: "VFX",
		data: [
			{
				title: "Davinci Resolve",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Blender",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Google Earth Studio",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Sony Vegas",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
		],
	},
	{
		title: "Adobe",
		data: [
			{
				title: "Photoshop",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "After Effects",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "InDesign",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Illustrator",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Premiere",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "XD",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
		],
	},
	{
		title: "Imaging",
		data: [
			{
				title: "Image Magick",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Figma",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Skylum Luminar",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Gimp",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
		],
	},
];

export const cloudMetaData: SkillData[] = [
	{
		title: "AWS",
		data: [
			{
				title: "EC2",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "ECR",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Cloudfront",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "DynoDB",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Route53",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "S3",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
		],
	},
	{
		title: "Google",
		data: [
			{
				title: "GCS",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Firebase",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Android App Distribution",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
		],
	},
	{
		title: "CI/CD",
		data: [
			{
				title: "CircleCI",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "GoCD",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Buildkite",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Travis CI",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Github Actions",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Jenkins",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
		],
	},
	{
		title: "Other",
		data: [
			{
				title: "Python Anywhere",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Apple Developer",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Heroku",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
			{
				title: "Vercel",
				knowledge: "foo",
				proficiency: HighlyProficient,
				description: "foo",
			},
		],
	},
];

export const convictionMetaData: ConvictionsRow[] = [
	{
		title: "Pair Programming",
		blurb:
			"A developer's productivity should be evaluated based on the problems they solve. Pair programming enables developers to solve problems more efficiently, share knowledge, and improve their skills",
	},
	{
		title: "Automated Testing",
		blurb:
			"A reliable testing pipeline can ensure that the platform functions correctly without developer intervention, saving time and effort. Making the development process more efficient and effective",
	},
	{
		title: "Test Driven Development",
		blurb:
			"Improve the quality of code by ensuring that it is correct and complete. By writing tests before writing the code, you can identify and fix problems early in the development process, before they become more difficult and costly to fix",
	},
	{
		title: "Continuous Learning",
		blurb:
			"The field of software development is constantly evolving and changing. New technologies, tools, and best practices are being developed all the time, and staying up to date with these developments is essential for staying competitive and ensuring that you are able to deliver the best possible solutions",
	},
	{
		title: "Self Sustainability",
		blurb:
			"Helps you to maintain a healthy and balanced work-life and prevent burnout. Self-sustainability involves taking care of your physical, mental, and emotional well-being, and finding ways to support yourself and manage stress in a healthy way",
	},
	{
		title: "User Focused Development",
		blurb:
			"Ensures that the software you create meets the needs and expectations of the people who will be using it. User-focused development involves putting yourself in the user's shoes and considering their perspective when designing, building, and testing your software",
	},
];
