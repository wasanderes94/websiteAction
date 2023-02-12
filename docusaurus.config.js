// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const core = require('@actions/core');
const github = require('@actions/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Overview',
  favicon: 'img/favicon.ico',
  staticDirectories: ['images', 'static'],

  // Set the production url of your site here
  url: 'https://example-monorepo.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${github.context.repo.repo}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: github.context.repo.owner , // Usually your GitHub org/user name.
  projectName: github.context.repo.repo, // Usually your repo name.
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Overview',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'project1/project1',
            position: 'left',
            label: 'Projects',
          },
        /*   {to: '/blog', label: 'Blog', position: 'left'}, */
          {
            href: 'https://github.com/wasanderes94/example-monorepo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
/*         links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ], */
        copyright: `Copyright © ${new Date().getFullYear()} example-monorepo, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
