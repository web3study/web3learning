---
title: 语法结构
sidebar_label: 语法结构
sidebar_position: 20
image: sss
description: aaa
---
  电脑端可以直接使用右侧目录选择想看的内容，手机端下拉选择内容

### Hello World

部署即可打印出Hello World的日志内容（event的用法下面会说）

  ```js
    // SPDX-License-Identifier: MIT
    // compiler version 需要大于0.8.13
    pragma solidity ^0.8.13;

    contract HelloWorld {
      event Print(string hi);

      constructor(){
          emit Print("Hello World!");
      }
    }
  ```

### 数据类型 Data Types

  我们向您介绍一些在Solidity中可用的原始数据类型。
  - boolean | uint | int | address | string | byte


  ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Primitives {
        bool public boo = true;

        /*
        Uint代表无符号整数，即非负整数
        different sizes are available
            uint8   ranges from 0 to 2 ** 8 - 1
            uint16  ranges from 0 to 2 ** 16 - 1
            ... 依次类推
            uint256 ranges from 0 to 2 ** 256 - 1
        */
        uint8 public u8 = 1;
        uint public u256 = 456;
        uint public u = 123; // uint is an alias for uint256

        /*
        整数类型允许为负数。
        与uint一样，从int8到int256可以使用不同的范围

        int256 ranges from -2 ** 255 to 2 ** 255 - 1
        int128 ranges from -2 ** 127 to 2 ** 127 - 1
        */
        int8 public i8 = -1;
        int public i256 = 456;
        int public i = -123; // int is same as int256

        // int的最小值和最大值
        int public minInt = type(int).min;
        int public maxInt = type(int).max;

        address public addr = 0x39E4572A5e74Ff43DB3508f21F4Bfacd09408f62;

        /*
        在Solidity中，数据类型byte表示一个字节序列。
        Solidity 两种bytes类型 :

        - 固定大小的
        - 动态大小
        
        Solidity中的字节表示一个动态bytes数组。
        快速的表达 byte[] .
        */
        bytes1 a = 0xb5; //  [10110101]
        bytes1 b = 0x56; //  [01010110]

        // 类型的默认值
        // 未赋值的变量有一个默认值
        bool public defaultBoo; // false
        uint public defaultUint; // 0
        int public defaultInt; // 0
        address public defaultAddr; // 0x0000000000000000000000000000000000000000
    }

  ```

### 变量 Variables
  
  有三种类型的变量，分别为状态变量、局部变量、全局变量

  ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Variables {
        // 状态变量存储在区块链上（状态变量）
        string public text = "Hello";
        uint public num = 123;

        function doSomething() public {
            // 局部变量不保存到区块链（局部变量）
            uint i = 456;

            // Here are some global variables
            uint timestamp = block.timestamp; // 当前区块的时间戳（全局变量）
            address sender = msg.sender; // 地址的调用者（全局变量）
        }
    }
  ```

### 常量 Constants

  常量是不能修改的变量。它们的值是硬编码的，使用常量可以节省gas成本。

  ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Constants {
        // 常量变量一般都是大写表示
        address public constant MY_ADDRESS = 0x39E4572A5e74Ff43DB3508f21F4Bfacd09408f62;
        uint public constant MY_UINT = 1111;
    }

  ```

### 不可变 Immutable

  不可变变量就像常量。不可变变量的值可以在构造函数内部设置，但不能在之后修改。

  ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Immutable {
        // coding convention to uppercase constant variables
        address public immutable MY_ADDRESS;
        uint public immutable MY_UINT;

        constructor(uint _myUint) {
            MY_ADDRESS = msg.sender;
            MY_UINT = _myUint;
        }
    }

  ```

### 读取写入变量 Reading and Writing to a State Variable

  要编写或更新状态变量，您需要发送一个事务。另一方面，你可以免费读取状态变量，不需要任何交易费用。

  ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract SimpleStorage {
        // 状态变量存储
        uint public num;

        // 您需要发送一个事务来写入状态变量。
        function set(uint _num) public {
            num = _num;
        }

        // 您可以在不发送事务的情况下读取状态变量。
        function get() public view returns (uint) {
            return num;
        }
    }

  ```

### 单位 ether and Wei

  用 ether 支付交易。
  如：1 ether 等于 10^18 wei。
  ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract EtherUnits {
        uint public oneWei = 1 wei;
        // 1 wei = 1
        bool public isOneWei = 1 wei == 1;

        uint public oneEther = 1 ether;
        // 1 ether = 10^18 wei
        bool public isOneEther = 1 ether == 1e18;
    }

  ```

### Gas and Gas Price

  一笔交易会花费多少ether

  计算方法：`gas spent * gas price`
  
  1. `gas`是一个计算单位
  2. `gas spent`是在此交易下会使用的
  3. `gas price`是你想要支付的ether的单价


  在一个块中，`gas price`较高的会优先打包
  没有花费完的gas会退还（当然这个记录是看不到的）
  `Gas Limit`
  消耗的gas上限，这里有两个上限：

  1. `gas limit`你想要支付的最大的gas费上限（当然要满足可以支付的条件才会成功）
  2. `block gas limit`区块允许的最大gas上限，此为区块链决定的（可以防止ddos攻击，防止合约过分消耗资源）


  如下面表述：
  ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Gas {
        uint public i = 0;

        // 耗尽所有发送的gas会导致交易失败。
        // 状态更改被撤消。
        // Gas spent 不会被退款
        function forever() public {
            // 此方法会消耗当前区块的所有gas，及超出区块的gas limit上限，会失败
            while (true) {
                i += 1;
            }
        }
    }

  ```

### 判断语句 If / Else
    
  Solidity 支持条件语句if、else if和else。
  ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract IfElse {
        function foo(uint x) public pure returns (uint) {
            if (x < 10) {
                return 0;
            } else if (x < 20) {
                return 1;
            } else {
                return 2;
            }
        }

        function ternary(uint _x) public pure returns (uint) {
            // if (_x < 10) {
            //     return 1;
            // }
            // return 2;

            // 同样支持三目运算
            return _x < 10 ? 1 : 2;
        }
    }

  ```
### 循环语句 For and While Loop

  Solidity支持for、while和do while循环。
  不要编写无界循环，因为这可能超过`gas limit`，导致事务失败。
  由于上述原因，while和do while循环很少使用。

  ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Loop {
        function loop() public {
            // for loop
            for (uint i = 0; i < 10; i++) {
                if (i == 3) {
                    // Skip to next iteration with continue
                    continue;
                }
                if (i == 5) {
                    // Exit loop with break
                    break;
                }
            }

            // while loop
            uint j;
            while (j < 10) {
                j++;
            }
        }
    }

  ```
### 映射 Mapping

  映射是使用语法映射 `mapping(keyType => valueType)`。
  keyType可以是任何内置值类型、字节、字符串或任何合约。
  valueType可以是任何类型，包括另一个映射或数组。
  Mappings 没有迭代器

  ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Mapping {
        // address 到 uint 的映射
        mapping(address => uint) public myMap;

        function get(address _addr) public view returns (uint) {
            // 始终返回一个值的映射。
            // 如果从未设置该值，它将返回默认值。
            return myMap[_addr];
        }

        function set(address _addr, uint _i) public {
            // 更新这个_addr的uint值
            myMap[_addr] = _i;
        }

        function remove(address _addr) public {
            // 重新设置为默认值。
            delete myMap[_addr];
        }
    }

    contract NestedMapping {
        // 嵌套的 mapping
        mapping(address => mapping(uint => bool)) public nested;

        function get(address _addr1, uint _i) public view returns (bool) {
            // 可以从嵌套映射中获取值
            // 没有设置值也可以获取默认值
            return nested[_addr1][_i];
        }

        function set(
            address _addr1,
            uint _i,
            bool _boo
        ) public {
            nested[_addr1][_i] = _boo;
        }

        function remove(address _addr1, uint _i) public {
            delete nested[_addr1][_i];
        }
    }

  ```

### 数组 Array

  数组可以具有编译时固定的大小，也可以具有动态的大小。

  ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Array {
        // Several ways to initialize an array
        uint[] public arr;
        uint[] public arr2 = [1, 2, 3];
        // Fixed sized array, all elements initialize to 0
        uint[10] public myFixedSizeArr;

        function get(uint i) public view returns (uint) {
            return arr[i];
        }

        // Solidity can return the entire array.
        // But this function should be avoided for
        // arrays that can grow indefinitely in length.
        function getArr() public view returns (uint[] memory) {
            return arr;
        }

        function push(uint i) public {
            // Append to array
            // This will increase the array length by 1.
            arr.push(i);
        }

        function pop() public {
            // Remove last element from array
            // This will decrease the array length by 1
            arr.pop();
        }

        function getLength() public view returns (uint) {
            return arr.length;
        }

        function remove(uint index) public {
            // Delete does not change the array length.
            // It resets the value at index to it's default value,
            // in this case 0
            delete arr[index];
        }

        function examples() external {
            // create array in memory, only fixed size can be created
            uint[] memory a = new uint[](5);
        }
    }

  ```

  删除数组元素的例子
  通过从右到左移动元素来移除数组元素

  ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract ArrayRemoveByShifting {
      // [1, 2, 3] -- remove(1) --> [1, 3, 3] --> [1, 3]
      // [1, 2, 3, 4, 5, 6] -- remove(2) --> [1, 2, 4, 5, 6, 6] --> [1, 2, 4, 5, 6]
      // [1, 2, 3, 4, 5, 6] -- remove(0) --> [2, 3, 4, 5, 6, 6] --> [2, 3, 4, 5, 6]
      // [1] -- remove(0) --> [1] --> []

      uint[] public arr;

      function remove(uint _index) public {
          require(_index < arr.length, "index out of bound");

          for (uint i = _index; i < arr.length - 1; i++) {
              arr[i] = arr[i + 1];
          }
          arr.pop();
      }

      function test() external {
          arr = [1, 2, 3, 4, 5];
          remove(2);
          // [1, 2, 4, 5]
          assert(arr[0] == 1);
          assert(arr[1] == 2);
          assert(arr[2] == 4);
          assert(arr[3] == 5);
          assert(arr.length == 4);

          arr = [1];
          remove(0);
          // []
          assert(arr.length == 0);
      }
    }


  ```

  通过将最后一个元素复制到要删除的位置来删除数组元素

  ```

    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract ArrayReplaceFromEnd {
      uint[] public arr;

      // Deleting an element creates a gap in the array.
      // One trick to keep the array compact is to
      // move the last element into the place to delete.
      function remove(uint index) public {
          // Move the last element into the place to delete
          arr[index] = arr[arr.length - 1];
          // Remove the last element
          arr.pop();
      }

      function test() public {
          arr = [1, 2, 3, 4];

          remove(1);
          // [1, 4, 3]
          assert(arr.length == 3);
          assert(arr[0] == 1);
          assert(arr[1] == 4);
          assert(arr[2] == 3);

          remove(2);
          // [1, 4]
          assert(arr.length == 2);
          assert(arr[0] == 1);
          assert(arr[1] == 4);
      }
    }


  ```

### 枚举 Enum
### 结构 Structs
### 数据声明 Data Locations - Storage, Memory and Calldata
### 方法 Function
### 可见性 View and Pure Functions
### 错误及异常 Error
### 方法修饰 Function Modifier
### 时间 Events
### 构造方法 Constructor
### 继承 Inheritance
### 继承的状态变量 Shadowing Inherited State Variables
### 调用父类方法 Calling Parent Contracts
### 可见性 Visibility
### 接口 Interface
### 可支付 Payable
### 发送eth Sending Ether - Transfer, Send, and Call
### 回调 Fallback
### 访问 Call
### 委托访问 Delegatecall
### 选择器 Function Selector
### 调用其他合约 Calling Other Contract
### Creating Contracts from a Contract
### 异常捕捉 Try / Catch
### 导入 Import
### 库 Library
### ABI Decode
### Hashing with Keccak256
### 验证签名 Verifying Signature
### gas优化 Gas Optimizations