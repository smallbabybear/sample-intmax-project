import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const UseIntmaxModule = buildModule("UseIntmaxModule", (m) => {
  const rollupContractAddress = process.env.ROLLUP_CONTRACT_ADDRESS;
  const mRrollupContractAddress = m.getParameter("rollupContractAddress", rollupContractAddress);

  const rollup = m.contract("UseIntmax", [mRrollupContractAddress]);

  return { rollup };
});

export default UseIntmaxModule;
