// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Website',
  tagline: 'Focus on React.js and Golang',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://website-dzh.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/tinyRipple/website/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "tinyRipple's Website",
        logo: {
          alt: "tinyRipple's Website avatar",
          src: 'img/avatar.png',
        },
        items: [
          { type: 'search', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            href: 'https://github.com/tinyRipple/website',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'BX6IW2IRH9',
        apiKey: '6d0c92a974f223f4a8d10d560e0ee951',
        indexName: 'web-dzh',
      },
    }),
};

module.exports = config;
