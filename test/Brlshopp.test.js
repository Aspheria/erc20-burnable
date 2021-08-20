const Brlshopp = artifacts.require("Brlshopp")

contract("Brlshopp", (accounts) => { 

  before(async () => {
    brlshopp = await Brlshopp.deployed()
  })

  it("gives 1M of tokens", async () => {
    let balance = await brlshopp.balanceOf(accounts[0])
    console.log(web3.utils.fromWei(balance), "ether")
    assert.equal(balance, "1000000", "Balance should be 1m tokens for contract creator") //teste de falha, tirar o 1 para teste de sucesso
  })

  it("can transfer tokens between accounts", async () => {
    let amount = web3.utils.toWei("555", "ether")
    await brlshopp.transfer(accounts[1], amount, {from: accounts[0] })

    let balance = await brlshopp.balanceOf(accounts[1])
    console.log(web3.utils.fromWei(balance), "ether") 
    assert.equal(balance, "1001", "Balance should be 1k tokens for contract creator") //teste de falha, tirar o 1 para teste de sucesso

  })

})