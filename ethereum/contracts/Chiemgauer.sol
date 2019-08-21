pragma solidity ^0.5.0;

import "../../node_modules/@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "../../node_modules/@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";

contract Chiemgauer is ERC20Mintable, ERC20Burnable {
    constructor() public {
    }
}