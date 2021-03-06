import { Container } from "@mui/material";
import { InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import { getTutorialMetaDataByLink } from "../../src/tutorials/tutorialDataService";
import { TutorialMetaData } from "../../src/tutorials/types";
import { ErrorContent } from "../../utils/ErrorContent";

const Code = dynamic<any>(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);

type ServerSideContext = {
  params: { link: string | string[] | undefined };
};

const PageContent = ({
  notionPage,
  metaData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!notionPage || notionPage === "undefined" || !metaData) {
    return <ErrorContent />;
  }

  const { title, subTitle, topic } = metaData as TutorialMetaData;

  return (
    <>
      <Head>
        <title>{title} - Franklin V Moon</title>
        <meta name={subTitle} content={topic} />
      </Head>

      <Container maxWidth={"md"} sx={{ overflow: "hidden" }}>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            bottom: 0,
            left: 0,
            right: 0,
            transform: "translateY(-100px)",
          }}
        >
          <NotionRenderer
            recordMap={notionPage}
            fullPage={true}
            darkMode={true}
            components={{ Code }}
          />
        </div>
      </Container>
    </>
  );
};

export const getServerSideProps = async (context: ServerSideContext) => {
  const notion = new NotionAPI();

  try {
    const { link } = context.params;
    if (typeof link !== "string") {
      throw new Error(`Link param is invalid`);
    }

    const metaData = getTutorialMetaDataByLink(link);
    if (!metaData) {
      throw new Error(
        `Could not find Tutorial Meta Data with the link param: ${link}`
      );
    }

    const notionPage: ExtendedRecordMap = await notion.getPage(
      metaData.notionPage
    );
    if (!notionPage) {
      throw new Error(
        `Could not find Notion Page with metaData notionPage value of: ${metaData.notionPage}`
      );
    }

    return {
      props: {
        notionPage,
        metaData,
      },
    };
  } catch (error) {
    return {
      props: {
        notionPage: "undefined",
      },
    };
  }
};

export default PageContent;
