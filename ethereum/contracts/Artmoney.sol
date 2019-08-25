pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC721/ERC721MetadataMintable.sol";
import "@openzeppelin/contracts/access/roles/MinterRole.sol";
import "@openzeppelin/contracts/access/roles/MinterRole.sol";

/**
 * @title ERC721Mintable
 * @dev ERC721 minting logic.
 */
contract Artmoney is ERC721MetadataMintable {
    constructor(string memory name, string memory symbol) public ERC721Metadata(name, symbol) {
    }

    /**
     * @dev Function to mint tokens.
     * @param to The address that will receive the minted tokens.
     * @param tokenId The token id to mint.
     * @return A boolean that indicates if the operation was successful.
     */
    function mint(address to, uint256 tokenId) public onlyMinter returns (bool) {
        _mint(to, tokenId);
        return true;
    }
}
