# Sample Hardhat Project

## How to Use

```sh
npx hardhat node
```

Deploy Intmax contracts by intmax2 repository before running the following commands.

```sh
cp .env.example .env
npx hardhat ignition deploy ./ignition/modules/UseIntmax.ts ---network localhost
npx hardhat run ./scripts/useIntmax.ts --network localhost
```

Example output:

```
rollupContractAddress: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
latestBlockNumber: 355
```
