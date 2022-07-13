// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types')} */
const config = {
  title: "Web3 Stydy",
  tagline: "#WeLoveThePurrs",
  url: "https://web3Study11111",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "CuratorCat222", // Usually your GitHub org/user name.
  projectName: "web3Study", // Usually your repo name.
  titleDelimiter: ' 😺 ', // Defaults to `|`

  presets: require("./config/presets"),
  themeConfig: require("./config/theme"),
  plugins: require("./config/plugin"),
};

module.exports = config;
