import "dotenv/config";
import { str, cleanEnv } from "envalid";

export const env = cleanEnv(process.env, {
  ROLLUP_CONTRACT_ADDRESS: str(),
});
