import { ProjectMetaData } from '../types'

export const projectMetaData: ProjectMetaData[] = [
    {
        title: "Travel Blog",
        link: "travel-blog",
        notionPage: "efg456",
        created: 2,
        images: {
            desktop: ["/projects/travel-blog/temp.jpg", "/projects/travel-blog/tempDark.jpg"],
        },
        subTitle: "My travels or something",
        deployedURL: "http://opfman.pythonanywhere.com/",
        repoURL: "https://github.com/OperationFman/Krank",
    },
    {
        title: "Krank",
        link: "krank",
        notionPage: "abcd123",
        created: 1,
        images: {
            desktop: ["/projects/krank/desktop1.png", "/projects/krank/desktop2.png", "/projects/krank/desktop3.png", "/projects/krank/desktop4.png",],
            mobile: ["/projects/krank/mobile1.png", "/projects/krank/mobile2.png", "/projects/krank/mobile3.png", "/projects/krank/mobile4.png"]
        },
        subTitle: "Food Roulette & Currency Conversion Tool",
        deployedURL: "http://opfman.pythonanywhere.com/",
        repoURL: "https://github.com/OperationFman/Krank",
        uxURL: "https://www.figma.com/file/XL7Gz06sz0iLn4hyVpGnRz/Mass-Effect-Crewed?node-id=0%3A1"
      },
]