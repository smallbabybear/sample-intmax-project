// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import {IRollup} from "intmax2-contract/contracts/rollup/IRollup.sol";

contract UseIntmax {
    IRollup public rollup;

    constructor(IRollup _rollup) {
        rollup = _rollup;
    }

    function getLatestBlockNumber() external view returns (uint32) {
        return rollup.getLatestBlockNumber();
    }
}
