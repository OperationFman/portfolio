import { ProjectMetaData } from '../types'

export const projectMetaData: ProjectMetaData[] = [
    {
        title: "Travel Blog",
        created: 2,
        images: {
            desktop: ["/projects/travel-blog/temp.jpg", "/projects/travel-blog/tempDark.jpg"],
        },
        subTitle: "My travels or something",
        deployedURL: "http://frankstravelblog.pythonanywhere.com/",
        repoURL: "https://github.com/OperationFman/FranksTravelBlog",
    },
    {
        title: "Krank",
        created: 1,
        images: {
            desktop: ["/projects/krank/desktop1.png", "/projects/krank/desktop2.png", "/projects/krank/desktop3.png", "/projects/krank/desktop4.png",],
            mobile: ["/projects/krank/mobile1.png", "/projects/krank/mobile2.png", "/projects/krank/mobile3.png", "/projects/krank/mobile4.png"]
        },
        subTitle: "My first ever programming project. A tool to help my partner and I while we were stuck in Japan during the 2020 pandemic. The webapp is primarily designed for mobile and has a 'food roulette' mode to store a list of meals we like and randomly suggests one when tapping 'generate'. \n It also has a simple currency conversion tool that quickly shows purchasing power of other fx compared to AUD.",
        deployedURL: "http://opfman.pythonanywhere.com/",
        repoURL: "https://github.com/OperationFman/Krank",
        uxURL: "https://www.figma.com/file/XL7Gz06sz0iLn4hyVpGnRz/Mass-Effect-Crewed?node-id=0%3A1"
      },
]