/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: "https://franklin-v-moon.dev",
    generateRobotsTxt: true,
    changefreq: "daily",
    robotsTxtOptions: {
        policies: [
          {
            userAgent: "*",
            allow: "/",
          }
        ],
    },
  };