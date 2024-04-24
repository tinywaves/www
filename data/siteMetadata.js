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
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'algolia',
    algoliaConfig: {
      appId: '5I7V4TKO8G', // Application ID
      apiKey: '050d2e3dc5dd2291bba2ff3a93663f05', // Search-Only API Key
      indexName: 'tinywaves',
    },
  },
};

module.exports = siteMetadata;
