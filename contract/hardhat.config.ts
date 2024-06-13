import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import { mnemonic } from "./secret.json";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "testnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    testnet: {
      url: process.env.TEST_NET_URL as string,
      chainId: 97,
      accounts: { mnemonic: mnemonic },
    },
  },
  // paths: {
  //   sources: "./contracts",
  //   tests: "./test",
  //   cache: "./cache",
  //   artifacts: "./artifacts",
  // },
  // mocha: {
  //   timeout: 20000,
  // },
};

export default config;
