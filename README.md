# 320's Chiemgauer

## install 

`npm i`

## deploy

```text 
cd ethereum
truffle deploy --network goerli
```

# Running the thing


    (await Autominter.deployed()).setMintable(Chiemgauer.address)
    (await Chiemgauer.deployed()).addMinter(Autominter.address)
    (await Autominter.deployed()).tokens()
    (await (await Chiemgauer.deployed()).balanceOf((await web3.eth.personal.getAccounts())[0])).toString()
    //or
    (await Chiemgauer.deployed()).balanceOf('0x5633F4c5eF0b85A95E4adF54E6C25070C1fE500c')
    
Stuff