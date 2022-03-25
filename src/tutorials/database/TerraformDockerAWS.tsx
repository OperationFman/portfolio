import { Languages, Tags, Topic, TutorialContentItem, TutorialMetaData } from "../types";

const metaData: TutorialMetaData = {
  title: "Deploy to AWS EC2 using Terraform and Docker ",
  link: `/deploy-to-aws-ec2-using-terraform-and-docker`,
  created: 1639982632,
  thumbnail: "/tutorials/docker-aws-terraform.jpeg",
  subTitle:
    "Step-by-step instructions to dockerize your repo and use terraform to spin up AWS and host your project from scratch",
  topic: Topic.Infrastructure,
  languages: [Languages.Docker, Languages.Terraform],
  tags: [Tags.StepByStep],
};

const pageContent = (): JSX.Element => {
  return (
    <>
      <h1>Empty Page</h1>
    </>
  );
};

export const TerraformDockerAWS: TutorialContentItem = {
  metaData,
  pageContent,
};
