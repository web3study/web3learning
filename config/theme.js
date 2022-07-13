/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
module.exports = {
  navbar: {
    // title: "Web3 Study",
    logo: {
      alt: "Web3 Study Logo",
      src: "img/logo-web3.svg",
    },
    items: [
      {
        label: "👻 入门教程",
        position: "left",
        to: "wiki/introduction",
        items: [
          {
            label: "🐈 前言",
            to: "wiki/introduction",
          },
          {
            label: "🪂 新手入门",
            to: "wiki/solidity",
          },
          {
            label: "🎁 前端教程",
            to: "wiki/web",
          },
          {
            label: "🪂 openzeppelin详解",
            to: "wiki/oz",
          },
          {
            label: "🪂 源码解析",
            to: "wiki/code",
          },
        ],
      },
      {
        to: "/crypto", label: "🔑 密码学", position: "left", items: [
          {
            label: "🐈 椭圆曲线",
            to: "/crypto/kec",
          },
          {
            label: "👵🏻 门限签名",
            to: "/crypto/threshold",
          },
          {
            label: "⛓ 安全多方计算",
            to: "/crypto/secure-multi-party",
          },
          {
            label: "🧰 同态加密",
            to: "/crypto/homomorphic",
          },
          {
            label: "👻 杂凑函数",
            to: "/crypto/hash",
          }
        ],
      },
      {
        to: "/analyze",
        label: "📊 数据分析",
        position: "left", items: [
          {
            label: "📅 链监控",
            to: "/analyze/monitor",
          },
          {
            label: "📔 分析工具",
            to: "/analyze/tool",
          },
          {
            label: "🎙 排行榜",
            to: "/analyze/rank",
          },
          {
            label: "💬 巨鲸信息",
            to: "/analyze/nerd",
          },
        ],
      },
      {
        to: "/security",
        label: "🔐 安全",
        position: "left",
        items: [
          {
            label: "👾 常见安全问题",
            to: "/security/question",
          },
          {
            label: "🐞 安全问题汇总",
            to: "/security/pool",
          },
          {
            label: "🪲 案例分析",
            to: "/security/case",
          },
          {
            label: "👓 合约审计",
            to: "/security/audit",
          },
          {
            label: "🏟 试炼广场",
            to: "/security/try",
          },
        ],
      },
      // {后期添加
      //   label: "🛠 工具",
      //   position: "left",
      //   to: "/tools",
      //   items: [
      //     {
      //       label: "📅 资料链接",
      //       to: "/tools/weekly-update",
      //     },
      //     {
      //       label: "📔 地址生成",
      //       to: "/tools/tags/blog",
      //     },
      //     {
      //       label: "🎙 代币、NFT授权",
      //       to: "/tools/purr-cast",
      //     },
      //     {
      //       label: "🧐 加速交易",
      //       to: "/tools/explained",
      //     },
      //     {
      //       label: "👨‍🏫 合约审计工具",
      //       to: "/tools/learn",
      //     },
      //   ],
      // },
      // { 还没想好些什么
      //   label: "🍩 优选分享",
      //   position: "left",
      //   to: "/share",
      //   items: [
      //     {
      //       label: "😼 PCC Team",
      //       to: "/share/team",
      //     },
      //     {
      //       label: "🔗 PCC Official Links",
      //       to: "/share/official-links",
      //     },
      //     {
      //       label: "🎨 Artwork",
      //       to: "/share/artwork",
      //     },
      //     {
      //       label: "🛠 Contracts & EOA Addresses",
      //       to: "/share/addresses",
      //     },
      //     {
      //       label: "😻 WeLoveThePurrs",
      //       to: "/share/welovethepurrs",
      //     },
      //   ],
      // },
      {
        label: "📱 web3导航",
        position: "left",
        to: "/navigation",
        items: [
          {
            label: "🏦 DEFI类",
            to: "/navigation/defi",
          },
          {
            label: "🎇 NFT类",
            to: "/navigation/nft",
          },
          {
            label: "🛠 工具类",
            to: "/navigation/tool",
          },
          {
            label: "📈 数据类",
            to: "/navigation/data",
          },
          {
            label: "🧮 分析类",
            to: "/navigation/analyze",
          },
        ],
      },
      //此在 src pages 文件夹中
      {
        label: "⛄️ About",
        position: "right",
        to: "/about",
        items: [
          {
            label: "📝 About Web3 Study",
            to: "/about",
          },
          {
            label: "🛤 Contribute",
            to: "/contribute",
          },
          {
            label: "Web3 Github",
            href: "https://github.com/web3study",
          },
        ],
      },
    ],
  },
  footer: {
    style: "dark",
    links: [
      {
        title: "Web3 study",
        items: [
          {
            label: "🍯 About",
            to: "/aboutus",
          },
          {
            label: "🍩 FAQ",
            to: "/aboutus/faq",
          },
        ],
      },
      {
        title: "Web3 Study Official",
        items: [
          {
            label: "Website",
            href: "https://www.xxx.com/",
          },
          {
            label: "Discord",
            href: "http://discord.gg/",
          },
          {
            label: "Twitter",
            href: "https://twitter.com",
          },
        ],
      },
      {
        title: "More",
        items: [
          {
            label: "Web3 Stuty GitHub",
            href: "https://github.com/web3study",
          },
        ],
      },
    ],
    copyright: `${new Date().getFullYear()} web3-study`,
  },
  image: "img/pcc-archive-soc.jpg",
  metadata: [{ name: "twitter:card", content: "summary_large_image" }],
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
  colorMode: {
    defaultMode: "light",
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  announcementBar: require("./announcementBar"),
  metadata: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }],
};
