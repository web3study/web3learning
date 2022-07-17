## Content

This project is using docusaurus.

### Installation

```
$ yarn  or npm install
```

### Local Development

```
$ yarn start or npm run start
```

### Build

```
$ yarn build or npm run build
```

### Deploy

Currently deployed using Vercel for the `main` branch in this repo.

## 顶部tab

  配置文件在config中，为下拉内容json格式， 可以进行添加修改，不过最好是统一进行修改，方式提交错乱

## 创建文件夹

  config中，直接标记了文件加的所在路径，即为文档的书写位置，如：aboutus，就在 `aboutus` 文件夹中，根目录的index.md代表点击标题栏显示的内容，内部可以添加子文件夹，自动作为文档的左侧tab使用，并且自动分级，当然每个文件夹都需要建立根index.md，这个为系统的扫描文件，里面有些基础信息，根据教程填写即可 （demo文件夹里面有相关示例），所有的图片资源，放在同级的`assets`文件夹下。注意 `sidebar_position` 代表排序
  [参考连接](https://github.com/yzbbanban/web3study/tree/main/demo)


## 基础文件夹说明

  1. aboutus 描述关于我们的文案
  2. config 配置文件
  3. crypto 密码学的教学文案写在这里
  4. news 周更的文案写在这里
  5. analyze 分析类文章写在这里
  6. navigation 导航类文章写在这里
  7. security 安全类文章写在这里
  8. wiki solidity基础写在这里


## package.json添加日志

  7-18 添加zh分词搜素 `nodejieba`
