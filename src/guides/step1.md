#### Setup & Installation

1. Make sure that you have `Foundry` installed. If you do not, check out the [installation guide](https://book.getfoundry.sh/getting-started/.installation)

**What is Foundry?**

> Foundry is a blazing fast, portable and modular toolkit for Ethereum application development. Learn more in the [official documentation](https://github.com/foundry-rs/foundry)

2. Create a folder for our project, then change directory:

```bash
mkdir projectFolder
```

```bash
cd projectFolder
```

3. Initialize a new Foundry project:

```bash
forge init projectName
```

We will start with some clean up. In the src folder, we will delete the `Counter.sol` file, the `Counter.t.sol` under `test`, and the `Counter.s.sol` under `script`.

4. Install additional packages:

```bash
npm install dotenv
```

6. Create a `.env` file in the root directory:

```bash
SEPOLIA_RPC_URL=
PRIVATE_KEY=
ETHERSCAN_API_KEY=
PUBLIC_KEY=
```
