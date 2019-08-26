pragma solidity ^0.5.0;

interface MintableERC20 {
    function mint(address account, uint256 amount) external returns (bool);

//    function isMinter(address account) external view returns (bool);
}

contract Autominter {
    MintableERC20 private _mintable;

    uint private _amount = 500;

    function() external payable {
        address _to = msg.sender;
        _mintable.mint(_to, _amount);
    }

    function setMintable(address minter) external {
        _mintable = MintableERC20(minter);
    }

    function tokens() external {
        address _to = msg.sender;
        _mintable.mint(_to, _amount);
    }

    function money() external payable
    {
        address cashHolder = address(this); // contract have a .balance property
        address payable _to = msg.sender;
        require(cashHolder.balance > 0, 'Contract is broke :(');
        _to.transfer(1 finney);
    }
}
