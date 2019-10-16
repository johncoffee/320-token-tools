pragma solidity ^0.5.0;

import "@openzeppelin/contracts/access/roles/MinterRole.sol";
import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract ERC20CompatibleERC777 is ERC777, MinterRole {
    constructor(
        string memory name,
        string memory symbol,
        address[] memory defaultOperators
    )
    public
    ERC777(name, symbol, defaultOperators)
    MinterRole()
    {
        // no body
    }

    function mint(address operator,
        address account,
        uint256 amount,
        bytes memory userData,
        bytes memory operatorData) public onlyMinter returns (bool) {

        require(isOperatorFor(operator, account), "Given address is not operator for tokenHolder");

        _mint(operator,
            account,
            amount,
            userData,
            operatorData
        );
        return true;
    }
}
