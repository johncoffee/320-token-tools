const c = artifacts.require("Autominter");

module.exports = function(deployer) {
  deployer.deploy(c);
};
