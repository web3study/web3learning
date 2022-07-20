/** @type {import('@docusaurus/types').PresetConfig[]} */
module.exports = [
  [
    "classic",
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        routeBasePath: "wiki",
        path: "wiki",
        sidebarPath: require.resolve("../sidebars.js"),
        // Please change this to your repo.
        // editUrl: "/main/",
        // showLastUpdateAuthor: true,
        // showLastUpdateTime: true,
      },
      blog: {
        routeBasePath: "news",
        path: "news",
        blogTitle: "news",
        blogDescription: "blog",
        showReadingTime: true,
        postsPerPage: 50,
        blogSidebarCount: 100,
        // Please change this to your repo.
        // editUrl: "/main/",
      },
      theme: {
        customCss: require.resolve("../src/css/custom.scss"),
      },
    }),
  ],
];
