require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const projectId = process.env.PROJECT_ID
 const privatekey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY

module.exports = {
  defaultNetwork: 'hardhat',
  networks:{
    hardhat:{
      chainId: 1337
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privatekey],
    },
    mainnet:{
      url:`https://mainnet.infura.io/v3/${projectId}`,
      accounts:[privatekey],
    },
  },
  solidity: {
     version: "0.8.4",
     settings: {
       optimizer: {
         enabled: true,
       }
     }
  }
};
