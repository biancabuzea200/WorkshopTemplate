### Let's add our Smart Contract:

1. We will use Open Zeppelin’s AccessControl module to implement role-based control mechanisms. We will have two roles, `MINTER_ROLE` and `defaultAdmin`. The roles can be granted dynamically by `grantRole()`.
   Under `src` directory, create a file called "Token.sol" and paste the following contract code:

```js
// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Token is ERC20, AccessControl {
    // Create a new role identifier for the minter role
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor(address defaultAdmin, address minter) ERC20("BiancaToken", "BIA") {
        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
        // Grant the minter role to a specified account
        _grantRole(MINTER_ROLE, minter);
    }

    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }
}
```

2. We are using OpenZeppelin here so let's run:

```bash
npm install @openzeppelin/contracts
```

3. Compile our contract:

```bash
forge build
```
