const ERC20CompatibleERC777 = artifacts.require("ERC20CompatibleERC777");

contract('Chiemgauer', function([deployer,acc1]) {
  let instance

  beforeEach(async () => {
    instance = await ERC20CompatibleERC777.new("Ler", "2")
  })

  it("should put start with 0", async () => {
    assert.strictEqual((await instance.balanceOf(deployer)).toNumber(), 0, "should start with 0");
  })

})