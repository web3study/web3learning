---
title: 开发库
sidebar_label: 🫤开发库
sidebar_position: 5
image: /img/bac111.png
description: 开发库
---
import DevNav from './DevNav';

### 工具

工欲善其事必先利其器，所需要的环境，需要安装好才好进行下一步
开发合约必要的环境
### 安装Node.js
脚本类型的几乎所有的组件、插件都离不开他，**truffle**、**Hardhat**就是建立Node.js之上

https://nodejs.org/zh-cn/download/

直接选择自己的系统，下载安装即可（或者阅读下面的部分）

合约中会用到它来安装各种包、插件等

如果你已经安装了的 `Node.js > = 16.0`，则可以跳过 如果没有，请按照以下步骤在Ubuntu，MacOS和Windows上安装它。

将以下命令复制并粘贴到终端中：
```js
sudo apt update
sudo apt install curl git
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install nodejs
```
#### MacOS
确保你已安装git。 否则，请遵循这些说明安装。

在MacOS上有多种安装Node.js的方法。 我们将使用 Node 版本管理器(nvm)。 将以下命令复制并粘贴到终端中：

```js
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.2/install.sh | bash
nvm install 16
nvm use 16
nvm alias default 16
npm install npm --global # Upgrade npm to the latest version
```
#### Windows
在Windows上安装Node.js需要一些手动步骤。 我们将安装git，Node.js 16.x和NPM的Windows构建工具。 
下载并运行以下命令：
1. [Git的Windows安装程序](https://git-scm.com/download/win)
2. node-v116.XX.XX-x64.msi [在这里下载](https://nodejs.org/dist/latest-v16.x/)
### 升级 Node.js
如果你的 Node.js 版本低于 16.0 , 则需要通过以下指引升级。

#### Ubuntu
运行 sudo apt remove nodejs 删除 Node.js.
[在这里](https://github.com/nodesource/distributions#debinstall) 找到你想要安装的版本
运行 `sudo apt update && sudo apt install nodejs` 再次安装
#### MacOS
你可以使用 nvm 切换版本. 为了升级到 `Node.js 16.x` 可运行一下命令：
```js
nvm install 16
nvm use 16
nvm alias default 16
npm install npm --global # 升级 npm 到最新版本
```
#### Windows
参考安装时同样的方式，但选择不同的版本，[这里](https://nodejs.org/en/download/releases/) 列出了所有版本。

### 主要工具
这里主要介绍下常用的或者会用到的工具库（持续更新）
<DevNav></DevNav>
---

放松一下
<iframe src="https://player.bilibili.com/player.html?bvid=BV1BZ4y1H79N" scrolling="no" frameBorder="no" framespacing="0" allowFullScreen={false}></iframe>


