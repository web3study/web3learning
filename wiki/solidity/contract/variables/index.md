---
title: 全局变量
sidebar_label: 全局变量
sidebar_position: 40
image: sss
description: aaa
---
## 全局变量（扩展知识）

`abi.decode(bytes memory encodedData, (...)) returns (...)`: ABI - 解码提供的数据。类型在括号中作为第二个参数给出。

例子：`(uint a, uint[2] memory b, bytes memory c) = abi.decode(data, (uint, uint[2], bytes))`

`abi.encode(...) returns (bytes memory)`: ABI - 编码给定的参数

`abi.encodePacked(...) returns (bytes memory)`：对给定参数执行打包编码。请注意，此编码可能不明确！

`abi.encodeWithSelector(bytes4 selector, ...) returns (bytes memory)`: ABI - 从第二个开始对给定的参数进行编码，并将给定的四字节选择器放在前面

`abi.encodeCall(function functionPointer, (...)) returns (bytes memory)functionPointer`: ABI使用元组中的参数对调用进行编码。执行完整的类型检查，确保类型与函数签名匹配。结果等于`abi.encodeWithSelector(functionPointer.selector, (...))`

`abi.encodeWithSignature(string memory signature, ...) returns (bytes memory)`： 相当于`abi.encodeWithSelector(bytes4(keccak256(bytes(signature)), ...)`

`bytes.concat(...) returns (bytes memory)`:将可变数量的参数连接到一个字节数组

`string.concat(...) returns (string memory)`:将可变数量的参数连接到一个字符串数组

`block.basefee( uint)`：当前区块的基本费用（EIP-3198和EIP-1559）

`block.chainid( uint)`: 当前链 id

`block.coinbase( )`: 当前区块矿工地址address payable

`block.difficulty( uint)`: 当前区块难度

`block.gaslimit( uint)`: 当前区块gaslimit

`block.number( uint)`: 当前区块号

`block.timestamp( uint)`: 自 Unix 纪元以来的当前区块时间戳（以秒为单位）

`gasleft() returns (uint256)`: 剩余气体

`msg.data( bytes)`: 完整的通话数据

`msg.sender( address)`: 消息的发送者（当前通话）

`msg.sig( bytes4)`：calldata 的前四个字节（即函数标识符）

`msg.value( uint)`: 随消息发送的 wei 数量

`tx.gasprice( uint)`: 交易的gas价格

`tx.origin( address)`: 交易的发送者（完整的调用链）

`assert(bool condition)`：如果条件是，则中止执行并恢复状态更改false（用于内部错误）

`require(bool condition)`：如果条件是，则中止执行并恢复状态更改false（用于格式错误的输入或外部组件中的错误）

`require(bool condition, string memory message)`：如果条件是false（用于格式错误的输入或外部组件中的错误），则中止执行并恢复状态更改。同时提供错误信息。

`revert()`: 中止执行并恢复状态更改

`revert(string memory message)`：中止执行并恢复状态更改，提供解释性字符串

`blockhash(uint blockNumber) returns (bytes32)`: 给定区块的哈希 - 仅适用于 256 个最近的区块

`keccak256(bytes memory) returns (bytes32)`: 计​​算输入的 Keccak-256 哈希

`sha256(bytes memory) returns (bytes32)`: 计​​算输入的 SHA-256 哈希

`ripemd160(bytes memory) returns (bytes20)`: 计​​算输入的 RIPEMD-160 散列

`ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address)`：从椭圆曲线签名中恢复与公钥关联的地址，错误返回零

`addmod(uint x, uint y, uint k) returns (uint)`: 计​​算以任意精度执行加法的位置，并且不会在 处回绕。断言从版本 0.5.0 开始。`(x + y) % k2**256k != 0`

`mulmod(uint x, uint y, uint k) returns (uint)`: 计​​算以任意精度执行乘法的位置，并且不会在 处回绕。断言从版本 0.5.0 开始。`(x * y) % k2**256k != 0`

`this`（当前合约的类型）：当前合约，可显式转换为`address`或`address payable`

`super`: 继承层次中更高一级的合约

`selfdestruct(address payable recipient)`：销毁当前合约，将其资金发送到给定地址

`<address>.balance()`:魏地址uint256余额

`<address>.code()`：地址处的代码（可以为空）bytes memory

`<address>.codehash()`:地址bytes32的codehash

`<address payable>.send(uint256 amount) returns (bool)`: 发送给定数量的 Wei 到Addressfalse ，失败返回

`<address payable>.transfer(uint256 amount)`: 将给定数量的 Wei 发送到Address，失败时抛出

`type(C).name( string)`: 合约名称

`type(C).creationCode( )`：给定合约的创建字节码，参见类型信息。bytes memory

`type(C).runtimeCode( )`：给定合约的运行时字节码，请参阅类型信息。bytes memory

`type(I).interfaceId( bytes4)`：包含给定接口的 EIP-165 接口标识符的值，请参阅类型信息。

`type(T).min( T)`：整数类型可表示的最小值T，见类型信息。

`type(T).max( T)`：整数类型可表示的最大值T，见类型信息。

## 函数可见性说明符

```js
function myFunction() <visibility specifier> returns (bool) {
    return true;
}
```
`public`：外部和内部可见（为存储/状态变量创建一个getter 函数）

`private`: 仅在当前合约中可见

`external`: 仅在外部可见（仅适用于函数） - 即只能被消息调用（通过this.func）

`internal`: 只在内部可见

## 修饰符
`pure`对于函数：不允许修改或访问状态。

`view`对于函数：不允许修改状态。

`payable`对于函数：允许他们在通话的同时接收以太币。

`constant`对于状态变量：不允许赋值（初始化除外），不占用存储槽。

`immutable`对于状态变量：在构造时只允许一次赋值，之后保持不变。存储在代码中。

`anonymous`对于事件：不将事件签名存储为主题。

`indexed`对于事件参数：将参数存储为主题。

`virtual`对于函数和修饰符：允许在派生合约中更改函数或修饰符的行为。

`override`: 声明这个函数、修饰符或公共状态变量改变了基础合约中函数或修饰符的行为。

## 保留关键字
这些关键字在 Solidity 中保留。它们将来可能会成为语法的一部分：

`after`, `alias`, `apply`, `auto`, `byte`, `case`, `copyof`, `default`, `define`, `final`, `implements`, `in`, `inline`, `let`, `macro`, `match`, `mutable`, `null`, `of`, `partial`, `promise`, `reference`, `relocatable`, `sealed`, `sizeof`, `static`, `supports`, `switch`, `typedef`, `typeof`, `var`.
