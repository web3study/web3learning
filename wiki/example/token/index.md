---
title: Token示例(ERC20)
sidebar_label: 😫Token示例
sidebar_position: 20
image: /img/bac111.png
description: desc
---
![img.png](assets/imgcoin.png)
以太坊 TOKEN 是以太坊虚拟机的一个令人难以置信的强大功能，
因为它可以代表几乎任何东西，
从金融资产到游戏角色的技能，到法定货币，等等。以太坊的繁荣也因可自由开发的TOKEN而起

这里主要介绍ERC20，ERC777是ERC20的加强版，添加了对1820的支持，可以防止误将TOKEN打入不支持1820的合约之中


### 为什么要构建自己的ERC-20 TOKEN

[ERC-20 标准](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)

ERC-20代币标准是在以太坊和evm兼容的区块链上创建同质化加密货币的方式，当前ETH上大都是ERC-20协议，ERC-777很少出现
因此允许构建者和创造者为他们的协议、市场、元宇宙或社区DAO开发数字资产。


### 什么是ERC-20？




### 创建自己的ERC20 TOKEN


```js
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
// OpenZeppelin package contains implementation of the ERC20 standard
import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; 

contract TestCoin is ERC20 {
    uint256 constant _initial_supply = 100000e18; 
    constructor() ERC20("Test Coin", "TG") {
        _mint(msg.sender, _initial_supply);
    }
}
```
