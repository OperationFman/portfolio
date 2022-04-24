export type ProjectMetaData = {
    title: string;
    link: string;
    notionPage: string;
    created: number;
    images: {
        desktop: Array<string>;
        mobile?: string;
    }
    subTitle: string;
    deployedURL?: string;
    repoURL?: string;
    uxURL?: string;
  };