import { ProjectMetaData } from '../types'

export const projectMetaData: ProjectMetaData[] = [
    {
        title: "Portfolio",
        created: 6,
        images: {
            desktop: ["/projects/portfolio/desktop1.png", "/projects/portfolio/desktop2.png", "/projects/portfolio/desktop3.png", "/projects/portfolio/desktop4.png"],
            mobile: ["/projects/portfolio/mobile1.png", "/projects/portfolio/mobile2.png", "/projects/portfolio/mobile3.png", "/projects/portfolio/mobile4.png"]
        },
        subTitle: "The site you're looking at right now. The goal was to create a beautiful front end application that I could use to sell myself and my skills but also be a repository of my knowledge to share freely with the world. Built using Typescript and the NEXTjs library with full TDD and deployed to Vercel through a full CI/CD pipeline using GitHub actions. It also has a focus on search engine optimization and uses Notion pages as a Content Management System",
        deployedURL: "https://www.franklin-v-moon.dev/",
        repoURL: "https://github.com/OperationFman/portfolio",
    },
    {
        title: "Stock Tracker",
        created: 5,
        images: {
            desktop: ["/projects/stock-tracker/desktop1.png", "/projects/stock-tracker/desktop2.png", "/projects/stock-tracker/desktop3.png"],
            mobile: ["/projects/stock-tracker/mobile1.png", "/projects/stock-tracker/mobile2.png", "/projects/stock-tracker/mobile3.png"]
        },
        subTitle: "Visually simple single page application to track a single stock and display the value of your holdings in USD and AUD, ideal if your workplace offers equity. Built using Typescript with the React library and a focus on Terraform to automatically provision and deploy a tested application on an AWS EC2 instance, using a Docker fed into AWS ECR.",
        deployedURL: "http://tw-stock-tracker.franklinvmoon.com/",
        repoURL: "https://github.com/OperationFman/Stock-Ticker-Overview",
    },
    {
        title: "Mass Effect Crewed",
        created: 4,
        images: {
            desktop: ["/projects/mass-effect-crewed/desktop1.png", "/projects/mass-effect-crewed/desktop2.png", "/projects/mass-effect-crewed/desktop3.png", "/projects/mass-effect-crewed/desktop4.png", "/projects/mass-effect-crewed/desktop5.png", "/projects/mass-effect-crewed/desktop6.png", "/projects/mass-effect-crewed/desktop7.png",],
            mobile: ["/projects/mass-effect-crewed/mobile1.png", "/projects/mass-effect-crewed/mobile2.png", "/projects/mass-effect-crewed/mobile3.png", "/projects/mass-effect-crewed/mobile4.png", "/projects/mass-effect-crewed/mobile5.png", "/projects/mass-effect-crewed/mobile6.png", "/projects/mass-effect-crewed/mobile7.png"]
        },
        subTitle: "I simple management app that helps players select crew members to take on missions in the game series 'Mass Effect'. Users add and remove crew throughout the games and this tool shows you who you haven't brought on mission recently and randomly recommends them. Additionally, users can use Oauth to have their own account, saved across devices. Built using Javascript with the React Library and hosted on Heroku with Docker and a full 'deploy-to-prod-on-green' CI/CD pipeline in CircleCI",
        deployedURL: "https://mass-effect-crewed.herokuapp.com/",
        repoURL: "https://github.com/OperationFman/Mass-Effect-Crewed",
        uxURL: "https://www.figma.com/proto/XL7Gz06sz0iLn4hyVpGnRz/Mass-Effect-Crewed?node-id=0%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A3",
    },
    {
        title: "Glance",
        created: 3,
        images: {
            desktop: ["/projects/glance/desktop1.png", "/projects/glance/desktop2.png", "/projects/glance/desktop3.png", "/projects/glance/desktop4.png", "/projects/glance/desktop5.png", "/projects/glance/desktop6.png", "/projects/glance/desktop7.png"],
        },
        subTitle: "Investment tracking tools suffer from one of three problems, they're too complex, too expensive or too useless to be used regularly. Glance is a tool that lets you easily keep an overview of your investments, dividends and performance across services without being overwhelming for the average user. The goal is to create an experience as easy to use as Microsoft Excel with the design of a modern website. The MVP UX was completed and it is planned to be built using React/NEXTjs with a separate BFF using C#",
        uxURL: "https://www.figma.com/proto/yfATxB2h0pjKwe1rdItWCC/Glance-Draft?node-id=0%3A3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=0%3A3",
    },
    {
        title: "Travel Blog",
        created: 2,
        images: {
            desktop: ["/projects/travel-blog/desktop1.png", "/projects/travel-blog/desktop2.png", "/projects/travel-blog/desktop3.png", "/projects/travel-blog/desktop4.png", "/projects/travel-blog/desktop5.png",],
            mobile: ["/projects/travel-blog/mobile1.png", "/projects/travel-blog/mobile2.png", "/projects/travel-blog/mobile3.png", "/projects/travel-blog/mobile4.png", "/projects/travel-blog/mobile5.png"]
        },
        subTitle: "Traveling the world is an important goal of mine, as I believe living, working and volunteering in other cultures is what can make you more open minded and receptive to new ideas. I built this site using Python with the Flask framework and Javascript with jquery for animations and automatic scaling. The focus is on design and presentation and uses external services like Google Drive for free video hosting and Mapbox for an interactive 3D map containing images",
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
        subTitle: "My first ever programming project. A tool to help my partner and I while we were stuck in Japan during the 2020 pandemic. The webapp is primarily designed for mobile and has a 'food roulette' mode to store a list of meals we like and randomly suggests one when tapping 'generate'. \n It also has a simple currency conversion tool that quickly shows purchasing power of other fx compared to AUD. \n It was built using Python with the Flask framework and deployed to PythonAnywhere.com",
        deployedURL: "http://opfman.pythonanywhere.com/",
        repoURL: "https://github.com/OperationFman/Krank",
      },
]