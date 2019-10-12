const chiemgauer = artifacts.require("Chiemgauer");

contract('Chiemgauer', function([deployer,acc1]) {
  let instance

  beforeEach(async () => {
    instance = await chiemgauer.new("Ler", "LER", "2")
  })

  it("should put 10000 in the first account", async () => {
    assert.strictEqual((await instance.balanceOf(deployer)).toNumber(), 0, "should start with 0");
  })

  it("should mint", async () => {
    assert.strictEqual((await instance.balanceOf(deployer)).toNumber(), 0, "should start with 0");

    await instance.mint(acc1, "200")
    assert.strictEqual((await instance.balanceOf(acc1)).toNumber(),200, "should have had 200")
  })
})