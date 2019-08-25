const c = artifacts.require("Artmoney");

module.exports = function(deployer) {
  deployer.deploy(c, "Artmoney", "ART");
};
