/** @type {import('@docusaurus/types').PluginConfig} */
module.exports = [
  'docusaurus-plugin-sass',
  [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    {
      indexDocs: true,
      indexDocSidebarParentCategories: 3,
      indexBlog: true,
      indexPages: true,
      language: "zh",
      style: undefined,
      lunr: {
        tokenizerSeparator: /[\s\-]+/,
        // https://lunrjs.com/guides/customising.html#similarity-tuning
        b: 0.75,
        k1: 1.2,
        titleBoost: 5,
        contentBoost: 1,
        parentCategoriesBoost: 2,
      },
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "navigation",
      routeBasePath: "navigation",
      sidebarPath: require.resolve("../sidebars.js"),
      path: "./navigation",
    },
  ],
  [
    "@docusaurus/plugin-content-blog",
    {
      id: "aboutus",
      routeBasePath: "aboutus",
      path: "./aboutus",
      blogTitle: "#aboutus",
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "analyze",
      routeBasePath: "analyze",
      sidebarPath: require.resolve("../sidebars.js"),
      path: "./analyze",
    },
  ],
  [
    "@docusaurus/plugin-content-blog",
    {
      id: "fun",
      routeBasePath: "fun",
      path: "fun",
      blogTitle: "fun",
      blogDescription: "blog",
      showReadingTime: true,
      postsPerPage: 50,
      blogSidebarCount: 100,
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "crypto",
      routeBasePath: "crypto",
      sidebarPath: require.resolve("../sidebars.js"),
      path: "./crypto",
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "security",
      routeBasePath: "security",
      sidebarPath: require.resolve("../sidebars.js"),
      path: "./security",
    },
  ],
  async function myPlugin(context, options) {
    return {
      name: "docusaurus-tailwindcss",
      configurePostCss(postcssOptions) {
        // Appends TailwindCSS and AutoPrefixer.
        postcssOptions.plugins.push(require("tailwindcss"));
        postcssOptions.plugins.push(require("autoprefixer"));
        return postcssOptions;
      },
    };
  },
];
