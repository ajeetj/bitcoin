const {Blockchain, Transactions} = require('./blockchain');

let bitCoin = new Blockchain();

bitCoin.createTransaction(new Transactions('address1','address2', 100));
bitCoin.createTransaction(new Transactions('address2','address1', 50));

console.log("Starting the miner..");
bitCoin.mindPendingTransactions('ajeetReward');

console.log('\n Balance of ajeetReward is', bitCoin.getBalanceOfAddress('ajeetReward'));

bitCoin.mindPendingTransactions('ajeetReward');

console.log('\n Balance of ajeetReward is', bitCoin.getBalanceOfAddress('ajeetReward'));

// console.log("Mining block 1...")
// bitCoin.addBlock(new Block(1,'01/02/2019',{amount:4}));

// console.log("Mining block 2...")
// bitCoin.addBlock(new Block(2,'01/03/2019',{amount:10}));


//console.log(JSON.stringify(bitCoin,null,4));

//console.log(bitCoin.isChainValid());

// bitCoin.chain[1].data= {amount: 50};
// bitCoin.chain[1].hash=bitCoin.chain[1].calculateHash();

// console.log(JSON.stringify(bitCoin,null,4));
// console.log(bitCoin.isChainValid());
