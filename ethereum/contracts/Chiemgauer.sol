pragma solidity ^0.5.0;

import "../../node_modules/@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "../../node_modules/@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "../../node_modules/@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract Chiemgauer is ERC20Detailed, ERC20Mintable, ERC20Burnable {
    constructor(string memory name, string memory symbol, uint8 decimals)
        public ERC20Detailed(name, symbol, decimals) {
    }
}