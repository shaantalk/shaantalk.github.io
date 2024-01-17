// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Santanu Panda",
  tagline: "Frontend Engineer at Cisco",
  favicon: "img/Logo.png",

  // Set the production url of your site here
  url: "https://shaantalk.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/portfolio_v4/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "shaantalk", // Usually your GitHub org/user name.
  projectName: "portfolio_v4", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "ignore", //"throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "shaantalk-tag-1",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/shaantalk/shaantalk.github.io/tree/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/shaantalk/shaantalk.github.io/tree/master/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Santanu Panda",
        logo: {
          alt: "Home Logo",
          src: "img/Logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "About Me",
          },
          { to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://github.com/shaantalk",
          //   position: "right",
          //   className: "header--github-link",
          //   "aria-label": "GitHub repository",
          // },
          // {
          //   className: "navbar__youtube navbar__icon",
          //   "aria-label": "YouTube channel",
          //   position: "right",
          //   href: "https://www.youtube.com/@shaantalk",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About Me",
            items: [
              {
                label: "My Work",
                to: "docs/about_me/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/shaantalk/",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@shaantalk",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/shaantalk/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/shaantalk",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/shaantalk",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Santanu Panda.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // Add the defaultMode property to set dark mode as default
      colorMode: {
        defaultMode: "dark",
        // disableSwitch: false,
        // respectPrefersColorScheme: false,
      },

      // Uncomment this if you want to add some announcements
      // announcementBar: {
      //   id: "connection_req",
      //   content:
      //     'Please connect with me on <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shaantalk/">Linkedin</a>',
      //   backgroundColor: "#fafbfc",
      //   textColor: "#091E42",
      //   isCloseable: false,
      // },
    }),
  stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
};

export default config;
