---
title: Solidity错误处理（require、revert、assert）
sidebar_label: 😩Solidity错误处理（require、revert、assert）
sidebar_position: 11
image: /img/bac111.png
description: Solidity的错误处理函数使用
---
import {EmbedGiscus} from '@site/src/components/Talk'

## 简介

目前Solidity使用了3中异常错误的处理，且都为手动处理可以便于开发者进行错误的判断及定位问题

require：用于验证当前条件是否满足，如果满足则继续执行，不满足则记录描述异常
revert：直接回滚数据，可以直接回滚，也可以定义错误描述内容
assert：断言，像其他语言类似，不符合预想的结果，则抛出错误

用法：
flag为布尔类型判断

```solidity

require(condition, "Error");

if(!condition) revert();
if(!condition) revert("Code error");

error YourError(uint amount);
...
if(!condition) revert YourError(amount);

assert(condition);

```

## 适用场景

require() 适用场景：
1. 用于输入验证

   ```
    require(inputAmount > 0, "Amount error");
   ```
2. 验证外部合约的返回值

   ```
   require(externalSol.getBalance(msg.sender)>0, "Balance Error");
   ```
3. 条件验证：

   ```
    require(currentStatus > 2, "Status error");
   ```

revert() 适用场景：
1. SafeMath中有使用过，类似于整形溢出
   ```
   c = a + b;
   assert(c > b);
   ```
2. 与成员变量进行比较
    ```
   uint256 a = 100;
   ...
   function ...{
      assert(b > a);
   }
   ```
3. 验证状态信息：
    ```
    assert(sellStauts > 0);
    ```

## Gas开销

assert() 将消耗所有剩余的Gas，并恢复所有的操作。
require() 和 revert() 将退还所有剩余的Gas，同时可以返回一个值（自定义的报错信息）。

## 总结

当看到gas开销的时候，也就知道assert()尽量避免使用，或者代码块的末尾使用，所以要避免使用
revert()因为可以自定义方法及参数，所以表述起来更自由，可适用较为复杂的异常，require适用于正常的条件判断

如有疑问请留言：

<EmbedGiscus>giscusNftExample</EmbedGiscus>

