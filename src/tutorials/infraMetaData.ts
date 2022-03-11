import { Languages, Tags, Topic, TutorialMetaData } from "./tutorialDirectory";

export const infraMetaData: TutorialMetaData[] = [
  {
    title: "Deploy to AWS EC2 using Terraform and Docker ",
    link: `/deploy-to-aws-ec2-using-terraform-and-docker`,
    created: 1639982632,
    thumbnail: "TBD",
    subTitle:
      "Step-by-step instructions to dockerize your repo and use terraform to spin up AWS and host your project from scratch",
    topic: [Topic.Infrastructure],
    languages: [Languages.AWS, Languages.Docker, Languages.Terraform],
    tags: [Tags.StepByStep],
  },
];
