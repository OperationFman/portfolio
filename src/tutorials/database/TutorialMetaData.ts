import { Languages, Tags, Topic, TutorialMetaData } from "../types";

// TODO: Create a tool to automatically add to this and push it to the github repo
export const tutorialMetaData: TutorialMetaData[] = [
  {
    title: "Snippet: Retry Any Function Recursively",
    link: `retry-recursively`,
    notionPage: "88e2d51cb8d74f9a9eb561185f16d322",
    created: 1628805824,
    thumbnail: "/tutorials/retry-recursively.jpg",
    subTitle: "Rerun Function n number of times or handle a thrown error",
    topic: Topic.Programming,
    languages: [Languages.Typescript],
    tags: [Tags.CodeBlock],
  },
  {
    title: "How To Dockerize Your Repository",
    link: `dockerize-your-repo`,
    notionPage: "c4ca92237cc4434cbc30119b104e9e87",
    created: 1639982631,
    thumbnail: "/tutorials/dockerize.png",
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
    thumbnail: "/tutorials/project-wall.jpg",
    subTitle: "Increase distributed team collaboration with a virtual wall",
    topic: Topic.Agile,
    tags: [Tags.Essay],
  },
  {
    title: "Deploy Containers to AWS with Terraform",
    link: `deploy-to-aws-ec2-using-terraform-and-docker`,
    notionPage: "4d5154f6347a46d280c19f2d8ad9de4f",
    created: 1639982632,
    thumbnail: "/tutorials/aws-docker-terraform.png",
    subTitle:
      "Step-by-step instructions to spin up AWS and host your project using Terraform",
    topic: Topic.Infrastructure,
    languages: [Languages.Docker, Languages.Terraform],
    tags: [Tags.StepByStep],
  },
  {
    title: "Snippet: Handle Error By Type",
    link: "try-catch-by-type",
    notionPage: "898854cc62d84573807f8da823304ea0",
    created: 1640257315,
    thumbnail: "/tutorials/try-catch.png",
    subTitle:
      "Handle showing an error to your backend or UI via a simple try/catch",
    topic: Topic.Programming,
    languages: [Languages.Typescript],
    tags: [Tags.StepByStep, Tags.CodeBlock],
  },
  {
    title: "Quickstart: NextJS",
    link: `quickly-setup-next-js-with-typescript`,
    notionPage: "eb6acd5b26d3416c9372be89cae2b05d",
    created: 1642762915,
    thumbnail: "/tutorials/quickstart-next.png",
    subTitle:
      "Get up-and-running with a cleaned up but ready to go NextJs app",
    topic: Topic.Programming,
    languages: [Languages.Typescript],
    tags: [Tags.StepByStep],
  },
];
