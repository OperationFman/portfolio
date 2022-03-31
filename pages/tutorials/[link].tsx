import { InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";
import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import { getTutorialMetaDataByLink } from "../../src/tutorials/tutorialDataService";
import { TutorialMetaData } from "../../src/tutorials/types";
import { ErrorContent } from "../../utils/ErrorContent";
import { isClientSide } from "../../utils/isClientSide";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Container } from "@mui/material";
import useDeviceDetect from "../../utils/useDeviceDetect";

type ServerSideContext = {
  params: { link: string | string[] | undefined };
};

const PageContent = ({
  notionPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { isMobile } = useDeviceDetect();

  // Todo: Create hook 'isDarkMode' as below is always dark when the page is first loaded
  const darkMode = isClientSide()
    ? localStorage.getItem("dark-mode") === "true"
    : true;

  if (!notionPage) {
    return <ErrorContent />;
  }

  return (
    <Container maxWidth={"md"} sx={{ overflow: "hidden" }}>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          bottom: 0,
          left: 0,
          right: 0,
          transform: "translateY(-325px)",
        }}
      >
        <NotionRenderer
          recordMap={notionPage}
          fullPage={true}
          darkMode={darkMode}
          previewImages={true}
          components={{ Code, Collection }}
        />
      </div>
    </Container>
  );
};

const validateLinkAndFetchMetaData = (
  link: string | string[] | undefined
): TutorialMetaData | undefined => {
  if (typeof link !== "string") {
    return undefined;
  }
  return getTutorialMetaDataByLink(link);
};

export const getServerSideProps = async (context: ServerSideContext) => {
  const notion = new NotionAPI();
  const metaData = validateLinkAndFetchMetaData(context.params.link);
  const inValid = {
    props: {
      notionPage: false,
    },
  };

  if (!metaData) {
    return inValid;
  }

  const notionPage: ExtendedRecordMap = await notion.getPage(
    metaData.notionPage
  );

  if (!notionPage) {
    return inValid;
  }

  return {
    props: {
      notionPage,
    },
  };
};

export default PageContent;
