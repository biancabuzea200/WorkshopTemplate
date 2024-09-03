#### Getting ERC20 tokens in exchange for ETH

1. We are ready to test our dApp. To do so, we will send some test ETH on Sepolia to the TokenVendor’s address, and we should get in exchange some ERC20 token.

```bash
cast send $TOKEN_VENDOR_ADDRESS  --value 0.01ether  --rpc-url $SEPOLIA_RPC_URL --private-key $PRIVATE_KEY
```
