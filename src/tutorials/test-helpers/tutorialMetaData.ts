import { Languages, Tags, Topic } from "../types";

export const testMetaData = [
  {
    title: "Quickly Setup NextJs ES6 with Typescript",
    link: `/programming/quickly-setup-next-js-with-typescript`,
    notionPage: "c4ca92237cc4434cbc30119b104e9e87",
    created: 1642762915,
    thumbnail: "TBD",
    subTitle:
      "Get up-and-running with a cleaned up but ready to go repo using nextJs. Includes setting up TS properly, clearing boilerplate, structuring components, routing, setting up an API and SEO consideration",
    topic: Topic.Programming,
    languages: [Languages.Typescript],
    tags: [Tags.StepByStep],
  },
  {
    title: "Deploy to AWS EC2 using Terraform and Docker ",
    link: `/deploy-to-aws-ec2-using-terraform-and-docker`,
    notionPage: "c4ca92237cc4434cbc30119b104e9e87",
    created: 1639982632,
    thumbnail: "TBD",
    subTitle:
      "Step-by-step instructions to dockerize your repo and use terraform to spin up AWS and host your project from scratch",
    topic: Topic.Infrastructure,
    languages: [Languages.Docker, Languages.Terraform],
    tags: [Tags.Essay],
  },
  {
    title: "Try & Catch by a Type",
    link: "/programming/try-catch-by-type",
    notionPage: "c4ca92237cc4434cbc30119b104e9e87",
    created: 1640257315,
    thumbnail: "TBD",
    subTitle:
      "Simple technique ff you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
    topic: Topic.Programming,
    languages: [Languages.Typescript],
    tags: [Tags.CodeBlock],
  },
];
