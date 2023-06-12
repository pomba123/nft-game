require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.4",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/F7wR4QvCxvlGkeaxnyA7sOZd6W_NJTn0",
      accounts: ["8e8d0acc5ef2b221d96a242c850bc7a2fbc3cb962ffb141cf733836075c724e6"],
    },
  },
};

