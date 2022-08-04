---
title: 语法结构
sidebar_label: 😅语法结构
sidebar_position: 20
image: sss
description: aaa
---
  电脑端可以直接使用右侧目录选择想看的内容，手机端下拉选择内容

### Hello-World

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

### 数据类型Data-Types

  我们向您介绍一些在Solidity中可用的原始数据类型。
  - boolean | uint | int | address | string | byte


  ```js
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

### 变量Variables
  
  有三种类型的变量，分别为状态变量、局部变量、全局变量

  ```js
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

### 常量Constants

  常量是不能修改的变量。它们的值是硬编码的，使用常量可以节省gas成本。

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Constants {
        // 常量变量一般都是大写表示
        address public constant MY_ADDRESS = 0x39E4572A5e74Ff43DB3508f21F4Bfacd09408f62;
        uint public constant MY_UINT = 1111;
    }

  ```

### 不可变Immutable

  不可变变量就像常量。不可变变量的值可以在构造函数内部设置，但不能在之后修改。

  ```js
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

### 读取写入变量Reading-and-Writing-to-a-State-Variable

  要编写或更新状态变量，您需要发送一个事务。另一方面，你可以免费读取状态变量，不需要任何交易费用。

  ```js
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

### 单位ether-and-Wei

  用 ether 支付交易。
  如：1 ether 等于 10^18 wei。
  ```js
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

### Gas-and-GasPrice

  一笔交易会花费多少ether

  计算函数：`gas spent * gas price`
  
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
  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Gas {
        uint public i = 0;

        // 耗尽所有发送的gas会导致交易失败。
        // 状态更改被撤消。
        // Gas spent 不会被退款
        function forever() public {
            // 此函数会消耗当前区块的所有gas，及超出区块的gas limit上限，会失败
            while (true) {
                i += 1;
            }
        }
    }

  ```

### 判断语句If-Else
    
  Solidity 支持条件语句if、else if和else。
  ```js
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
### 循环语句For-and-While-Loop

  Solidity支持for、while和do while循环。
  不要编写无界循环，因为这可能超过`gas limit`，导致事务失败。
  由于上述原因，while和do while循环很少使用。

  ```js
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
### 映射Mapping

  映射是使用语法映射 `mapping(keyType => valueType)`。
  keyType可以是任何内置值类型、字节、字符串或任何合约。
  valueType可以是任何类型，包括另一个映射或数组。
  Mappings 没有迭代器

  ```js
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

### 数组Array

  数组可以具有编译时固定的大小，也可以具有动态的大小。

  ```js
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

  ```js
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

  ```js
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

### 枚举Enum

  solidity支持可枚举对象，它们对建模选择和跟踪状态很有用。枚举可以在solidity之外声明。

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Enum {
        // Enum representing shipping status
        enum Status {
            Pending,
            Shipped,
            Accepted,
            Rejected,
            Canceled
        }

        // Default value is the first element listed in
        // definition of the type, in this case "Pending"
        Status public status;

        // Returns uint
        // Pending  - 0
        // Shipped  - 1
        // Accepted - 2
        // Rejected - 3
        // Canceled - 4
        function get() public view returns (Status) {
            return status;
        }

        // Update status by passing uint into input
        function set(Status _status) public {
            status = _status;
        }

        // You can update to a specific enum like this
        function cancel() public {
            status = Status.Canceled;
        }

        // delete resets the enum to its first value, 0
        function reset() public {
            delete status;
        }
    }

  ```

  声明并导入Enum文件，Enum在其中声明

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;
    // This is saved 'EnumDeclaration.sol'

    enum Status {
        Pending,
        Shipped,
        Accepted,
        Rejected,
        Canceled
    }

  ```
  导入上述枚举的文件

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    import "./EnumDeclaration.sol";

    contract Enum {
        Status public status;
    }

  ```

### 结构Structs

  您可以通过创建`struct`来定义自己的类型。它们对将相关数据分组很有用。结构可以在一个契约之外声明并导入到另一个契约中。

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Todos {
        struct Todo {
            string text;
            bool completed;
        }

        // An array of 'Todo' structs
        Todo[] public todos;

        function create(string calldata _text) public {
            // 3 ways to initialize a struct
            // - calling it like a function
            todos.push(Todo(_text, false));

            // key value mapping
            todos.push(Todo({text: _text, completed: false}));

            // initialize an empty struct and then update it
            Todo memory todo;
            todo.text = _text;
            // todo.completed initialized to false

            todos.push(todo);
        }

        // Solidity automatically created a getter for 'todos' so
        // you don't actually need this function.
        function get(uint _index) public view returns (string memory text, bool completed) {
            Todo storage todo = todos[_index];
            return (todo.text, todo.completed);
        }

        // update text
        function updateText(uint _index, string calldata _text) public {
            Todo storage todo = todos[_index];
            todo.text = _text;
        }

        // update completed
        function toggleCompleted(uint _index) public {
            Todo storage todo = todos[_index];
            todo.completed = !todo.completed;
        }
    }

  ```

### 数据声明Storage-Memory-and-Calldata

  变量声明为`storage`、`memory`或`calldata`，以显式指定数据的位置。
1. `storage` - 变量是一个状态变量(存储在区块链上)
2. `memory` - 变量在内存中，当函数被调用时它就存在
3. `calldata` - 包含函数参数的特殊数据位置
   

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract DataLocations {
        uint[] public arr;
        mapping(uint => address) map;
        struct MyStruct {
            uint foo;
        }
        mapping(uint => MyStruct) myStructs;

        function f() public {
            // call _f with state variables
            _f(arr, map, myStructs[1]);

            // get a struct from a mapping
            MyStruct storage myStruct = myStructs[1];
            // create a struct in memory
            MyStruct memory myMemStruct = MyStruct(0);
        }

        function _f(
            uint[] storage _arr,
            mapping(uint => address) storage _map,
            MyStruct storage _myStruct
        ) internal {
            // do something with storage variables
        }

        // You can return memory variables
        function g(uint[] memory _arr) public returns (uint[] memory) {
            // do something with memory array
        }

        function h(uint[] calldata _arr) external {
            // do something with calldata array
        }
    }

  ```


### 函数Function

  函数的返回值有多种类型
  公共函数不能接受某些数据类型作为输入或输出
  针对于函数，给一个简单的介绍

```js
    function FunctionName([parameters]) 
        {public|private|internal|external} 
        [pure|constant|view|payable]
        [modifiers]
        [returns(return types)]
```

一个函数分为多个模块，
- `function`作为函数声明，
- `FunctionName`代表函数名，
- `{public|private|internal|external} `代表函数的可见性[Visibility](#可见性visibility)，
- `[pure|view|payable|constant]`代表函数返回类型或执行类型 [view](#视图view-and-pure-functions),其中`payable`代表可支付[Payable](#可支付payable)，`constant`代表常量与变量的声明是一样的（目前已不再使用，可以忽略，使用`pure`、`view`即可）
- `[modifiers]`代表函数的修饰，在函数逻辑代码之前或之后执行[modifiers](#函数修饰function-modifier)

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Function {
        // Functions can return multiple values.
        function returnMany()
            public
            pure
            returns (
                uint,
                bool,
                uint
            )
        {
            return (1, true, 2);
        }

        // Return values can be named.
        function named()
            public
            pure
            returns (
                uint x,
                bool b,
                uint y
            )
        {
            return (1, true, 2);
        }

        // Return values can be assigned to their name.
        // In this case the return statement can be omitted.
        function assigned()
            public
            pure
            returns (
                uint x,
                bool b,
                uint y
            )
        {
            x = 1;
            b = true;
            y = 2;
        }

        // Use destructuring assignment when calling another
        // function that returns multiple values.
        function destructuringAssignments()
            public
            pure
            returns (
                uint,
                bool,
                uint,
                uint,
                uint
            )
        {
            (uint i, bool b, uint j) = returnMany();

            // Values can be left out.
            (uint x, , uint y) = (4, 5, 6);

            return (i, b, j, x, y);
        }

        // Cannot use map for either input or output

        // Can use array for input
        function arrayInput(uint[] memory _arr) public {}

        // Can use array for output
        uint[] public arr;

        function arrayOutput() public view returns (uint[] memory) {
            return arr;
        }
    }

  ```



### 可见性Visibility

  函数和状态变量必须声明它们是否可以被其他合约访问。

  函数可以声明为
  - `public` - 任何合约和帐户都可以调用
  - `private` - 仅在定义功能的合约内
  - `internal` - 仅继承内部功能的内部合约
  - `external` - 只有其他合约和帐户才能调用，内部不可调用


  状态变量可以被声明为`public`，`private`，`internal`但是不能使用`external`

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Base {
        // Private function can only be called
        // - inside this contract
        // Contracts that inherit this contract cannot call this function.
        function privateFunc() private pure returns (string memory) {
            return "private function called";
        }

        function testPrivateFunc() public pure returns (string memory) {
            return privateFunc();
        }

        // Internal function can be called
        // - inside this contract
        // - inside contracts that inherit this contract
        function internalFunc() internal pure returns (string memory) {
            return "internal function called";
        }

        function testInternalFunc() public pure virtual returns (string memory) {
            return internalFunc();
        }

        // Public functions can be called
        // - inside this contract
        // - inside contracts that inherit this contract
        // - by other contracts and accounts
        function publicFunc() public pure returns (string memory) {
            return "public function called";
        }

        // External functions can only be called
        // - by other contracts and accounts
        function externalFunc() external pure returns (string memory) {
            return "external function called";
        }

        // This function will not compile since we're trying to call
        // an external function here.
        // function testExternalFunc() public pure returns (string memory) {
        //     return externalFunc();
        // }

        // State variables
        string private privateVar = "my private variable";
        string internal internalVar = "my internal variable";
        string public publicVar = "my public variable";
        // State variables cannot be external so this code won't compile.
        // string external externalVar = "my external variable";
    }

    contract Child is Base {
        // Inherited contracts do not have access to private functions
        // and state variables.
        // function testPrivateFunc() public pure returns (string memory) {
        //     return privateFunc();
        // }

        // Internal function call be called inside child contracts.
        function testInternalFunc() public pure override returns (string memory) {
            return internalFunc();
        }
    }

  ```

### 视图View-and-Pure-Functions

  Getter类型的函数可以声明为`view`或`pure`。`view`声明不会更改任何状态。`pure`声明不会更改或读取状态变量。

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract ViewAndPure {
        uint public x = 1;

        // Promise not to modify the state.
        function addToX(uint y) public view returns (uint) {
            return x + y;
        }

        // Promise not to modify or read from the state.
        function add(uint i, uint j) public pure returns (uint) {
            return i + j;
        }
    }

  ```


### 可支付Payable

  被`payable`修饰的函数或地址，可以在合约里接收eth

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Payable {
        // Payable address can receive Ether
        address payable public owner;

        // Payable constructor can receive Ether
        constructor() payable {
            owner = payable(msg.sender);
        }

        // Function to deposit Ether into this contract.
        // Call this function along with some Ether.
        // The balance of this contract will be automatically updated.
        function deposit() public payable {}

        // Call this function along with some Ether.
        // The function will throw an error since this function is not payable.
        function notPayable() public {}

        // Function to withdraw all Ether from this contract.
        function withdraw() public {
            // get the amount of Ether stored in this contract
            uint amount = address(this).balance;

            // send all Ether to owner
            // Owner can receive Ether since the address of owner is payable
            (bool success, ) = owner.call{value: amount}("");
            require(success, "Failed to send Ether");
        }

        // Function to transfer Ether from this contract to address from input
        function transfer(address payable _to, uint _amount) public {
            // Note that "to" is declared as payable
            (bool success, ) = _to.call{value: _amount}("");
            require(success, "Failed to send Ether");
        }
    }

  ```

### 函数修饰Function-Modifier

  modifier可在函数运行前或者运行之后执行
  主要功能：
  - 权限访问
  - 验证输入
  - 防止重入攻击


  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract FunctionModifier {
        // We will use these variables to demonstrate how to use
        // modifiers.
        address public owner;
        uint public x = 10;
        bool public locked;

        constructor() {
            // Set the transaction sender as the owner of the contract.
            owner = msg.sender;
        }

        // Modifier to check that the caller is the owner of
        // the contract.
        modifier onlyOwner() {
            require(msg.sender == owner, "Not owner");
            // Underscore is a special character only used inside
            // a function modifier and it tells Solidity to
            // execute the rest of the code.
            _;
        }

        // Modifiers can take inputs. This modifier checks that the
        // address passed in is not the zero address.
        modifier validAddress(address _addr) {
            require(_addr != address(0), "Not valid address");
            _;
        }

        function changeOwner(address _newOwner) public onlyOwner validAddress(_newOwner) {
            owner = _newOwner;
        }

        // Modifiers can be called before and / or after a function.
        // This modifier prevents a function from being called while
        // it is still executing.
        modifier noReentrancy() {
            require(!locked, "No reentrancy");

            locked = true;
            _;
            locked = false;
        }

        function decrement(uint i) public noReentrancy {
            x -= i;

            if (i > 1) {
                decrement(i - 1);
            }
        }
    }

  ```

### 错误及异常Error

error 将在交易期间撤消对状态的所有更改。
可以通过`require`、`revert` 或者`assert`
- `require`用于执行前验证shu'ru'de。
- `revert`与`require`相似。有关详细信息，请参见下面的代码。
- `assert`断言用于检查永远不应该是错误的代码。断言失败可能意味着有一个错误。
  
使用自定义错误节省gas。

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Error {
        function testRequire(uint _i) public pure {
            // Require should be used to validate conditions such as:
            // - inputs
            // - conditions before execution
            // - return values from calls to other functions
            require(_i > 10, "Input must be greater than 10");
        }

        function testRevert(uint _i) public pure {
            // Revert is useful when the condition to check is complex.
            // This code does the exact same thing as the example above
            if (_i <= 10) {
                revert("Input must be greater than 10");
            }
        }

        uint public num;

        function testAssert() public view {
            // Assert should only be used to test for internal errors,
            // and to check invariants.

            // Here we assert that num is always equal to 0
            // since it is impossible to update the value of num
            assert(num == 0);
        }

        // custom error
        error InsufficientBalance(uint balance, uint withdrawAmount);

        function testCustomError(uint _withdrawAmount) public view {
            uint bal = address(this).balance;
            if (bal < _withdrawAmount) {
                revert InsufficientBalance({balance: bal, withdrawAmount: _withdrawAmount});
            }
        }
    }


  ```
  其他示例

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Account {
        uint public balance;
        uint public constant MAX_UINT = 2**256 - 1;

        function deposit(uint _amount) public {
            uint oldBalance = balance;
            uint newBalance = balance + _amount;

            // balance + _amount does not overflow if balance + _amount >= balance
            require(newBalance >= oldBalance, "Overflow");

            balance = newBalance;

            assert(balance >= oldBalance);
        }

        function withdraw(uint _amount) public {
            uint oldBalance = balance;

            // balance - _amount does not underflow if balance >= _amount
            require(balance >= _amount, "Underflow");

            if (balance < _amount) {
                revert("Underflow");
            }

            balance -= _amount;

            assert(balance <= oldBalance);
        }
    }

  ```


### 事件Events

  事件主要用于记录在区块链上
  - 监听事件，并更新用户的一些功能，如界面、状态等
  - 一个便宜的存储方式


  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Event {
        // Event declaration
        // Up to 3 parameters can be indexed.
        // Indexed parameters helps you filter the logs by the indexed parameter
        event Log(address indexed sender, string message);
        event AnotherLog();

        function test() public {
            emit Log(msg.sender, "Hello World!");
            emit Log(msg.sender, "Hello EVM!");
            emit AnotherLog();
        }
    }

  ```

### 构造函数Constructor

  构造函数是可选择的一个函数，可以不写，此函数主要在合约创建的时候执行

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    // Base contract X
    contract X {
        string public name;

        constructor(string memory _name) {
            name = _name;
        }
    }

    // Base contract Y
    contract Y {
        string public text;

        constructor(string memory _text) {
            text = _text;
        }
    }

    // There are 2 ways to initialize parent contract with parameters.

    // Pass the parameters here in the inheritance list.
    contract B is X("Input to X"), Y("Input to Y") {

    }

    contract C is X, Y {
        // Pass the parameters here in the constructor,
        // similar to function modifiers.
        constructor(string memory _name, string memory _text) X(_name) Y(_text) {}
    }

    // Parent constructors are always called in the order of inheritance
    // regardless of the order of parent contracts listed in the
    // constructor of the child contract.

    // Order of constructors called:
    // 1. X
    // 2. Y
    // 3. D
    contract D is X, Y {
        constructor() X("X was called") Y("Y was called") {}
    }

    // Order of constructors called:
    // 1. X
    // 2. Y
    // 3. E
    contract E is X, Y {
        constructor() Y("Y was called") X("X was called") {}
    }

  ```

### 继承Inheritance

  很多变成语言都会有此语法，Solidity支持多继承，使用`is`关键字，
  - 如果想要被子合约重写，父合约的函数就必须叫上`virtual`的声明
  - 子合约如果需要重写父类的合约函数，必须加上`override`
  - 继承的顺序很重要
  - 适当的，可以整理出合约的继承关系，防止出现错乱问题


  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    /* Graph of inheritance
        A
      / \
      B   C
    / \ /
    F  D,E

    */

    contract A {
        function foo() public pure virtual returns (string memory) {
            return "A";
        }
    }

    // Contracts inherit other contracts by using the keyword 'is'.
    contract B is A {
        // Override A.foo()
        function foo() public pure virtual override returns (string memory) {
            return "B";
        }
    }

    contract C is A {
        // Override A.foo()
        function foo() public pure virtual override returns (string memory) {
            return "C";
        }
    }

    // Contracts can inherit from multiple parent contracts.
    // When a function is called that is defined multiple times in
    // different contracts, parent contracts are searched from
    // right to left, and in depth-first manner.

    contract D is B, C {
        // D.foo() returns "C"
        // since C is the right most parent contract with function foo()
        function foo() public pure override(B, C) returns (string memory) {
            return super.foo();
        }
    }

    contract E is C, B {
        // E.foo() returns "B"
        // since B is the right most parent contract with function foo()
        function foo() public pure override(C, B) returns (string memory) {
            return super.foo();
        }
    }

    // Inheritance must be ordered from “most base-like” to “most derived”.
    // Swapping the order of A and B will throw a compilation error.
    contract F is A, B {
        function foo() public pure override(A, B) returns (string memory) {
            return super.foo();
        }
    }

  ```


### 继承的状态变量Shadowing-Inherited-State-Variables

  状态变量，不能在子合约重新声明来重写

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract A {
        string public name = "Contract A";

        function getName() public view returns (string memory) {
            return name;
        }
    }

    // Shadowing is disallowed in Solidity 0.6
    // This will not compile
    // contract B is A {
    //     string public name = "Contract B";
    // }

    contract C is A {
        // This is the correct way to override inherited state variables.
        constructor() {
            name = "Contract C";
        }

        // C.getName returns "Contract C"
    }

  ```


### 调用父类函数Calling-Parent-Contracts

  父合约可以直接调用，也可以使用关键字`super`来调用。
  通过使用关键字super，将调用所有直接父合约中的函数。

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    /* Inheritance tree
      A
    /  \
    B   C
    \ /
      D
    */

    contract A {
        // This is called an event. You can emit events from your function
        // and they are logged into the transaction log.
        // In our case, this will be useful for tracing function calls.
        event Log(string message);

        function foo() public virtual {
            emit Log("A.foo called");
        }

        function bar() public virtual {
            emit Log("A.bar called");
        }
    }

    contract B is A {
        function foo() public virtual override {
            emit Log("B.foo called");
            A.foo();
        }

        function bar() public virtual override {
            emit Log("B.bar called");
            super.bar();
        }
    }

    contract C is A {
        function foo() public virtual override {
            emit Log("C.foo called");
            A.foo();
        }

        function bar() public virtual override {
            emit Log("C.bar called");
            super.bar();
        }
    }

    contract D is B, C {
        // Try:
        // - Call D.foo and check the transaction logs.
        //   Although D inherits A, B and C, it only called C and then A.
        // - Call D.bar and check the transaction logs
        //   D called C, then B, and finally A.
        //   Although super was called twice (by B and C) it only called A once.

        function foo() public override(B, C) {
            super.foo();
        }

        function bar() public override(B, C) {
            super.bar();
        }
    }

  ```


### 接口Interface

  您可以通过声明一个Interface与其他合约进行交互。
  Interface
  - 没有任何详细的逻辑功能
  - 可以继承其他的interfase
  - 所有的可见性声明必须是external
  - 没有constructor函数
  - 不能声明状态变量


  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Counter {
        uint public count;

        function increment() external {
            count += 1;
        }
    }

    interface ICounter {
        function count() external view returns (uint);

        function increment() external;
    }

    contract MyContract {
        function incrementCounter(address _counter) external {
            ICounter(_counter).increment();
        }

        function getCount(address _counter) external view returns (uint) {
            return ICounter(_counter).count();
        }
    }

    // Uniswap example
    interface UniswapV2Factory {
        function getPair(address tokenA, address tokenB)
            external
            view
            returns (address pair);
    }

    interface UniswapV2Pair {
        function getReserves()
            external
            view
            returns (
                uint112 reserve0,
                uint112 reserve1,
                uint32 blockTimestampLast
            );
    }

    contract UniswapExample {
        address private factory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
        address private dai = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
        address private weth = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

        function getTokenReserves() external view returns (uint, uint) {
            address pair = UniswapV2Factory(factory).getPair(dai, weth);
            (uint reserve0, uint reserve1, ) = UniswapV2Pair(pair).getReserves();
            return (reserve0, reserve1);
        }
    }

  ```


### 发送eth-Sending–Ether-Transfer-Send-and-Call

如何发送eth
发送eth到其他合约：
  - transfer (2300 gas, throws error)
  - send (2300 gas, returns bool)
  - call (forward all gas or set gas, returns bool)

如何接收eth
如果一个合约可以直接接收eth的转账需要写如下的函数：
  - receive() external payable
  - fallback() external payable

建议使用

- `call` 在2019年12月之后，建议使用与重入保护相结合的函数。

防止重入
- 再调用其他合约之前，处理好所有的状态改变
- 使用modifier函数防止


  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract ReceiveEther {
        /*
        Which function is called, fallback() or receive()?

              send Ether
                  |
            msg.data is empty?
                  / \
                yes  no
                /     \
    receive() exists?  fallback()
            /   \
            yes   no
            /      \
        receive()   fallback()
        */

        // Function to receive Ether. msg.data must be empty
        receive() external payable {}

        // Fallback function is called when msg.data is not empty
        fallback() external payable {}

        function getBalance() public view returns (uint) {
            return address(this).balance;
        }
    }

    contract SendEther {
        function sendViaTransfer(address payable _to) public payable {
            // This function is no longer recommended for sending Ether.
            _to.transfer(msg.value);
        }

        function sendViaSend(address payable _to) public payable {
            // Send returns a boolean value indicating success or failure.
            // This function is not recommended for sending Ether.
            bool sent = _to.send(msg.value);
            require(sent, "Failed to send Ether");
        }

        function sendViaCall(address payable _to) public payable {
            // Call returns a boolean value indicating success or failure.
            // This is the current recommended method to use.
            (bool sent, bytes memory data) = _to.call{value: msg.value}("");
            require(sent, "Failed to send Ether");
        }
    }

  ```

### 回调Fallback

`fallback`是一个不接受任何参数也不返回任何内容的函数。

会执行的部分
  - 一个不存在的函数被调用
  - eth被直接发送到一个合约，但是`receive()`不存在或`msg.data`数据不是空的
当通过`transfer`或`send`调用时，`fallback` 上限为2300 gas limit。


  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Fallback {
        event Log(uint gas);

        // Fallback function must be declared as external.
        fallback() external payable {
            // send / transfer (forwards 2300 gas to this fallback function)
            // call (forwards all of the gas)
            emit Log(gasleft());
        }

        // Helper function to check the balance of this contract
        function getBalance() public view returns (uint) {
            return address(this).balance;
        }
    }

    contract SendToFallback {
        function transferToFallback(address payable _to) public payable {
            _to.transfer(msg.value);
        }

        function callFallback(address payable _to) public payable {
            (bool sent, ) = _to.call{value: msg.value}("");
            require(sent, "Failed to send Ether");
        }
    }

  ```

### 访问Call

  `call`是与其他合约交互的较为底层的函数。
  当您通过调用`fallback`函数来发送eth时，推荐使用这种函数。
  但是，这不是调用现有函数的推荐方式。

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Receiver {
        event Received(address caller, uint amount, string message);

        fallback() external payable {
            emit Received(msg.sender, msg.value, "Fallback was called");
        }

        function foo(string memory _message, uint _x) public payable returns (uint) {
            emit Received(msg.sender, msg.value, _message);

            return _x + 1;
        }
    }

    contract Caller {
        event Response(bool success, bytes data);

        // Let's imagine that contract B does not have the source code for
        // contract A, but we do know the address of A and the function to call.
        function testCallFoo(address payable _addr) public payable {
            // You can send ether and specify a custom gas amount
            (bool success, bytes memory data) = _addr.call{value: msg.value, gas: 5000}(
                abi.encodeWithSignature("foo(string,uint256)", "call foo", 123)
            );

            emit Response(success, data);
        }

        // Calling a function that does not exist triggers the fallback function.
        function testCallDoesNotExist(address _addr) public {
            (bool success, bytes memory data) = _addr.call(
                abi.encodeWithSignature("doesNotExist()")
            );

            emit Response(success, data);
        }
    }

  ```

### 委托访问Delegatecall

  与`call`类似，也是底层的函数
  当合约A执行委托调用给合约B时，就会执行合约B的代码
  并且使用A的存储、`msg.sender`和`msg.value`

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    // NOTE: Deploy this contract first
    contract B {
        // NOTE: storage layout must be the same as contract A
        uint public num;
        address public sender;
        uint public value;

        function setVars(uint _num) public payable {
            num = _num;
            sender = msg.sender;
            value = msg.value;
        }
    }

    contract A {
        uint public num;
        address public sender;
        uint public value;

        function setVars(address _contract, uint _num) public payable {
            // A's storage is set, B is not modified.
            (bool success, bytes memory data) = _contract.delegatecall(
                abi.encodeWithSignature("setVars(uint256)", _num)
            );
        }
    }

  ```


### 选择器Function-Selector

  调用函数时，`calldata` 的前4个字节指定要调用哪个函数。
  这4个字节被称为函数选择器。
  以下面的代码为例。它使用调用在地址addr处执行合约的转移。

  ```js
  addr.call(abi.encodeWithSignature("transfer(address,uint256)", 0xaaaaa, 123))
  ```

  abi.encodeWithSignature(....)返回的前4个字节是函数选择器。
  如果预先计算并在代码中内联函数选择器，也许可以节省少量的gas
  下面是函数选择器的计算函数。
  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract FunctionSelector {
        /*
        "transfer(address,uint256)"
        0xa9059cbb
        "transferFrom(address,address,uint256)"
        0x23b872dd
        */
        function getSelector(string calldata _func) external pure returns (bytes4) {
            return bytes4(keccak256(bytes(_func)));
        }
    }

  ```


### 调用其他合约Calling-Other-Contract

  Contract可以通过两种方式调用其他Contract。
  最简单的函数是直接调用它，比如A.foo(x, y, z)。
  调用其他合约的另一种函数是使用底层调用。

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Callee {
        uint public x;
        uint public value;

        function setX(uint _x) public returns (uint) {
            x = _x;
            return x;
        }

        function setXandSendEther(uint _x) public payable returns (uint, uint) {
            x = _x;
            value = msg.value;

            return (x, value);
        }
    }

    contract Caller {
        function setX(Callee _callee, uint _x) public {
            uint x = _callee.setX(_x);
        }

        function setXFromAddress(address _addr, uint _x) public {
            Callee callee = Callee(_addr);
            callee.setX(_x);
        }

        function setXandSendEther(Callee _callee, uint _x) public payable {
            (uint x, uint value) = _callee.setXandSendEther{value: msg.value}(_x);
        }
    }

  ```


### 使用合约创建合约Creates-other-Contracts

  其他合约可以使用new关键字创建合约。从0.8.0开始，new关键字通过指定salt选项支持create2特性。

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract Car {
        address public owner;
        string public model;
        address public carAddr;

        constructor(address _owner, string memory _model) payable {
            owner = _owner;
            model = _model;
            carAddr = address(this);
        }
    }

    contract CarFactory {
        Car[] public cars;

        function create(address _owner, string memory _model) public {
            Car car = new Car(_owner, _model);
            cars.push(car);
        }

        function createAndSendEther(address _owner, string memory _model) public payable {
            Car car = (new Car){value: msg.value}(_owner, _model);
            cars.push(car);
        }

        function create2(
            address _owner,
            string memory _model,
            bytes32 _salt
        ) public {
            Car car = (new Car){salt: _salt}(_owner, _model);
            cars.push(car);
        }

        function create2AndSendEther(
            address _owner,
            string memory _model,
            bytes32 _salt
        ) public payable {
            Car car = (new Car){value: msg.value, salt: _salt}(_owner, _model);
            cars.push(car);
        }

        function getCar(uint _index)
            public
            view
            returns (
                address owner,
                string memory model,
                address carAddr,
                uint balance
            )
        {
            Car car = cars[_index];

            return (car.owner(), car.model(), car.carAddr(), address(car).balance);
        }
    }

  ```


### 异常捕捉Try-Catch

   `try / catch`只能从`external`函数和合同创建中捕获错误。


  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    // External contract used for try / catch examples
    contract Foo {
        address public owner;

        constructor(address _owner) {
            require(_owner != address(0), "invalid address");
            assert(_owner != 0x0000000000000000000000000000000000000001);
            owner = _owner;
        }

        function myFunc(uint x) public pure returns (string memory) {
            require(x != 0, "require failed");
            return "my func was called";
        }
    }

    contract Bar {
        event Log(string message);
        event LogBytes(bytes data);

        Foo public foo;

        constructor() {
            // This Foo contract is used for example of try catch with external call
            foo = new Foo(msg.sender);
        }

        // Example of try / catch with external call
        // tryCatchExternalCall(0) => Log("external call failed")
        // tryCatchExternalCall(1) => Log("my func was called")
        function tryCatchExternalCall(uint _i) public {
            try foo.myFunc(_i) returns (string memory result) {
                emit Log(result);
            } catch {
                emit Log("external call failed");
            }
        }

        // Example of try / catch with contract creation
        // tryCatchNewContract(0x0000000000000000000000000000000000000000) => Log("invalid address")
        // tryCatchNewContract(0x0000000000000000000000000000000000000001) => LogBytes("")
        // tryCatchNewContract(0x0000000000000000000000000000000000000002) => Log("Foo created")
        function tryCatchNewContract(address _owner) public {
            try new Foo(_owner) returns (Foo foo) {
                // you can use variable foo here
                emit Log("Foo created");
            } catch Error(string memory reason) {
                // catch failing revert() and require()
                emit Log(reason);
            } catch (bytes memory reason) {
                // catch failing assert()
                emit LogBytes(reason);
            }
        }
    }

  ```

### 导入 Import

  Solidity支持导入本地和外部文件。

  本地
  目录结构可以如下：
  ```js
  ├── Import.sol
  └── Foo.sol
  ```
#### Foo.sol
  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    struct Point {
        uint x;
        uint y;
    }

    error Unauthorized(address caller);

    function add(uint x, uint y) pure returns (uint) {
        return x + y;
    }

    contract Foo {
        string public name = "Foo";
    }

  ```
#### Import.sol
  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    // import Foo.sol from current directory
    import "./Foo.sol";

    // import {symbol1 as alias, symbol2} from "filename";
    import {Unauthorized, add as func, Point} from "./Foo.sol";

    contract Import {
        // Initialize Foo.sol
        Foo public foo = new Foo();

        // Test Foo.sol by getting it's name.
        function getFooName() public view returns (string memory) {
            return foo.name();
        }
    }

  ```
#### 外部资源
  你也可以通过简单地复制url从GitHub导入
  ```js
  import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/utils/math/SafeMath.sol";

  // Example import ECDSA.sol from openzeppelin-contract repo, release-v4.5 branch
  // https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol
  import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol";

  ```


### 库Library

  库类似于合约，但不能声明任何状态变量，也不能发送以太。
  如果所有库函数都是内部的，则库嵌入到合约中，否则，必须先部署库，然后在部署契约之前链接库。

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    library SafeMath {
        function add(uint x, uint y) internal pure returns (uint) {
            uint z = x + y;
            require(z >= x, "uint overflow");

            return z;
        }
    }

    library Math {
        function sqrt(uint y) internal pure returns (uint z) {
            if (y > 3) {
                z = y;
                uint x = y / 2 + 1;
                while (x < z) {
                    z = x;
                    x = (y / x + x) / 2;
                }
            } else if (y != 0) {
                z = 1;
            }
            // else z = 0 (default value)
        }
    }

    contract TestSafeMath {
        using SafeMath for uint;

        uint public MAX_UINT = 2**256 - 1;

        function testAdd(uint x, uint y) public pure returns (uint) {
            return x.add(y);
        }

        function testSquareRoot(uint x) public pure returns (uint) {
            return Math.sqrt(x);
        }
    }

    // Array function to delete element at index and re-organize the array
    // so that their are no gaps between the elements.
    library Array {
        function remove(uint[] storage arr, uint index) public {
            // Move the last element into the place to delete
            require(arr.length > 0, "Can't remove from empty array");
            arr[index] = arr[arr.length - 1];
            arr.pop();
        }
    }

    contract TestArray {
        using Array for uint[];

        uint[] public arr;

        function testArrayRemove() public {
            for (uint i = 0; i < 3; i++) {
                arr.push(i);
            }

            arr.remove(1);

            assert(arr.length == 2);
            assert(arr[0] == 0);
            assert(arr[1] == 2);
        }
    }

  ```
### ABI-Decode

  abi.encode encodes data into bytes.
  abi.decode decodes bytes back into data.

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract AbiDecode {
        struct MyStruct {
            string name;
            uint[2] nums;
        }

        function encode(
            uint x,
            address addr,
            uint[] calldata arr,
            MyStruct calldata myStruct
        ) external pure returns (bytes memory) {
            return abi.encode(x, addr, arr, myStruct);
        }

        function decode(bytes calldata data)
            external
            pure
            returns (
                uint x,
                address addr,
                uint[] memory arr,
                MyStruct memory myStruct
            )
        {
            // (uint x, address addr, uint[] memory arr, MyStruct myStruct) = ...
            (x, addr, arr, myStruct) = abi.decode(data, (uint, address, uint[], MyStruct));
        }
    }

  ```

### Hashing-with-Keccak256

  keccak256计算输入的kecak -256哈希值。

  使用场景
  - 根据输入内容创建唯一id
  - Commit-Reveal方案
  - 缩小输入的数据，签名后的结果输入结果都较小，可以作为输入使用

  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    contract HashFunction {
        function hash(
            string memory _text,
            uint _num,
            address _addr
        ) public pure returns (bytes32) {
            return keccak256(abi.encodePacked(_text, _num, _addr));
        }

        // Example of hash collision
        // Hash collision can occur when you pass more than one dynamic data type
        // to abi.encodePacked. In such case, you should use abi.encode instead.
        function collision(string memory _text, string memory _anotherText)
            public
            pure
            returns (bytes32)
        {
            // encodePacked(AAA, BBB) -> AAABBB
            // encodePacked(AA, ABBB) -> AAABBB
            return keccak256(abi.encodePacked(_text, _anotherText));
        }
    }

    contract GuessTheMagicWord {
        bytes32 public answer =
            0x60298f78cc0b47170ba79c10aa3851d7648bd96f2f8e46a19dbc777c36fb0c00;

        // Magic word is "Solidity"
        function guess(string memory _word) public view returns (bool) {
            return keccak256(abi.encodePacked(_word)) == answer;
        }
    }

  ```

### 验证签名Verifying-Signature

消息可以在链外签名，然后在链上使用智能合约进行验证。

ethers.js示例
  ```js
    const accounts = await ethers.getSigners(2)
    const VerifySignature = await ethers.getContractFactory("VerifySignature")
    const contract = await VerifySignature.deploy()
    await contract.deployed()

    // const PRIV_KEY = "0x..."
    // const signer = new ethers.Wallet(PRIV_KEY)
    const signer = accounts[0]
    const to = accounts[1].address
    const amount = 999
    const message = "Hello"
    const nonce = 123

    const hash = await contract.getMessageHash(to, amount, message, nonce)
    const sig = await signer.signMessage(ethers.utils.arrayify(hash))

    const ethHash = await contract.getEthSignedMessageHash(hash)

    console.log("signer          ", signer.address)
    console.log("recovered signer", await contract.recoverSigner(ethHash, sig))

    // Correct signature and message returns true
    expect(
      await contract.verify(signer.address, to, amount, message, nonce, sig)
    ).to.equal(true)

    // Incorrect message returns false
    expect(
      await contract.verify(signer.address, to, amount + 1, message, nonce, sig)
    ).to.equal(false)
  ```

  ```js
  // SPDX-License-Identifier: MIT
  pragma solidity ^0.8.13;

  /* Signature Verification

  How to Sign and Verify
  # Signing
  1. Create message to sign
  2. Hash the message
  3. Sign the hash (off chain, keep your private key secret)

  # Verify
  1. Recreate hash from the original message
  2. Recover signer from signature and hash
  3. Compare recovered signer to claimed signer
  */

  contract VerifySignature {
      /* 1. Unlock MetaMask account
      ethereum.enable()
      */

      /* 2. Get message hash to sign
      getMessageHash(
          0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C,
          123,
          "coffee and donuts",
          1
      )

      hash = "0xcf36ac4f97dc10d91fc2cbb20d718e94a8cbfe0f82eaedc6a4aa38946fb797cd"
      */
      function getMessageHash(
          address _to,
          uint _amount,
          string memory _message,
          uint _nonce
      ) public pure returns (bytes32) {
          return keccak256(abi.encodePacked(_to, _amount, _message, _nonce));
      }

      /* 3. Sign message hash
      # using browser
      account = "copy paste account of signer here"
      ethereum.request({ method: "personal_sign", params: [account, hash]}).then(console.log)

      # using web3
      web3.personal.sign(hash, web3.eth.defaultAccount, console.log)

      Signature will be different for different accounts
      0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b
      */
      function getEthSignedMessageHash(bytes32 _messageHash)
          public
          pure
          returns (bytes32)
      {
          /*
          Signature is produced by signing a keccak256 hash with the following format:
          "\x19Ethereum Signed Message\n" + len(msg) + msg
          */
          return
              keccak256(
                  abi.encodePacked("\x19Ethereum Signed Message:\n32", _messageHash)
              );
      }

      /* 4. Verify signature
      signer = 0xB273216C05A8c0D4F0a4Dd0d7Bae1D2EfFE636dd
      to = 0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C
      amount = 123
      message = "coffee and donuts"
      nonce = 1
      signature =
          0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b
      */
      function verify(
          address _signer,
          address _to,
          uint _amount,
          string memory _message,
          uint _nonce,
          bytes memory signature
      ) public pure returns (bool) {
          bytes32 messageHash = getMessageHash(_to, _amount, _message, _nonce);
          bytes32 ethSignedMessageHash = getEthSignedMessageHash(messageHash);

          return recoverSigner(ethSignedMessageHash, signature) == _signer;
      }

      function recoverSigner(bytes32 _ethSignedMessageHash, bytes memory _signature)
          public
          pure
          returns (address)
      {
          (bytes32 r, bytes32 s, uint8 v) = splitSignature(_signature);

          return ecrecover(_ethSignedMessageHash, v, r, s);
      }

      function splitSignature(bytes memory sig)
          public
          pure
          returns (
              bytes32 r,
              bytes32 s,
              uint8 v
          )
      {
          require(sig.length == 65, "invalid signature length");

          assembly {
              /*
              First 32 bytes stores the length of the signature

              add(sig, 32) = pointer of sig + 32
              effectively, skips first 32 bytes of signature

              mload(p) loads next 32 bytes starting at the memory address p into memory
              */

              // first 32 bytes, after the length prefix
              r := mload(add(sig, 32))
              // second 32 bytes
              s := mload(add(sig, 64))
              // final byte (first byte of the next 32 bytes)
              v := byte(0, mload(add(sig, 96)))
          }

          // implicitly return (r, s, v)
      }
  }

  ```

### gas优化Gas-Optimizations

  gas优化方案
  - 用`calldata`替换`memory`
  - 状态变量加载到内存
  - 用++i替换循环i++
  - 缓存数组元素
  - 减少循环
  
  ```js
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    // gas golf
    contract GasGolf {
        // start - 50908 gas
        // use calldata - 49163 gas
        // load state variables to memory - 48952 gas
        // short circuit - 48634 gas
        // loop increments - 48244 gas
        // cache array length - 48209 gas
        // load array elements to memory - 48047 gas
        // uncheck i overflow/underflow - 47309 gas

        uint public total;

        // start - not gas optimized
        // function sumIfEvenAndLessThan99(uint[] memory nums) external {
        //     for (uint i = 0; i < nums.length; i += 1) {
        //         bool isEven = nums[i] % 2 == 0;
        //         bool isLessThan99 = nums[i] < 99;
        //         if (isEven && isLessThan99) {
        //             total += nums[i];
        //         }
        //     }
        // }

        // gas optimized
        // [1, 2, 3, 4, 5, 100]
        function sumIfEvenAndLessThan99(uint[] calldata nums) external {
            uint _total = total;
            uint len = nums.length;

            for (uint i = 0; i < len; ) {
                uint num = nums[i];
                if (num % 2 == 0 && num < 99) {
                    _total += num;
                }
                unchecked {
                    ++i;
                }
            }

            total = _total;
        }
    }

  ```



