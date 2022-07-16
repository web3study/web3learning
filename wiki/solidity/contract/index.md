---
title: 合约学习
sidebar_label: 合约学习
sidebar_position: 50
image: sss
description: aaa
---
## 合约示例 

  以下是一个经典的例子，remix（一种网页代码编辑器）默认3_Ballet.sol合约，内容较为齐全，可以不用理解具体的代码含义，先熟悉一个合约大概会有几种组成部分。
  主要功能：选举候选人，代表进行投票，并统计出投票结果

  ``` 
    // SPDX-License-Identifier: GPL-3.0   1️⃣
    pragma solidity >=0.7.0 <0.9.0;

    /** 
    * @title Ballot
    * @dev Implements voting process along with vote delegation
    */
    contract Ballot {
      
        struct Voter {
            uint weight; // weight is accumulated by delegation
            bool voted;  // if true, that person already voted
            address delegate; // person delegated to
            uint vote;   // index of the voted proposal
        }

        struct Proposal {
            // If you can limit the length to a certain number of bytes, 
            // always use one of bytes1 to bytes32 because they are much cheaper
            bytes32 name;   // short name (up to 32 bytes)
            uint voteCount; // number of accumulated votes
        }

        address public chairperson;

        mapping(address => Voter) public voters;

        Proposal[] public proposals;

        /** 
        * @dev Create a new ballot to choose one of 'proposalNames'.
        * @param proposalNames names of proposals
        */
        constructor(bytes32[] memory proposalNames) {
            chairperson = msg.sender;
            voters[chairperson].weight = 1;

            for (uint i = 0; i < proposalNames.length; i++) {
                // 'Proposal({...})' creates a temporary
                // Proposal object and 'proposals.push(...)'
                // appends it to the end of 'proposals'.
                proposals.push(Proposal({
                    name: proposalNames[i],
                    voteCount: 0
                }));
            }
        }
        
        /** 
        * @dev Give 'voter' the right to vote on this ballot. May only be called by 'chairperson'.
        * @param voter address of voter
        */
        function giveRightToVote(address voter) public {
            require(
                msg.sender == chairperson,
                "Only chairperson can give right to vote."
            );
            require(
                !voters[voter].voted,
                "The voter already voted."
            );
            require(voters[voter].weight == 0);
            voters[voter].weight = 1;
        }

        /**
        * @dev Delegate your vote to the voter 'to'.
        * @param to address to which vote is delegated
        */
        function delegate(address to) public {
            Voter storage sender = voters[msg.sender];
            require(!sender.voted, "You already voted.");
            require(to != msg.sender, "Self-delegation is disallowed.");

            while (voters[to].delegate != address(0)) {
                to = voters[to].delegate;

                // We found a loop in the delegation, not allowed.
                require(to != msg.sender, "Found loop in delegation.");
            }
            sender.voted = true;
            sender.delegate = to;
            Voter storage delegate_ = voters[to];
            if (delegate_.voted) {
                // If the delegate already voted,
                // directly add to the number of votes
                proposals[delegate_.vote].voteCount += sender.weight;
            } else {
                // If the delegate did not vote yet,
                // add to her weight.
                delegate_.weight += sender.weight;
            }
        }

        /**
        * @dev Give your vote (including votes delegated to you) to proposal 'proposals[proposal].name'.
        * @param proposal index of proposal in the proposals array
        */
        function vote(uint proposal) public {
            Voter storage sender = voters[msg.sender];
            require(sender.weight != 0, "Has no right to vote");
            require(!sender.voted, "Already voted.");
            sender.voted = true;
            sender.vote = proposal;

            // If 'proposal' is out of the range of the array,
            // this will throw automatically and revert all
            // changes.
            proposals[proposal].voteCount += sender.weight;
        }

        /** 
        * @dev Computes the winning proposal taking all previous votes into account.
        * @return winningProposal_ index of winning proposal in the proposals array
        */
        function winningProposal() public view
                returns (uint winningProposal_)
        {
            uint winningVoteCount = 0;
            for (uint p = 0; p < proposals.length; p++) {
                if (proposals[p].voteCount > winningVoteCount) {
                    winningVoteCount = proposals[p].voteCount;
                    winningProposal_ = p;
                }
            }
        }

        /** 
        * @dev Calls winningProposal() function to get the index of the winner contained in the proposals array and then
        * @return winnerName_ the name of the winner
        */
        function winnerName() public view
                returns (bytes32 winnerName_)
        {
            winnerName_ = proposals[winningProposal()].name;
        }
    }

  ```

## 注释说明
  1️⃣ 此为许可相关的表述方式，具体的可以参考SPDX许可列表网址：[SPDX许可列表](https://spdx.org/licenses/)

### 基本的语法构成

  熟悉代码的应该会对成员变量、局部变量、构造方法、方法等有一定的了解。
  1. 其中`constructor`表述的就是构造方法，及合约初始化的部署的时候直接执行的方法，
  2. `function`此关键字，很多语言中都会用到，称为函数或者方法，用来包裹功能模块
  3. `require`抛出异常使用，如果不符合条件，则抛出
  4. 成员变量即为不在方法中声明的变量，局部变量即为方法中声明的变量

## 总结

  业务逻辑、架构的使用、数据结构的设计为代码的主要处理模块，初学者可以优先关注业务逻辑，在熟练掌握语法、关键字的同时多多练习就能实现简单的合约内容了，下面讲解具体的代码结构、语法等，每个都会举一个简单的例子。