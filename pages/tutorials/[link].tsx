import Head from "next/head";
import { useRouter } from "next/router";
import { getTutorialContentByLink } from "../../src/tutorials/tutorialDataService";
import { TutorialContentItem } from "../../src/tutorials/types";
import { ErrorPage } from "../../utils/ErrorContent";

const validateAndFetchPageData = (
  link: string | string[] | undefined
): TutorialContentItem | undefined => {
  if (typeof link !== "string") {
    return undefined;
  }
  return getTutorialContentByLink(link);
};

const PageContent = () => {
  const router = useRouter();
  let pageData = validateAndFetchPageData(router.query.link);

  if (!pageData) {
    return <ErrorPage />;
  }

  return (
    <>
      <Head>
        <title>{pageData.metaData.title}</title>
        <meta
          name={pageData.metaData.subTitle}
          content={pageData.metaData.topic}
        />
      </Head>
      <h1>{pageData.pageContent()}</h1>
    </>
  );
};

export default PageContent;
