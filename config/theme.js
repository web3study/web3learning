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
        label: "ð» å¥é¨æç¨",
        position: "left",
        to: "wiki/introduction",
        items: [
          {
            label: "ð åè¨",
            to: "wiki/introduction",
          },
          {
            label: "ðª æ°æå¥é¨",
            to: "wiki/solidity",
          },
          {
            label: "ð¥ åç«¯æç¨",
            to: "wiki/web",
          },
          {
            label: "ð¤ å·¥å·åºæç¨",
            to: "wiki/tool",
          },
          {
            label: "ðª openzeppelinè¯¦è§£",
            to: "wiki/oz",
          },
          {
            label: "ðª æºç è§£æ",
            to: "wiki/code",
          },
        ],
      },
      {
        to: "/crypto", label: "ð å¯ç å­¦", position: "left", items: [
          {
            label: "ð æ¤­åæ²çº¿",
            to: "/crypto/kec",
          },
          {
            label: "ðµð» é¨éç­¾å",
            to: "/crypto/threshold",
          },
          {
            label: "â å®å¨å¤æ¹è®¡ç®",
            to: "/crypto/secure-multi-party",
          },
          {
            label: "ð§° åæå å¯",
            to: "/crypto/homomorphic",
          },
          {
            label: "ð» æåå½æ°",
            to: "/crypto/hash",
          }
        ],
      },
      {
        to: "/analyze",
        label: "ð æ°æ®åæ",
        position: "left", items: [
          {
            label: "ð é¾çæ§",
            to: "/analyze/monitor",
          },
          {
            label: "ð åæå·¥å·",
            to: "/analyze/tool",
          },
          {
            label: "ð æè¡æ¦",
            to: "/analyze/rank",
          },
          {
            label: "ð¬ å·¨é²¸ä¿¡æ¯",
            to: "/analyze/nerd",
          },
        ],
      },
      {
        to: "/security",
        label: "ð å®å¨",
        position: "left",
        items: [
          {
            label: "ð¾ å¸¸è§å®å¨é®é¢",
            to: "/security/question",
          },
          {
            label: "ð å®å¨é®é¢æ±æ»",
            to: "/security/pool",
          },
          {
            label: "ðª² æ¡ä¾åæ",
            to: "/security/case",
          },
          {
            label: "ð åçº¦å®¡è®¡",
            to: "/security/audit",
          },
          {
            label: "ð è¯ç¼å¹¿åº",
            to: "/security/try",
          },
        ],
      },
      // {åææ·»å 
      //   label: "ð  å·¥å·",
      //   position: "left",
      //   to: "/tools",
      //   items: [
      //     {
      //       label: "ð èµæé¾æ¥",
      //       to: "/tools/weekly-update",
      //     },
      //     {
      //       label: "ð å°åçæ",
      //       to: "/tools/tags/blog",
      //     },
      //     {
      //       label: "ð ä»£å¸ãNFTææ",
      //       to: "/tools/purr-cast",
      //     },
      //     {
      //       label: "ð§ å éäº¤æ",
      //       to: "/tools/explained",
      //     },
      //     {
      //       label: "ð¨âð« åçº¦å®¡è®¡å·¥å·",
      //       to: "/tools/learn",
      //     },
      //   ],
      // },
      // { è¿æ²¡æ³å¥½äºä»ä¹
      //   label: "ð© ä¼éåäº«",
      //   position: "left",
      //   to: "/share",
      //   items: [
      //     {
      //       label: "ð¼ PCC Team",
      //       to: "/share/team",
      //     },
      //     {
      //       label: "ð PCC Official Links",
      //       to: "/share/official-links",
      //     },
      //     {
      //       label: "ð¨ Artwork",
      //       to: "/share/artwork",
      //     },
      //     {
      //       label: "ð  Contracts & EOA Addresses",
      //       to: "/share/addresses",
      //     },
      //     {
      //       label: "ð» WeLoveThePurrs",
      //       to: "/share/welovethepurrs",
      //     },
      //   ],
      // },
      {
        label: "ð± web3å¯¼èª",
        position: "left",
        to: "/navigation",
        items: [
          {
            label: "ð¦ DEFIç±»",
            to: "/navigation/defi",
          },
          {
            label: "ð NFTç±»",
            to: "/navigation/nft",
          },
          {
            label: "ð  å·¥å·ç±»",
            to: "/navigation/tool",
          },
          {
            label: "ð æ°æ®ç±»",
            to: "/navigation/data",
          },
          {
            label: "ð§® åæç±»",
            to: "/navigation/analyze",
          },
        ],
      },
      //æ­¤å¨ src pages æä»¶å¤¹ä¸­
      {
        label: "âï¸ About",
        position: "right",
        to: "/about",
        items: [
          {
            label: "ð About Web3 Study",
            to: "/about",
          },
          {
            label: "ð¤ Contribute",
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
            label: "ð¯ About",
            to: "/aboutus",
          },
          {
            label: "ð© FAQ",
            to: "/aboutus/faq",
          },
        ],
      },
      {
        title: "Web3 Study Official",
        items: [
          {
            label: "Website",
            href: "https://www.web3study.club/",
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
            label: "Web3 Study GitHub",
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
