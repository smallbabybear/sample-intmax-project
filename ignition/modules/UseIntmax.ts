import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { env } from "../../src/config";

const UseIntmaxModule = buildModule("UseIntmaxModule", (m) => {
  const rollup = m.contract("UseIntmax", [env.ROLLUP_CONTRACT_ADDRESS]);

  return { rollup };
});

export default UseIntmaxModule;
