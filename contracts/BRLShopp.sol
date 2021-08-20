// contracts/Brlshopp.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";

contract BRLShopp is ERC20PresetMinterPauser {
  constructor() ERC20PresetMinterPauser("BRLShopp", "BRLSHOPP") {
  }

  function decimals() public view virtual override returns (uint8) {
    return 2;
  }
}

