// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";


contract Stillwinter{
    string public visitor;

    // constructor(string memory _visitor){
    //     console.log("Deploying Stillwinter");
    //     visitor=_visitor;
    // }

    function hello() public pure returns (string memory){
        return "Remember The Stillwinter, This Project Is Scaffolded By ST1LLWATER";
    }

    function setUser(string memory _visitor) public{
        visitor=_visitor;
    }

    function getData() public view returns(string memory){
        return visitor;
    }

}