import { Languages, Tags, Topic, TutorialMetaData } from "../types";

export const infrastructureMetaData: TutorialMetaData[] = [
  {
    title: "Deploy to AWS EC2 using Terraform and Docker ",
    link: `/deploy-to-aws-ec2-using-terraform-and-docker`,
    created: 1639982632,
    thumbnail: "/tutorials/temp.jpg",
    subTitle:
      "Step-by-step instructions to dockerize your repo and use terraform to spin up AWS and host your project from scratch",
    topic: Topic.Infrastructure,
    languages: [Languages.Docker, Languages.Terraform],
    tags: [Tags.StepByStep],
  },
];
