require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture strategy cost spice social inner argue metal gaze'; 
let testAccounts = [
"0x64c6c140b42ad6ca035d65a8ff3a1a74c45e29bcc070343f95903eb9845274e9",
"0xef7a30047b59106fe04607d7b3fe6bce745d4ad431e1f2336f53b2f8a66dfea6",
"0x5a3d6bc75dc2ecfca5bd2912c91d6f015cd1c3bb22eaa13b15867b36fc265f49",
"0x62bef8b5686c6aea75f72659ae9a50b5a1c5a62066be5fa5d92bcb194d0bf004",
"0x5ab047546d92484353dc6e925917c71f25937a37a1f81eb041a8d763975b3444",
"0x26cb080e2628950d04d8c2b35461838c738b98f51c5a7ead36f85dee23afa56d",
"0x48e8adb17bcf9e44fa55587759c973c09170a0dc815ba06b2170440b60b49c6a",
"0xd3fab72ad7f61bce15beb538d4bec687573f2b83380d15518d666816f30bdf9a",
"0xed56e51c5a60be8af485791ff7e34692debea763c7d97ef0dd3be1f204317056",
"0x14b1dc24a68951753103fc68d766e4ace6c410c801903f0d78c1af17b07194c5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

