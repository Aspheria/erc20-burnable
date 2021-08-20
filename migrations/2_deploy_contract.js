const BRLShopp = artifacts.require("BRLShopp");

module.exports = async function(deployer) {
  await deployer.deploy(BRLShopp);
};