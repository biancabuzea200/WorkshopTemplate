#### In this section we are going to write our Smart Contract deployment script and actually deploy our Smart Contract to Sepolia network!

1.Create `script/deploy_token.s.sol` file in the `script` directory and write our first deploy script:

```js
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/Token.sol";

contract MyScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address deployerPublicKey = vm.envAddress("PUBLIC_KEY");
        vm.startBroadcast(deployerPrivateKey);

        Token token = new Token(deployerPublicKey, deployerPublicKey);

        vm.stopBroadcast();
    }
}
```

2. Now do the same for the second contract, this time we will call it `script/deploy_tokenVendor.s.sol`:

```js
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/TokenVendor.sol";

contract MyScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address tokenAddress = vm.envAddress("TOKEN_ADDRESS");
        vm.startBroadcast(deployerPrivateKey);

        TokenVendor tokenVendor = new TokenVendor(tokenAddress);

        vm.stopBroadcast();
    }
}
```

3. Deploy our contract to Sepolia:

```bash
forge script --chain Sepolia script/deploy_tokenVendor.s.sol --rpc-url $SEPOLIA_RPC_URL --broadcast --verify -vvvv
```

### Make sure to save the address of the contracts!
