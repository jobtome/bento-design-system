// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { ProvidePlugin } = require("webpack");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bento Design System",
  tagline: "A design system builder for buildo projects",
  url: "https://buildo.github.io",
  baseUrl: "/bento-design-system/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "buildo",
  projectName: "bento-design-system",
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/buildo/bento-design-system/tree/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    () => ({
      name: "webpack-config-plugin",
      configureWebpack(config) {
        return {
          mergeStrategy: {
            plugins: "append",
          },
          plugins: [
            // These plugins are needed to make @babel/generate work in browser
            new ProvidePlugin({ process: "process/browser" }),
            new ProvidePlugin({
              Buffer: ["buffer", "Buffer"],
            }),
          ],
        };
      },
    }),
    [
      "docusaurus-plugin-react-docgen-typescript",
      {
        src: "../bento-design-system/src/**.{ts,tsx}",
        global: true,
        parserOptions: {
          propFilter: (prop) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes("@types/react");
            }

            return true;
          },
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: "Bento Design System",
        logo: {
          alt: "Bento Design System",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/buildo/bento-design-system",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/buildoHQ",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/buildo/bento-design-system",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} buildo`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
