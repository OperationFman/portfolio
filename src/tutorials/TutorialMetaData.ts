import { Languages, Tags, Topic, TutorialMetaData } from "./types";

// Create a tool to automatically add to this and push it to the github repo
export const tutorialMetaData: TutorialMetaData[] = [
  {
    title: "How To Dockerize Your Repo",
    link: `dockerize-your-repo`,
    notionPage: "c4ca92237cc4434cbc30119b104e9e87",
    created: 1639982631,
    thumbnail: "/tutorials/test.png",
    subTitle: "Understand and build containers that run your app anywhere",
    topic: Topic.Infrastructure,
    languages: [Languages.Docker],
    tags: [Tags.StepByStep],
  },
  {
    title: "Project Wall: Single Source of Truth",
    link: `project-wall-single-source-of-truth`,
    notionPage: "a036e1f8f1d844a5a512dc6d7a011ccf",
    created: 1640241832,
    thumbnail: "/tutorials/project-wall.jpeg",
    subTitle:
      "Using a visualization tool like Miro keep your team in the loop, quickly share information and bring creativity back",
    topic: Topic.Agile,
    tags: [Tags.Essay],
  },
  {
    title: "Deploy to AWS EC2 using Terraform and Docker ",
    link: `deploy-to-aws-ec2-using-terraform-and-docker`,
    notionPage: "4d5154f6347a46d280c19f2d8ad9de4f",
    created: 1639982632,
    thumbnail: "/tutorials/docker-aws-terraform.jpeg",
    subTitle:
      "Step-by-step instructions to dockerize your repo and use terraform to spin up AWS and host your project from scratch",
    topic: Topic.Infrastructure,
    languages: [Languages.Docker, Languages.Terraform],
    tags: [Tags.StepByStep],
  },
  {
    title: "Try & Catch by a Type",
    link: "try-catch-by-type",
    notionPage: "898854cc62d84573807f8da823304ea0",
    created: 1640257315,
    thumbnail: "/tutorials/try-catch.png",
    subTitle:
      "Simple technique if you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
    topic: Topic.Programming,
    languages: [Languages.Typescript],
    tags: [Tags.StepByStep],
  },
  {
    title: "Quickly Setup NextJs ES6 with Typescript and more stuff",
    link: `quickly-setup-next-js-with-typescript`,
    notionPage: "eb6acd5b26d3416c9372be89cae2b05d",
    created: 1642762915,
    thumbnail: "/tutorials/test.png",
    subTitle:
      "Get up-and-running with a cleaned up but ready to go repo using nextJs. Includes setting up TS properly, clearing boilerplate, structuring components, routing, setting up an API and SEO consideration",
    topic: Topic.Programming,
    languages: [Languages.Typescript],
    tags: [Tags.StepByStep],
  },
];
