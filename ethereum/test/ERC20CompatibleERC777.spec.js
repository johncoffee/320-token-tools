const ERC20CompatibleERC777 = artifacts.require("ERC20CompatibleERC777");

contract('ERC20CompatibleERC777', function([deployer, acc1]) {
  let instance

  it("should start with no supply", async () => {
    instance = await ERC20CompatibleERC777.new("LerToken", "LER", [deployer])
    assert.strictEqual((await instance.totalSupply()).toNumber(), 0, "totalSupply should start with 0");
  })

})