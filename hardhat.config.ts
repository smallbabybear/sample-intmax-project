import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";

const getAccounts = () => {
  if (process.env.PRIVATE_KEY) {
    return [process.env.PRIVATE_KEY];
  }
  return [];
}

const getAlchemyKey = () => {
  if (process.env.ALCHEMY_KEY) {
    return process.env.ALCHEMY_KEY;
  }
  return "";
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
  },
  networks: {
    localhost: {
      chainId: 31337,
      url: "http://localhost:8545",
    },
    sepolia: {
      chainId: 11155111,
      url: `https://eth-sepolia.g.alchemy.com/v2/${getAlchemyKey()}`,
      accounts: getAccounts(),
    },
    scrollSepolia: {
      chainId: 534351,
      url: `https://scroll-sepolia.g.alchemy.com/v2/${getAlchemyKey()}`,
      accounts: getAccounts(),
    },
  },
};

export default config;
