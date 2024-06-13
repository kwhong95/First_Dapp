import { ethers } from "hardhat";

async function main() {
  console.log("deploying KyleToken contract");
  const KyleToken = await ethers.deployContract("KyleToken");
  await KyleToken.waitForDeployment();

  console.log(`KyleToken contract is deployed to ${KyleToken.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
