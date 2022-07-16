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

  solidity支持可枚举对象，它们对建模选择和跟踪状态很有用。枚举可以在solidity之外声明。

  ```
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

  ```
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

  ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.13;

    import "./EnumDeclaration.sol";

    contract Enum {
        Status public status;
    }

  ```

### 结构 Structs

  您可以通过创建`struct`来定义自己的类型。它们对将相关数据分组很有用。结构可以在一个契约之外声明并导入到另一个契约中。
  ```
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

### 数据声明 Storage, Memory and Calldata

  变量声明为`storage`、`memory`或`calldata`，以显式指定数据的位置。
1. `storage` - 变量是一个状态变量(存储在区块链上)
2. `memory` - 变量在内存中，当函数被调用时它就存在
3. `calldata` - 包含函数参数的特殊数据位置
  ```
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


### 方法（函数） Function

  方法的返回值有多种类型
  公共方法不能接受某些数据类型作为输入或输出

  ```
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


### 可见性 View and Pure Functions

  Getter类型的方法可以声明为`view`或`pure`。`view`声明不会更改任何状态。`pure`声明不会更改或读取状态变量。

  ```
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


### 错误及异常 Error

error 将在交易期间撤消对状态的所有更改。
可以通过`require`、`revert` 或者`assert`
- `require`用于执行前验证shu'ru'de。
- `revert`与`require`相似。有关详细信息，请参见下面的代码。
- `assert`断言用于检查永远不应该是错误的代码。断言失败可能意味着有一个错误。
  
使用自定义错误节省gas。

  ```

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

  ```
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

### 方法修饰 Function Modifier

  modifier可在方法运行前或者运行之后执行
  主要功能：
  - 权限访问
  - 验证输入
  - 防止重入攻击


  ```
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

### 事件 Events

  事件主要用于记录在区块链上
  - 监听事件，并更新用户的一些功能，如界面、状态等
  - 一个便宜的存储方式


  ```
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

### 构造方法 Constructor

  构造方法是可选择的一个方法，可以不写，此方法主要在合约创建的时候执行

  ```
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

### 继承 Inheritance

  很多变成语言都会有此语法，Solidity支持多继承，使用`is`关键字，
  - 如果想要被子合约重写，父合约的方法就必须叫上`virtual`的声明
  - 子合约如果需要重写父类的合约方法，必须加上`override`
  - 继承的顺序很重要
  - 适当的，可以整理出合约的继承关系，防止出现错乱问题


  ```
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


### 继承的状态变量 Shadowing Inherited State Variables

  状态变量，不能在子合约重新声明来重写

  ```
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


### 调用父类方法 Calling Parent Contracts

  父合约可以直接调用，也可以使用关键字`super`来调用。
  通过使用关键字super，将调用所有直接父合约中的方法。

  ```
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


### 可见性 Visibility

  方法和状态变量必须声明它们是否可以被其他合约访问。

  方法可以声明为
  - `public` - 任何合约和帐户都可以调用
  - `private` - 仅在定义功能的合约内
  - `internal` - 仅继承内部功能的内部合约
  - `external` - 只有其他合约和帐户才能调用，内部不可调用


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