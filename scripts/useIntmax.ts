import { viem, network } from 'hardhat'
import { Hex } from 'viem';
import fs from 'fs/promises';
import path from 'path';

const readFileFromDeployment = async (chainId: number): Promise<{ [contractName: string]: Hex }> => {
  try {
    const filePath = path.join('ignition', 'deployments', `chain-${chainId}`, 'deployed_addresses.json');
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file from deployment: ${error}`);
    throw error;
  }
};

async function main() {
  const contractAddresses = await readFileFromDeployment(network.config.chainId!);
  const useIntmax = await viem.getContractAt('UseIntmax', contractAddresses["UseIntmaxModule#UseIntmax"]);
  const rollupContractAddress = await useIntmax.read.rollup();
  console.log(`rollupContractAddress: ${rollupContractAddress}`);
  const latestBlockNumber = await useIntmax.read.getLatestBlockNumber();
  console.log(`latestBlockNumber: ${latestBlockNumber}`);
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
