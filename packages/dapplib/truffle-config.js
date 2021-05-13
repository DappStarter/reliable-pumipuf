require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remind attitude hope entire bubble smooth'; 
let testAccounts = [
"0x446dd95a2d2a8c01c2cdd7b44c266475fa0a19deaab58bcddf94e0fedb8804b6",
"0x4f68de2d39a6e228ce4eab94d5e746eaa19d18a9ed6f4089a505aa37ccdd6e55",
"0xbabf7788870df360938cedc3033b4fb73d870e6f92f5fee4655030cf40aa8284",
"0x87a3645c6ae10ab18bfb2a9f510c24cc56ed2e8c6c8cb590b35bbd488a733132",
"0xc37c1d3c1c355f045080dc8d30d1e79544e16bc3460b55a3a26175d26e111339",
"0x68664d16b366c47470764a0493aa6381ec340f13e3c23ed50c34dde7d62fa230",
"0x3b93bef8fe54724abe78d0f5f556e421ced7993594f29505bcccb35962fcd088",
"0x3f995f7fcc9b65fee5ef441920c187229afad0a4ab87546bdb7b7d791751cfbf",
"0xe6f6e23697fb44594379e5ccdb576d9d52f1d1bea57a2c43be70a4ce0536763a",
"0x2e86160fdb2fe6bcaa61a2d966883ab9d096689d8fb39e2f9caca38a5ce8fb50"
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
            version: '^0.5.11'
        }
    }
};
