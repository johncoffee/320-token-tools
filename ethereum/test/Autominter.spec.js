const Autominter = artifacts.require("Autominter")
const Chiemgauer = artifacts.require("Chiemgauer");

contract('Autominter', function([deployer, acc1]) {
  let instance

  beforeEach("deploy", async () => {
    instance = await Autominter.new()
  })

  it("should sending the contract ether", async () => {
    const chiemgauer = await Chiemgauer.new("Ler", "LER", "2")
    await chiemgauer.addMinter(instance.address)
    assert(await (chiemgauer.isMinter(instance.address)))
    await instance.setMintable(chiemgauer.address)

    const wei = web3.utils.toWei('1', 'ether')
    await web3.eth.sendTransaction({
      from: deployer,
      to: instance.address,
      value: wei,
    })
    assert.strictEqual((await web3.eth.getBalance(instance.address)).toString(),wei)

    // await instance.money()
    // const bal2 = await web3.eth.getBalance(instance.address)
    // console.log(bal2 + "")
    //
    // await instance.money()
    // const bal3 = await web3.eth.getBalance(instance.address)
    // console.log(bal3 + "")
  })

})