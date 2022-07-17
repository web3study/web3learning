---
title: 合约学习
sidebar_label: 合约学习
sidebar_position: 50
image: sss
description: aaa
---
## 一个完整的示例

  接下来会以一个简单的方式，从合约编写到部署，到简单的前端调用来做一个dapp的示例。
  步骤主要分为：合约、部署、dapp简单界面（前端）、合约调用
  
  Dapp的功能
  - 可以领取食物，与上一次领取时间间隔2min
  - 给小狗喂食物
  - 每个人都可以去喂小狗
  - 食物总量为10
  - 开始时间为部署合约时间
  - 最后食物消耗完，喂养多着获胜（数量相同，则按照先喂养的顺序）


分析一下（主要为示例作用，尽量简化不做扩展）

需要保存的参数：
当前喂小狗的时间、每个人已喂的量、每个人当前还剩余的食物量、记录胜者


### 合约
```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/utils/math/SafeMath.sol";

    /** 
     * @title Pet
     * @author yzbban
     * @notice Dog feed
     * @dev Pet test
     */
    contract Pet {
        event Feed(address _owner);
        event ReceiveFood(address _owner);

        using SafeMath for uint;
    
        //用户拥有的食物量
        mapping(address=>uint) foodOwners;

        //用户拥有的食物量
        mapping(address=>uint) feedOwners;
        //胜利者
        address private winner;

        uint public foods;
        uint public lastTime;

        constructor(){
            foods = 10;
        }


        function getWinner() public view returns(address){
            return winner;
        }

        ///@notice  获取食物
        function receiveFood() external{
            require(block.timestamp > lastTime.add(2 minutes),"Cool down");
            require(foods>0,"Food not enough!");
            foods = foods.sub(1);
            foodOwners[msg.sender] = foodOwners[msg.sender].add(1);
            lastTime = block.timestamp;
            emit ReceiveFood(msg.sender);
        }

        ///@notice  喂养食物
        function feed() external{
            require(foodOwners[msg.sender]>0,"Food");
            foodOwners[msg.sender] = foodOwners[msg.sender].sub(1);
            feedOwners[msg.sender] = feedOwners[msg.sender].add(1);
            if(feedOwners[msg.sender]>feedOwners[winner]){
                winner = msg.sender;
            }
            emit Feed(msg.sender);
        }

    }

```


:::info
注释说明
1️⃣ 此为许可相关的表述方式，具体的可以参考SPDX许可列表网址：[SPDX许可列表](https://spdx.org/licenses/)
:::
   

:::info
基本的语法构成
熟悉代码的应该会对状态变量、局部变量、构造函数、函数等有一定的了解。
1. 其中`constructor`表述的就是构造函数，及合约初始化的部署的时候直接执行的函数，
2. `function`此关键字，很多语言中都会用到，称为函数或者函数，用来包裹功能模块
3. `require`抛出异常使用，如果不符合条件，则抛出
4. 状态变量即为不在函数中声明的变量，局部变量即为函数中声明的变量
5. `import`支持两种方式，一种是外部github导入，一种是本地文件
:::

### Remix部署

这里介绍一个较为简单的方式（也是大多数初学者使用的），没有较多的功能模块的介绍，所以较为适合初学者学习使用，
[REMIX IDE网站](https://remix.ethereum.org/)，打开网站复制上述代码（或者直接在remix中编写）


### 总结

  业务逻辑、架构的使用、数据结构的设计为代码的主要处理模块，初学者可以优先关注业务逻辑，在熟练掌握语法、关键字的同时多多练习就能实现简单的合约内容了，下面讲解具体的代码结构、语法等，每个都会举一个简单的例子。