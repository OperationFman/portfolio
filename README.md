&nbsp;

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Running Locally](#running-locally)
- [How To Update Content](#how-to-update-content)
  - [Add A Tutorial](#add-a-tutorial)
  - [Update Qualifications, Volunteering and Work Experience](#update-qualifications-volunteering-and-work-experience)
  - [Update Skills](#update-skills)
  - [Update Projects](#update-projects)
  - [Update Salary Expectations](#update-salary-expectations)
- [Contact](#contact)

&nbsp;


## Overview

![Homepage](https://user-images.githubusercontent.com/42459707/217387931-7e98a3aa-8a43-4c44-8137-4ef341f43f64.png)

This repository is the host for my professional portfolio website, providing a comprehensive display of my coding abilities and showcasing the functionalities of the website.

&nbsp;

![Tutorial Page](https://user-images.githubusercontent.com/42459707/217388236-cbb442a9-e8c8-4675-9686-6a37ea1512be.png)

Why did I build this site?

The development of this site was motivated by two primary objectives. Firstly, it serves as a tool to increase marketability and differentiation in the competitive field of web development. Secondly, it provides a valuable learning opportunity, allowing for a deeper understanding of modern web development practices and the ability to create a project from scratch. The completion of this project has reinforced my proficiency in front-end programming.

&nbsp;

![Projects Page](https://user-images.githubusercontent.com/42459707/217388229-01844266-8df8-486a-83e8-424e05de4544.png)

Going forward, this repository will be continually updated with fresh content and resources, and the code will be adapted to reflect the evolving industry standards.

&nbsp;

&nbsp;

## Tech Stack

Development

- Typescript
- React
- Next
- Material UI
- Sass
- Jest
- Notion CMS

&nbsp;

Deployment

- Github (Repository)
- Github Actions (For CI/CD)
- Vercel Cloud Platform (For Automated Deployments and Serverless Functions)

&nbsp;

&nbsp;

## Design Decisions

This project was created as an opportunity to experiment and explore new techniques in web development. Initially, I came from a React Native background and wanted to expand my skills by trying out various styling tools. After evaluating options such as default CSS and Tailwind, I ultimately decided to use SASS for its ease of use and reliability.

&nbsp;

Performance was a primary concern as the website serves as my portfolio and is frequently visited by recruiters and potential employers. To ensure a smooth user experience, I kept the use of NPM packages to a minimum and wrote custom code to meet specific needs, opting for raw CSS whenever possible. The efforts to optimize performance are reflected in the high lighthouse score, as shown below.

![Lighthouse Score](https://user-images.githubusercontent.com/42459707/217158718-b1019176-005a-4f20-8c03-a5fedfdf1c4a.png)

&nbsp;

Test-driven development was another major focus during the project's development. I aimed to gain a strong understanding of this development style, although it proved to be easier to implement with static pages. Complex APIs presented a greater challenge in this regard. The results of these efforts are shown below.

![Yarn Test](https://user-images.githubusercontent.com/42459707/217159178-7104801d-195d-4262-b518-e8236a3b24a3.png)

&nbsp;

Dark mode support was also a consideration, adding an extra layer of complexity to the development process. However, once properly configured, it was easy to implement. I believe it is important to accommodate user preferences and provide a choice between light and dark modes.

![Homepage in Light Mode](https://user-images.githubusercontent.com/42459707/217158552-4cce377e-23ca-424a-88fb-7d4ac7d005d4.png)

&nbsp;

&nbsp;

## Running Locally

1. Prerequisites:
  - Download and install Node version 18.12.0 or above from the official website: https://nodejs.org/en/download/
  - Download and install Git from the official website: https://git-scm.com/downloads
  - Verify the installations by running the commands `node -v` and git --version in a terminal window.

&nbsp;
  
2. Installing Yarn:
  - Run the following command in a terminal window to install Yarn globally: `npm install -g yarn`
  - Verify the installation by running the command `yarn -v` in a terminal window.

&nbsp;

3. Cloning the Repository:
  - Use the following command to clone the repository to your local machine: `git clone https://github.com/OperationFman/portfolio.git`
  - This will save the repository files in the current directory of the terminal window.

&nbsp;

4. Running the Development Server:
  - Navigate to the repository directory using a terminal window and run the following command: yarn dev
  - This will start the development server and make the application accessible at `http://localhost:3000/` in a web browser.

&nbsp;

&nbsp;

## How To Update Content

In the future, it is intended to implement a more efficient content updating process utilizing a headless CMS solution such as [Strapi](https://strapi.io/). Currently, updates to tutorial content are made directly within [Notion Pages](https://www.notion.so/) and modifications to other page elements are performed by updating the .ts files within the repository's `~/src/datasources directory`. Hence, the subsequent instructions assume that you have access to the local repository and are authorized to make and push changes.

&nbsp;

### Add A Tutorial

1. Create a tutorial within any notion pages, ensure it has a cover image. It should be the same as the thumbnail but higher res (Ideal px width x height is 1500x850).

![Notion page](https://user-images.githubusercontent.com/42459707/217395178-a8891308-b9b9-44e7-93b9-d9afb5622581.png)

&nbsp;

2. Click share in the upper right


3. Click 'Share to web'

4. Copy the trailing number section of the link

![Share menu](https://user-images.githubusercontent.com/42459707/217398601-7e286957-0b52-48f6-b549-821da48c6bce.png)

&nbsp;

5. Save a thumbnail in the repo path `~/src/public/tutorials` with a shortened name eg `heating-blockchain.png`
  - Ideal px width x height is 380x200
  - Only use .png

&nbsp;

6. Open `~/src/datasources/TutorialMetaData.ts` in your favorite text editor and add a key-value object to the top following this type:
```typescript
{
  title: string; // Title for the tutorial page
  link: string; // Will appear in the url, keep it short, e.g "self-heating-blockchain-tutorial"
  notionPage: string; // Copy only the numbers section from the notion pages link
  created: number; // Epoch number for the date the notion page was made
  thumbnail: string; // The ending path to the thumbnail, eg "/tutorials/heating-blockchain.png"
  subTitle: string; // Sub title for the tutorial page - Will be shortened above 50 characters
  topic: Topic; // Programming, Agile or Infrastructure etc, this shows on the tutorial page
  languages?: Languages[]; // Optional: If one or multiple programming languages, add them here. You can add new ones in `~src/tutorials/types.ts`
  tags?: Tags[]; // Optional: Tags convey the content, e.g 'tutorial', 'blog post' etc. You can add new ones in `~src/tutorials/types.ts`
}
```

7. Git push and after auto deployment you should see the tutorial card on the `https://www.franklin-v-moon.dev/tutorials` page

&nbsp;

&nbsp;

### Update Qualifications, Volunteering and Work Experience

1. Open `~/src/datasources/HomepageMetaData.ts` in your favorite text editor

2. Edit the content as desired

3. Git push and after auto deployment you should see the changes reflected on the `https://www.franklin-v-moon.dev/` page

Notes: Do not add more than 3 'For You' or 6 'Qualification' items. You can have unlimited Volunteering or Work Experience items

&nbsp;

&nbsp;

### Update Skills

1. Open `~/src/datasources/SkillsMetaData.ts` in your favorite text editor

2. Edit the content as desired

3. Git push and after auto deployment you should see the changes reflected on the `https://www.franklin-v-moon.dev/skills` page

&nbsp;

&nbsp;

### Update Projects

1. Add a new folder under `~/public` with the name of the project

2. Add all the images you can of the project

3. Open `~/src/datasources/ProjectsMetaData.ts` in your favorite text editor

4. Edit the content as desired, ensuring the images are referenced under the image key

5. Git push and after auto deployment you should see the changes reflected on the `https://www.franklin-v-moon.dev/projects` page

&nbsp;

&nbsp;

### Update Salary Expectations

1. Open `~/src/datasources/SalarayExpectationMetaData.ts` in your favorite text editor

2. Edit the content as desired

3. Git push and after auto deployment you should see the changes reflected on the `https://www.franklin-v-moon.dev/` page

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## Contact

If you find any bugs or have any feedback or suggested improvements, I would love to hear from you!

You can reach out to me:

- Email - Franklin.v.moon@gmail.com

- LinkedIn - https://www.linkedin.com/in/franklin-moon-23572518a/

- Facebook - https://www.facebook.com/frank.moon.731/

- Discord - Franklin Moon#8808

&nbsp;

&nbsp;
