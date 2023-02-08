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
  - [Update Salary Expectations](#adjust-salary-expectations)
- [Contact](#contact)

&nbsp;


## Overview

![Homepage](https://user-images.githubusercontent.com/42459707/217387931-7e98a3aa-8a43-4c44-8137-4ef341f43f64.png)

Welcome to the repository for my portfolio website, here you can have a good
look at my code and judge for yourself if you think my abilities are up to your
expectations, or maybe you just want to see how it works.

&nbsp;

![Tutorial Page](https://user-images.githubusercontent.com/42459707/217388236-cbb442a9-e8c8-4675-9686-6a37ea1512be.png)

Why did I build this site?

Portfolios are already a great thing for developers to build for two reasons,
one of course is to make themselves more marketable in this competitive world
and thus standout. The other is it's a great learning opportunity, to understand
modern web development and build something from scratch. My goal was to learn
and I can confidently say I have a solid grasp on front end programming after
completing this project.

&nbsp;

![Projects Page](https://user-images.githubusercontent.com/42459707/217388229-01844266-8df8-486a-83e8-424e05de4544.png)

In the future I hope to keep this updated not only with new content and
resources, but also as the industry shifts I intend to keep refactoring the code
as you would in most development careers.

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

One of my goals was actually to experiment while I built this project out,
originally I came from a React Native background which lacks many web dev tools.
So I experimented with various styling tools like default CSS, Tailwind and
eventually settled on SASS for it's extremely ease of use and reliability.

&nbsp;

Speed was a major focus, due to this site being a portfolio it's like recruiters
and hirers would visit it most often. If they have to sit and wait for loading
spinners and slow pop-in images, it reflects poorly on my abilities. So overall
i've kep my usage of NPM packages to an absolute minimum, preferring to build
code for my exact needs and to minimize the use of Javascript here possible,
preferring raw CSS when possible..

![Lighthouse Score](https://user-images.githubusercontent.com/42459707/217158718-b1019176-005a-4f20-8c03-a5fedfdf1c4a.png)

&nbsp;

Test driven development was another major goal, I wanted to push myself to
really get used to the development style and i feel I have, although i must note
it's easiest for static pages. When dealing with complex APIs TDD will usually
be much harder than the implementation itself.

![Yarn Test](https://user-images.githubusercontent.com/42459707/217159178-7104801d-195d-4262-b518-e8236a3b24a3.png)

&nbsp;

Dark mode support was a minor goal and a challenge, it adds some complexity but
once configured I found it easy to develop with. I think it's important to
accommodate user preferences for either.

![Homepage in Light Mode](https://user-images.githubusercontent.com/42459707/217158552-4cce377e-23ca-424a-88fb-7d4ac7d005d4.png)

&nbsp;

&nbsp;

## Running Locally

1. Download and install:
  - Node version `18.12.0` or above from here: https://nodejs.org/en/download/
  - Git from here: https://git-scm.com/downloads
  - You can test this worked by running `node -v` and `git --version` in a terminal 
&nbsp;
  
2. Install yarn with `npm install -g yarn` in a terminal
  - You can test this worked by running `yarn -v`
&nbsp;

3. Clone this repo by running this command in a terminal where you want the files saved: 
`git clone https://github.com/OperationFman/portfolio.git`
&nbsp;

4. Within a terminal, navigate to the files and run `yarn dev`
&nbsp;

5. Within a browser, search this web address: `http://localhost:3000/`

&nbsp;

&nbsp;

## How To Update Content

Eventually I'd like to rework the content updating method to use a headless CMS service like [Strapi](https://strapi.io/) but for now tutorials are updated by changing content within [Notion Pages](https://www.notion.so/) and the rest of the page content is changed by updating .ts files within the repository `~/src/datasources`. So going forward, the following instructions expect that you have the repo running locally and are permitted to push changes.

&nbsp;

### Add A Tutorial

1. Create a tutorial within any notion pages, ensure it has a cover image. It should be the same as the thumbnail but higher res (Minimum 1000px wide).

![Notion page](https://user-images.githubusercontent.com/42459707/217395178-a8891308-b9b9-44e7-93b9-d9afb5622581.png)

&nbsp;

2. Click share in the upper right


3. Click 'Share to web'

4. Copy the trailing number section of the link

![Share menu](https://user-images.githubusercontent.com/42459707/217398601-7e286957-0b52-48f6-b549-821da48c6bce.png)

&nbsp;

5. Save a thumbnail in the repo path `~/src/public/tutorials` with a shortened name eg `heating-blockchain.png`
  - Ideal px width x height is 380x200
  - .png, .jpg, .jpeg are all valid

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

1. Open `~/src/datasources/ProjectsMetaData.ts` in your favorite text editor

2. Edit the content as desired

3. Git push and after auto deployment you should see the changes reflected on the `https://www.franklin-v-moon.dev/projects` page

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
