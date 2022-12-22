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
		"Can lead pairing on a project no matter who the pair is. Very comfortable with the language/tool and can teach others at different skill levels and in different project situations.",
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
				knowledge:
					"I have used Github to host my own personal projects as well as contribute to open source projects. It's a core tool all devs need to know these days and im comfortable with it",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Insomnia",
				knowledge:
					"Insomnia is a tool that allows developers to test and debug APIs by allowing them to make HTTP requests and view the responses. I prefer it over Postman as it's faster, simpler and more secure.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Postman",
				knowledge:
					"Postman is a tool that allows developers to test and debug APIs by making requests, receiving responses, and analyzing the results. I've used it for years on multiple code bases and am comfortable building out useful collections and automatic repetitive calls.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Rasbian",
				knowledge:
					"Raspbian is a free operating system based on Debian optimized for the Raspberry Pi hardware. I love using Pis for various projects around the house and in automation. I have even used it/them to build a bare metal kubernetes cluster just for fun.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Ubuntu",
				knowledge:
					"Ubuntu is a Linux-based operating system that can be used for hosting websites and other web applications. This is a foundational OS used for a huge portion of infrastructure and I've used it to varying levels to run cloud applications.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "Debian",
				knowledge:
					"Debian is a free and open-source operating system that can be used for hosting websites and other applications. I've used to specifically for testing pipelines and as a remote great OS to work with remotely.",
				proficiency: Capable,
				description: Description.Capable,
			},
		],
	},
	{
		title: "VFX",
		data: [
			{
				title: "Davinci Resolve",
				knowledge:
					"Davinci Resolve is a post-production tool that allows users to edit, color correct, and finish video projects. I regularly work on various projects involving music videos and documentaries which require a deep knowledge of the software.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Blender",
				knowledge:
					"Blender is a 3D graphics software that is used for creating and manipulating 3D models, animations, and visual effects in post-production. I've used it for over a decade now to add an extra 'spice' to my video projects and to 3D print.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "Google Earth Studio",
				knowledge:
					"Google Earth Studio is a tool that allows post-production professionals to create high-quality, realistic 3D animations of locations and landscapes using real-world satellite and aerial imagery. It's a technical marvel and makes it easy to get 'drone-like' shots from anywhere in the world.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Sony Vegas",
				knowledge:
					"Similar to Davinci Resolve, Sony Vegas is a video editing software used in post production for creating and editing professional-quality video and audio content. I've used it for many years and can quickly finish technical projects using it.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
		],
	},
	{
		title: "Adobe",
		data: [
			{
				title: "Photoshop",
				knowledge:
					"Photoshop is a graphics editing software that allows users to manipulate and enhance images and graphics. I've used it for over a decade to correct color, remove noise and to create various imagery, much of which you can see on this site.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "After Effects",
				knowledge:
					"Adobe After Effects is a tool for creating and editing motion graphics and visual effects for video and film. I primarily use it to add moving typography and for transitions but have also completed entire animations in 2D and 3D space.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "InDesign",
				knowledge:
					"Adobe InDesign is a tool used for creating and designing professional documents such as brochures. I've used it as a volunteer to generate various reports, newsletters and magazines. ",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Illustrator",
				knowledge:
					"Adobe Illustrator is a vector graphics editor used for creating and editing digital graphics and designs. Similar to photoshop, I've used it to generate stills and even motion graphic sprites of various needs, often for websites by taking advantage of the power of SVGs.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Premiere",
				knowledge:
					"Adobe Premiere is a video editing software that allows users to create and edit professional-quality video projects. I regularly work on various projects involving music videos and documentaries which require a deep knowledge of the software.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "XD",
				knowledge:
					"Adobe XD is a design and prototyping tool used to create user interfaces and user experiences for websites and mobile applications. I've used it to generate various projects for analysis and also regularly use it for work when I assist Experience Designers with prototyping.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
		],
	},
	{
		title: "Imaging",
		data: [
			{
				title: "Image Magick",
				knowledge:
					"ImageMagick is a tool for converting, editing, and manipulating images in various formats using a command line. It's particularly powerful for mass-editing files, ideal for cleaning data for AI models.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Figma",
				knowledge:
					"Figma is a collaborative design tool for prototyping and designing user interfaces.  I've used it to generate various projects for analysis and also regularly use it for work when I assist Experience Designers with prototyping.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Skylum Luminar",
				knowledge:
					"Skylum Luminar is a photo editing software that allows users to enhance, retouch, and add creative effects to their photographs. I've worked on projects where we used this over other tools to create thumbnails and heder images for blogs and marketplace listings.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Gimp",
				knowledge:
					"GIMP (GNU Image Manipulation Program) is an open-source image editing software that allows users to create, edit, and manipulate digital images. I often use it in a work environment due to its open-source nature to quickly edit images for presentations, deployments and sharing information.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
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
				knowledge:
					"Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, scalable compute capacity in the cloud, allowing users to launch and manage virtual machines (known as EC2 instances) that can run a variety of applications. I regularly use this across almost every project for CI/CD pipelines and scalable cloud deployments.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "ECR",
				knowledge:
					"AWS Elastic Container Registry (ECR) is a fully-managed Docker container registry that makes it easy to store, manage, and deploy Docker container images. I've used it on multiple projects as a step in our deployment automation process as it's highly secure and reliable.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "Cloudfront",
				knowledge:
					"AWS CloudFront is a content delivery network (CDN) that speeds up the delivery of static and dynamic web content, such as HTML, CSS, JavaScript, and images, to users by caching the content at edge locations around the world. It's an incredibly powerful tool that I've used to significantly improve the scalability of a web app.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "DynoDB",
				knowledge:
					"Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability, allowing users to store and retrieve any amount of data, and serve any level of request traffic. It is frequently my go-to for simpler small apps that just require a key-value database solution.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Route53",
				knowledge:
					"Amazon Web Services Route 53 is a highly available and scalable Domain Name System (DNS) web service that translates domain names into numerical IP addresses, allowing computers to connect to each other and access websites. Most of my personal domains were setup via R53.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "S3",
				knowledge:
					"Amazon Simple Storage Service (S3) is a cloud storage service that enables users to store and retrieve large amounts of data from anywhere on the internet. like much of AWS services, it's an outstanding value option for storing blobs, apps destined for testing and release and also simply any user submitted documents.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
		],
	},
	{
		title: "Google",
		data: [
			{
				title: "GCS",
				knowledge:
					"Google Cloud Services is a suite of cloud computing services that allows users to build, test, and deploy applications and websites, store and analyze data, and manage infrastructure and resources using Google's network of servers and infrastructure. Along with C# this is a focus of mine currently to develop and become proficient in.",
				proficiency: Learning,
				description: Description.Learning,
			},
			{
				title: "Firebase",
				knowledge:
					"Google Firebase is a platform that provides a variety of tools and services for building mobile and web applications, including a real-time database, user authentication, hosting, and analytics. I've used it to push data to client devices instead of using sockets and intend to keep learning it as it's an awesome solution for backend problems.",
				proficiency: Learning,
				description: Description.Learning,
			},
			{
				title: "Android App Distribution",
				knowledge:
					"Android App Distribution is a process by which Android apps are made available for users to download and install on their devices via the google play store. I've worked on projects where it was an integral part of the release process and required me to understand how it functioned, how to use the provided indicators and also how to debug.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
		],
	},
	{
		title: "CI/CD",
		data: [
			{
				title: "CircleCI",
				knowledge:
					"CircleCI is a continuous integration and delivery platform that helps development teams build, test, and deploy their code rapidly and reliably. I've used it on multiple projects to handle testing requirements and is an excellent tool to create visibility of code status.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "GoCD",
				knowledge:
					"GoCD is a continuous delivery platform that helps organizations automate and track the build, test, and release process for their software projects, enabling them to deliver high-quality software faster and more reliably. I've used it on multiple projects to handle testing requirements and is an excellent tool to create visibility of code status.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "Buildkite",
				knowledge:
					"Buldkite is a tool for continuous integration and continuous delivery that allows users to build, test, and deploy their software projects automatically, ensuring that their code is always up to date and in a deployable state. I've used it on multiple projects to handle testing requirements and is an excellent tool to create visibility of code status.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Travis CI",
				knowledge:
					"Travis CI is a continuous integration tool that allows developers to automatically build, test, and deploy their software projects, typically as part of a larger development workflow. I've used it on multiple projects to handle testing requirements and is an excellent tool to create visibility of code status.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Github Actions",
				knowledge:
					"GitHub Actions is a tool that allows users to automate processes and workflows within a GitHub repository, such as building and deploying code, running tests, and integrating with external services. I often use this to easily deploy smaller projects and ones where using less services are a priority.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Jenkins",
				knowledge:
					"Jenkins is an open-source automation server that helps to automate parts of the software development process, including building, testing, and deploying software. I've used it primarily for legacy applications that have shaky reliability so i'm confident in my ability to use it in concerning situations safely.",
				proficiency: Capable,
				description: Description.Capable,
			},
		],
	},
	{
		title: "Other",
		data: [
			{
				title: "Python Anywhere",
				knowledge:
					"Python Anywhere is a cloud-based platform that allows users to run and host Python applications, as well as access a web-based integrated development environment (IDE) and other tools for developing and managing Python code. I've used it to deploy my first websites ever made in addition to my travel blog.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Apple Developer",
				knowledge:
					"Apple Developer is a suite of tools and resources provided by Apple for developing and distributing software for the company's platforms, including iOS, iPadOS, macOS, watchOS, and tvOS. used alongside Android App Distribution where I've worked on projects where it was an integral part of the release process and required me to understand how it functioned, how to use the provided indicators and also how to debug.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Heroku",
				knowledge:
					"Heroku is a cloud platform that enables developers to build, run, and operate applications entirely in the cloud. I've used it to deploy various backends and micro services as it's super simple to get started with and reliable.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Vercel",
				knowledge:
					"Vercel is a cloud platform for hosting websites and web applications, allowing developers to deploy their projects with a global network of edge servers for low latency and high performance. I have used it to deploy this very site as it meshes well with NextJS, also maintained by Vercel",
				proficiency: Capable,
				description: Description.Capable,
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
