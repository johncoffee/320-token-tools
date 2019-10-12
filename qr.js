const qr = require('qrcode-terminal');
const {join} = require('path')
const assert = require('assert')
const abi = require(join(__dirname, 'ethereum/build/contracts/Chiemgauer.json'))

const networkId = process.argv[2]
assert.ok(networkId, 'need network id')

console.log(abi.contractName);
console.log(abi.networks[networkId].address);
qr.generate(abi.networks[networkId].address, {small:1});