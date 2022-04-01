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
  const { title, subTitle, topic } = metaData as TutorialMetaData;

  if (!notionPage) {
    return <ErrorContent />;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
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
  const invalid = {
    props: {
      notionPage: undefined,
    },
  };

  const { link } = context.params;

  if (typeof link !== "string") {
    return invalid;
  }

  const metaData = getTutorialMetaDataByLink(link);

  if (!metaData) {
    return invalid;
  }

  const notionPage: ExtendedRecordMap = await notion.getPage(
    metaData.notionPage
  );

  if (!notionPage) {
    return invalid;
  }

  return {
    props: {
      notionPage,
      metaData,
    },
  };
};

export default PageContent;
