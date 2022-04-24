export enum Page {
    TutorialPage = 'tutorials',
    ProjectPage = 'projects'
}

export type FeedCardFormatting = {
    page: Page;
    accentColor: string
    theme: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit" | undefined;
    maxWidth: number;
    maxHeight: string;
}