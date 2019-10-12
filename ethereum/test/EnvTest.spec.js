contract('Env', () => {

  it("deploy", async () => {
    assert.ok(web3, 'Were using global web3')
    assert.ok(web3.version.startsWith('1.2'), "we expected web3 1.2.x")
  })
})
