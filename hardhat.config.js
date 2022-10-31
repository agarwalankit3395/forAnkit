require("@nomicfoundation/hardhat-toolbox");
//require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

require("@nomiclabs/hardhat-waffle");
require("hardhat-tracer");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.5.5" },
      { version: "0.5.0" } ,
      { version: "0.6.6" },
      { version: "0.8.8" },
      { version: "0.7.6" } ,
      { version: "0.8.0" } ,
      { version: "0.7.5" }
    ],
    overrides: {
      "@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol": {
        version: "0.6.5",
        settings: { }
      }
    }
  },
  networks: {
    hardhat: {
    
      forking: {
        enabled : true ,
        url: "https://polygon-mainnet.g.alchemy.com/v2/zF-EZv66IP0tcXh9wNv4s6VmxSmW9RMN",
        blockNumber: 34779176,

      },
    },
  },
};
