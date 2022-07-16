// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types')} */
const config = {
  title: "Web3 Study",
  tagline: "#WeLoveStudy",
  url: "https://web3study.club",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "web3Study", // Usually your GitHub org/user name.
  projectName: "web3Study", // Usually your repo name.
  titleDelimiter: ' 🍀 ', // Defaults to `|`

  presets: require("./config/presets"),
  themeConfig: require("./config/theme"),
  plugins: require("./config/plugin"),
};

module.exports = config;
