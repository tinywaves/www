/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'docs-introduction',
    {
      type: 'category',
      label: 'Algorithm',
      link: {
        type: 'generated-index',
        title: 'Algorithm',
        slug: '/algorithm'
      },
      items: [
        {
          type: 'category',
          label: 'LeetCode',
          link: {
            type: 'doc',
            id: 'LeetCode/index'
          },
          items: []
        }
      ]
    },
    {
      type: 'category',
      label: 'Block Chain',
      items: [
        {
          type: 'category',
          label: '学习与毕业设计',
          link: {
            type: 'generated-index',
            title: '学习与毕业设计',
            slug: '/block-chain/learn-graduation-project'
          },
          items: [
            'BlockChain/学习与毕业设计/区块链知识储备'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Others',
      link: {
        type: 'generated-index',
        title: 'Others',
        slug: '/others'
      },
      items: [
        {
          type: 'category',
          label: 'Visual Studio Code',
          link: {
            type: 'doc',
            id: 'Visual Studio Code/index'
          },
          items: [
            'Visual Studio Code/Keyboard shortcuts',
            'Visual Studio Code/tsconfig.json 在 vscode 中报错警告'
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
