import { ColumnData, Proficiency, FolioData } from "../folio/types";
import { ConvictionsRow } from "./../folio/types";

const { Learning, Capable, Proficient, HighlyProficient } = Proficiency;

const Description = {
	Learning:
		"Want to learn for career development. I've never worked with it professionally and knowledge is theoretical only. But I am interested in this and want to prove myself.",
	Capable:
		"Practiced some. Knowledge is practical and I have played around a little but haven’t gone into significant depth yet.",
	Proficient:
		"I've worked with it, I've gone into depth, and I'm comfortable guiding others. I can pair with other developers and influence at my peer level and with folks I'm guiding.",
	HighlyProficient:
		"Can lead pairing on a project no matter who the pair is. Very comfortable with the language/tool and can teach others at different folio levels and in different project situations.",
};

export const languagesMetaData: ColumnData[] = [
	{
		title: "Frontend",
		knowledge:
			"Building user interfaces that sing, seamlessly merging modern design trends with rock-solid accessibility practices and clean, well-tested code in both Web and mobile applications for Android/iOS",
		proficiency: Proficient,
		description: Description.Proficient,
		data: [
			{
				title: "Typescript",
				knowledge:
					"I have used Typescript in various projects, including web applications and mobile apps, and have found that it helps me catch errors early on in the development process, saving time spent on debugging and testing. Additionally, Typescript's type system allows me to write more modular and reusable code, increasing my efficiency and effectiveness.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Javascript",
				knowledge:
					"I have a thorough understanding of the language and am proficient in using it effectively. My expertise in the syntax, modern concepts, and commonly used tools and frameworks of JavaScript is strong. I keep up-to-date with the latest developments in the language and have a genuine interest in its evolution.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "React",
				knowledge:
					"I have a strong understanding of the framework and am proficient in using its features to build efficient and effective user interfaces. I am adept at troubleshooting and debugging issues that may arise while working with React and can adapt quickly to new features and updates to the framework.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "React Native",
				knowledge:
					"I am proficient in using the features of React Native to build high-quality, performant mobile applications. I am confident in my ability to troubleshoot issues and find solutions when working with React Native and have a good understanding of best practices and design patterns for building applications, which I can apply to my projects.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Jest",
				knowledge:
					"I am effective at using Jest to write and run tests for various back and frontend applications. I am familiar with the various assertion methods and test utilities that Jest provides, and am able to troubleshoot and debug any issues that may arise during testing.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "NextJS",
				knowledge:
					"I have a strong understanding of Vercel's NextJS features like server-side rendering and code splitting. I am proficient in applying these features in various projects and am confident in my ability to use NextJS to build high-quality applications. I am also capable of troubleshooting any issues that may arise.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
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
				title: "Flask",
				knowledge:
					"I can confidently say that I am very familiar with it and use it regularly in my projects. I have a strong understanding of its features and capabilities, and am able to effectively apply them to build web applications. In my experience, Python Flask has proven to be a valuable tool for building web applications quickly and efficiently. Its simplicity and flexibility make it an excellent choice for a wide range of projects.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Django",
				knowledge:
					" I have a strong understanding of its capabilities and how it can be used to build powerful web applications. I have found it to be a valuable tool in my work as a developer because it provides a robust and flexible framework that makes it easy to build and maintain complex applications. In addition, the extensive library of tools and modules available for Django makes it possible to add a wide range of functionality to applications, further enhancing its value as a development platform.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "CSS/SASS",
				knowledge:
					"I have used CSS in numerous projects in the past and have found it to be an invaluable tool for styling and formatting the front-end of web applications. I appreciate the flexibility and control that CSS gives me as a developer, and I am confident in my ability to use it effectively to create visually appealing and user-friendly interfaces.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Tailwind",
				knowledge:
					"I find it valuable because it is a utility-first CSS framework that allows me to rapidly build custom user interfaces with ease. Instead of having to write custom CSS for every design element, I can use the pre-defined utility classes provided by Tailwind to style my components quickly and consistently. This saves me a lot of time and effort when building and styling web applications, as I don't have to spend as much time writing custom CSS.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "HTML",
				knowledge:
					"In my experience, HTML has proven to be a core reliable and essential part of any web developers career. It allows me to create well-structured and visually appealing web pages, and I am comfortable using it to implement a wide range of design elements in various methods.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
		],
	},
	{
		title: "Backend",
		knowledge:
			"Experienced building robust API's, micro-services and serverless backends that are highly tested and lightweight ensuring modern practices are adhered to. Also experienced working in and refactoring legacy monoliths.",
		proficiency: Proficient,
		description: Description.Proficient,
		data: [
			{
				title: "C#",
				knowledge:
					"C sharp is a modern and object-oriented language, which means it is well-suited for building robust and scalable backend systems. This can be particularly useful as I am interested in becoming a backend and infrastructure expert.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "ASP .NET Core",
				knowledge:
					"I'm excited to be prioritizing dotNET as my next major learning goal.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "XUnit",
				knowledge:
					"To compliment my learning of dotNET, I must ensure I'm writing maintainable reliable C# code with XUnit unit tests.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "Node",
				knowledge:
					"I have consistently utilized NodeJS in my professional capacity, and have gained a thorough understanding of its strengths and limitations. NodeJS boasts a high capacity for handling multiple concurrent connections and is known for its efficiency and lightweight design. It is particularly well-suited for developing real-time web applications. However, it should be noted that NodeJS operates on a single thread, which can potentially present certain challenges.",
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
				title: "ExpressJS",
				knowledge:
					"I find it to be a valuable tool in my work. I use it regularly in my projects and have a strong understanding of its features and capabilities. ExpressJS is a lightweight, flexible framework that makes it easy to build web applications and APIs. It provides a wide range of features and middleware that can be easily customized and integrated into any project. I appreciate the simplicity and power of ExpressJS, and find it to be an essential part of my toolkit as a developer.",
				proficiency: Capable,
				description: Description.Capable,
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
		],
	},
	{
		title: "DevOps",
		knowledge:
			"Eager to stay ahead of the curve in cloud computing, working on some of the latest design paradigms like dockerization and serverless with a focus on availability and reliability across regions and availability zones.",
		proficiency: Capable,
		description: Description.Capable,
		data: [
			{
				title: "Kubernetes",
				knowledge:
					"I'm comfortable using Kubernetes, configuring clusters using kubectl and deploying containerized applications across multiple environments for efficient scaling and resource management in various platforms including Minikube, k3ds, EKS and even EC2",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "Docker/Containers",
				knowledge:
					"I understand the value it brings to projects. Docker allows for easy containerization of applications, which makes it easier to deploy and run applications in different environments. I have used Docker in a variety of projects, including deploying and scaling web applications and microservices.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Python",
				knowledge:
					"I use Python to write scripts for automation, data processing, web development and other tasks that require quick and efficient execution. My favorite aspect of Python is the integration of hardware and software components that allow for physical inventions, automated tooling and robots.",
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
				title: "Ansible",
				knowledge:
					"Similar usage as Terraform, Im comfortable provisioning new resources and know when to refactor or look out for drift.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "Action Runners",
				knowledge:
					"I've experience setting up and maintaining action runners across different contexts including Github Actions to self hosted runners operating on AWS EKS with and without Auto-mode.",
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
				title: "Git",
				knowledge:
					"Git allows for version control of code, which means I can track changes made to my code over time and easily revert back to previous versions if necessary. It also makes it easy to collaborate with other developers by allowing us to work on the same codebase without overwriting each other's changes. Overall, I find Git to be an invaluable tool for any developer, as it helps to streamline the development process and make it more efficient and effective.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "SQL",
				knowledge:
					"I have used SQL to write queries to extract, manipulate, and analyze data, and you have gained a good understanding of its syntax and capabilities. ",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "Unity",
				knowledge:
					"After I feel confident with C# and dotNET I hope to explore game development with Unity.",
				proficiency: Learning,
				description: Description.Learning,
			},
			{
				title: "USS",
				knowledge:
					"Along with unity I have a strong understanding of the UI Toolkit and have used it to build scalable extensible user interfaces",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "UXML",
				knowledge:
					"Along with unity I have a strong understanding of the UI Toolkit and have used UXMLto build scalable extensible user interfaces ",
				proficiency: Proficient,
				description: Description.Proficient,
			},
		],
	},
];

export const toolsMetaData: FolioData[] = [
	{
		title: "Dev",
		data: [
			{
				title: "Linux Arch & Ubuntu",
				knowledge:
					"Daily experience using Linux-based operating systems for both personal use (Editing, gaming, daily productivity) and professional use (Servers, testing pipelines etc).",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Insomnia & Postman",
				knowledge:
					"API platforms are tools that allows developers to test and debug APIs but many have not delved deeper into environment configuration, sharing and packaging like I have.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Github",
				knowledge:
					"I have used Github to host my own personal projects as well as contribute to open source projects. It's a core tool all devs need to know these days and im comfortable with it",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Webflow",
				knowledge:
					"I have built, launched and handed off half a dozen custom websites using WebFlow. The no code solution allows me to very quickly bootstrap eCommerce and booking sites at rapid speed for demanding clients.",
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
				title: "Strapi",
				knowledge:
					"Strapi is an open-source headless CMS built with JavaScript/TypeScript. It lets developers build custom frontends while editors manage content through a user-friendly interface. I've used it for various platforms deployed on multiple forms of infrastructure.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
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

export const cloudMetaData: FolioData[] = [
	{
		title: "Amazon AWS",
		data: [
			{
				title: "EKS",
				knowledge:
					"I'm comfortable setting up and interfacing with AWS Elastic Kubernetes Service including provisioning clusters, deploying containerized applications with Kubernetes manifests, and managing deployments and scaling using kubectl.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "EC2",
				knowledge:
					"My experience with EC2 covers all the essentials, from provisioning resources in diverse instance types and regions, to implementing auto-scaling for dynamic workloads, and configuring autoscaling groups for high availability.",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "ECR",
				knowledge:
					"From crafting secure repositories to streamlining image management and automating deployments, I'm confident navigating the full spectrum of AWS ECR tasks",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "DynamoDB",
				knowledge:
					"I have a solid understanding of and experience with DynoDB for solving complex data storage and retrieval challenges using it's flexible schema and pay-per-use model.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Route53",
				knowledge:
					"I'm confident using Route53 for domain registration, managing hosted zones, configuring record types and implementing health checks for higher availability.",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "S3",
				knowledge:
					"I'm confident in setting up and managing AWS S3 buckets, handling secure data upload and retrieval through CLI and various SDKs, and leveraging appropriate storage classes like Standard for frequently accessed data, Glacier for long-term archives, and Intelligent-Tiering for dynamic cost optimization.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "Lambda",
				knowledge:
					"I've used lambda functions to solve a range or challenges including for small repetitive pipeline build tasks all the way to using it as an entire backend to avoid cold starts for infrequently used webapps.",
				proficiency: Proficient,
				description: Description.Capable,
			},
			{
				title: "Billing & Cost Management",
				knowledge:
					"I can effectively setup price alerts and break down usage costs to determine what services are costing the most and identifying if changes could be implemented",
				proficiency: Capable,
				description: Description.Capable,
			},
			{
				title: "CloudFront",
				knowledge:
					"I have a solid understanding of what Cloudfront is capable of and how to best utilise its features. Primarily used it as a front end for APIs and video streaming services",
				proficiency: Proficient,
				description: Description.Proficient,
			},
			{
				title: "Cloud Practitioner",
				knowledge:
					"I have acquired the official AWS CLoud practitioner certification: https://drive.google.com/file/d/1XCCeriFjS-4azodacsdhgw0GKV3G1xY9/view?usp=sharing",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
			{
				title: "IAM",
				knowledge:
					"I have a decent understanding and ability to execute common IAM tasks including user creation, policy attachment, and secure resource access controls abiding by the principle of least privilege.",
				proficiency: HighlyProficient,
				description: Description.HighlyProficient,
			},
		],
	},
	{
		title: "Google Cloud",
		data: [
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
		title: "Microsoft Azure",
		data: [
			{
				title: "Azure DevOps",
				knowledge:
					"Comfortable understanding and utilizing its CI/CD pipelines for automating builds, testing, and deployments across specific domains particularly legacy and window exclusive workloads.",
				proficiency: Capable,
				description: Description.Capable,
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
				title: "ArgoCD",
				knowledge:
					"Using ArgoCD to deploy manifests to various types of kubernetes clusters. Includes configuring the platform via HELMs and managing secrets upfront. I can use various debugging tools within ArgoCD to effectively diagnose issues in a cluster.",
				proficiency: Capable,
				description: Description.Capable,
			},
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
];

export const convictionMetaData: ConvictionsRow[] = [
	{
		title: "Pair Programming",
		blurb:
			"A developer's productivity should be evaluated based on the problems they solve. Pair programming enables developers to solve problems more efficiently, share knowledge, and improve their skills.",
	},
	{
		title: "Automated Testing",
		blurb:
			"A reliable testing pipeline can ensure that the platform functions correctly without developer intervention, saving time and effort. Making the development process more efficient and effective.",
	},
	{
		title: "Test Driven Development",
		blurb:
			"Improve the quality of code by ensuring that it is correct and complete. By writing tests before writing the code, you can identify and fix problems early in the development process, before they become more difficult and costly to fix.",
	},
	{
		title: "Continuous Learning",
		blurb:
			"The field of software development is constantly evolving and changing. New technologies, tools, and best practices are being developed all the time, and staying up to date with these developments is essential for staying competitive and ensuring that you are able to deliver the best possible solutions.",
	},
	{
		title: "Self Sustainability",
		blurb:
			"Helps you to maintain a healthy and balanced work-life and prevent burnout. Self-sustainability involves taking care of your physical, mental, and emotional well-being, and finding ways to support yourself and manage stress in a healthy way.",
	},
	{
		title: "User Focused Development",
		blurb:
			"Ensures that the software you create meets the needs and expectations of the people who will be using it. User-focused development involves putting yourself in the user's shoes and considering their perspective when designing, building, and testing your software.",
	},
];
