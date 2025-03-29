import { cleanEnv, str } from "envalid";
import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";

const env = cleanEnv(process.env, {
  PRIVATE_KEY: str(),
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
  },
  // paths: {
  //   sources: "./contracts",
  // },
};

export default config;
