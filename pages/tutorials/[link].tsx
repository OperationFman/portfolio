import { InferGetServerSidePropsType } from "next";
import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import { getTutorialMetaDataByLink } from "../../src/tutorials/tutorialDataService";
import { TutorialMetaData } from "../../src/tutorials/types";
import { ErrorContent } from "../../utils/ErrorContent";

type ServerSideContext = {
  params: { link: string | string[] | undefined };
};

const validateLinkAndFetchMetaData = (
  link: string | string[] | undefined
): TutorialMetaData | undefined => {
  if (typeof link !== "string") {
    return undefined;
  }
  return getTutorialMetaDataByLink(link);
};

const PageContent = ({
  notionPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!notionPage) {
    return <ErrorContent />;
  }

  return (
    <NotionRenderer recordMap={notionPage} fullPage={true} darkMode={true} />
  );
};

export const getServerSideProps = async (context: ServerSideContext) => {
  const notion = new NotionAPI();
  const metaData = validateLinkAndFetchMetaData(context.params.link);

  if (!metaData) {
    return {
      props: {
        notionPage: false,
      },
    };
  }
  // TODO: Combine into validate and fetch to remove second 'false' response
  const notionPage: ExtendedRecordMap = await notion.getPage(
    metaData.notionPage
  );

  if (!notionPage) {
    return {
      props: {
        notionPage: false,
      },
    };
  }

  return {
    props: {
      notionPage,
    },
  };
};

export default PageContent;
