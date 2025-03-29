import { cleanEnv, str } from "envalid";
import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";

const env = cleanEnv(process.env, {
  PRIVATE_KEY: str(),
  ALCHEMY_KEY: str(),
});

const accounts = [env.PRIVATE_KEY];

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
  },
  networks: {
    localhost: {
      chainId: 31337,
      url: "http://localhost:8545",
      accounts,
    },
    sepolia: {
      chainId: 11155111,
      url: `https://eth-sepolia.g.alchemy.com/v2/${env.ALCHEMY_KEY}`,
      accounts,
    },
    scrollSepolia: {
      chainId: 534351,
      url: `https://scroll-sepolia.g.alchemy.com/v2/${env.ALCHEMY_KEY}`,
      accounts,
    },
  },
};

export default config;
