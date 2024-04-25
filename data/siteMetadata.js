/* eslint-disable node/prefer-global/process */
/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'tinywaves',
  author: 'Easton Zheng',
  headerTitle: 'Personal Website',
  description: 'My personal website, about Node.js, React.js, TypeScript, JavaScript, Golang and so on.',
  language: 'en-US',
  theme: 'system',
  siteUrl: 'https://tinywaves.vercel.app/',
  siteRepo: 'https://github.com/eastonzh/website',
  siteLogo: '/static/favicons/favicon.ico',
  socialBanner: '/static/favicons/social-banner.svg',
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'dhzhme@gmail.com',
  github: 'https://github.com/eastonzh',
  twitter: 'https://twitter.com/isdhzh',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/tinywaves',
  // threads: 'https://www.threads.net',
  // instagram: 'https://www.instagram.com',
  locale: 'en-US',
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
      src: 'https://analytics.us.umami.is/script.js',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
};

module.exports = siteMetadata;
