// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TighToken is ERC20, Ownable {
    event TokenBuy(address indexed buyer, uint256 amount);
    event WithdrawETH(address indexed withdrawer ,uint256 amount);

    constructor(address initialOwner) ERC20("TighToken", "TT") Ownable(initialOwner) 
    {} 


    function buyToken() payable public {
        require(msg.value > 0, "TighToken value has to be bigger than 0");
        uint256 mintAmount = getExchangeRate(msg.value);
        _mint(msg.sender, mintAmount);
        emit TokenBuy(msg.sender, mintAmount);
    }

    function getExchangeRate(uint256 ethAmount) public pure returns(uint256) {
        // decimal(18) - x 1000
        uint256 tokenAmount = ethAmount * 1000;
        return tokenAmount;
    }

    function withDrawAll() public onlyOwner {
        address payable to = payable(msg.sender);
        uint256 withdrawBalance = address(this).balance;
        to.transfer(withdrawBalance);
        emit WithdrawETH(msg.sender, withdrawBalance);
    }
}