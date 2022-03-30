import { Languages, Tags, Topic, TutorialContentItem } from "../types";

export const testDataTutorialContentItems = (): TutorialContentItem[] => {
  return [
    {
      metaData: {
        title: "Try & Catch by a Type",
        link: "try-catch-by-type",
        created: 1640257315,
        thumbnail: "/tutorials/try-catch.png",
        subTitle:
          "Simple technique if you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
        topic: Topic.Programming,
        languages: [],
        tags: [],
      },
      pageContent: (): JSX.Element => {
        return (
          <>
            <h1>First Item Page Content</h1>
          </>
        );
      },
    },
    {
      metaData: {
        title: "First Item",
        link: "desired-item-link",
        created: 1640257315,
        thumbnail: "/tutorials/test.png",
        subTitle: "First Item Subtitle",
        topic: Topic.Programming,
        languages: [Languages.Typescript],
        tags: [Tags.StepByStep],
      },
      pageContent: (): JSX.Element => {
        return (
          <>
            <h1>Desired Item Page Content</h1>
          </>
        );
      },
    },
    {
      metaData: {
        title: "Deploy to AWS EC2 using Terraform and Docker ",
        link: "deploy-to-aws-ec2-using-terraform-and-docker",
        created: 1639982632,
        thumbnail: "/tutorials/docker-aws-terraform.jpeg",
        subTitle:
          "Step-by-step instructions to dockerize your repo and use terraform to spin up AWS and host your project from scratch",
        topic: Topic.Agile,
        languages: [],
        tags: [],
      },
      pageContent: (): JSX.Element => {
        return (
          <>
            <h1>Last Item Page Content</h1>
          </>
        );
      },
    },
  ];
};
