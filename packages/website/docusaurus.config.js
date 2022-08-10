// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { ProvidePlugin } = require("webpack");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bento DS",
  tagline: "An extensible and customizable Design System for React",
  url: "https://bento-design-system-ruddy.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "buildo",
  projectName: "bento-design-system",
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/buildo/bento-design-system/tree/main/packages/website/",
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
      configureWebpack(_config, isServer) {
        return {
          mergeStrategy: {
            plugins: "append",
            resolve: "append",
          },
          plugins: isServer
            ? undefined
            : [
                // These plugins are needed to make @babel/generate work in browser
                new ProvidePlugin({ process: "process/browser.js" }),
                new ProvidePlugin({
                  Buffer: ["buffer", "Buffer"],
                }),
              ],
          resolve: isServer
            ? undefined
            : {
                // Necessary for @babel/standlone to work
                fallback: {
                  path: false,
                  fs: false,
                },
              },
        };
      },
    }),
    [
      "docusaurus-plugin-react-docgen-typescript",
      {
        src: ["../storybook/stories/index.tsx"],
        global: true,
        parserOptions: {
          // @ts-ignore
          propFilter: (prop) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes("node_modules");
            }

            return true;
          },
          shouldExtractLiteralValuesFromEnum: true,
          shouldRemoveUndefinedFromOptional: true,
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: "Bento DS",
        logo: {
          alt: "Bento DS",
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
            type: "doc",
            docId: "Governance/governance",
            position: "left",
            label: "Governance",
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
      algolia: {
        appId: "SHRTHVI32H",
        apiKey: "607bebbf572fe79f2e1c67c517993edc",
        indexName: "bento",
        contextualSearch: true,
      },
    },
};

module.exports = config;
