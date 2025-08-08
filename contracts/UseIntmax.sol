// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import {IRollup} from "intmax2-contract/contracts/rollup/IRollup.sol";

contract UseIntmax {
    IRollup public immutable rollup;

    constructor(IRollup _rollup) {
        if (address(_rollup) == address(0)) {
            revert("Invalid rollup contract address");
        }
        rollup = _rollup;
    }

    function getLatestBlockNumber() external view returns (uint32) {
        return rollup.getLatestBlockNumber();
    }
}
