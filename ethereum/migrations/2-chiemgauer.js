const c = artifacts.require("Chiemgauer");

module.exports = function(deployer) {
  deployer.deploy(c, 'Chiemgauer', 'CMG', 0);
};
