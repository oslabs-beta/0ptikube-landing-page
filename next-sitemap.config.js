/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://optikube.dev', // Your live domain
  generateRobotsTxt: true, // Also generate a robots.txt
  sitemapSize: 5000, // Ensures large sites don’t break sitemap
  exclude: ['/404'], // Exclude unwanted pages
  additionalPaths: async () => [
    { loc: '/', lastmod: new Date().toISOString() }, // Explicitly include homepage
  ],
};
