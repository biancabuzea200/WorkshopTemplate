import {
  GeneralConfig,
  MainPageConfig,
  NavBarConfig,
  StepsPageConfig,
} from "./types";

export const generalConfig: GeneralConfig = {
  companyName: "Chronicle",
  basePath: "/workshops-template",
};

export const navBarConfig: NavBarConfig = {
  discordLink: "https://discord.com/invite/CjgvJ9EspJ",
  navbarButtonText: "Start",
  navbarButtonLink: "https://chroniclelabs.org/dashboard",
  logoLink: "https://chroniclelabs.org/",
};

export const mainPageConfig: MainPageConfig = {
  mainTitle: "Workshop Template",
  subTitle: "Oracle Workshop",
  heroText: "Power your dApp with cost-efficient, verifiable data",
  heroButtonText: "Check Oracles",
  heroButtonLink: "https://chroniclelabs.org/dashboard",

  workshopSummarySteps: [
    {
      title: "General Setup",
      text: "Initialize the project and install dependencies.",
    },
    {
      title: "Install Open Source Tooling",
      text: "Install and configure some EVM open source tooling like Foundry and ethers.js",
    },
    {
      title: "Create an ERC20 token and design a TokenVendor to distribute it ",
      text: "The TokenVendor will accept ETH and distribute our token to the sender. ",
    },
    {
      title: "Pay some ETH and get ERC20 tokens in exchange",
      text: "The TokenVendor will get the current ETH/USD price using a Chronicle Oracle. ",
    },
  ],
};

export const stepsPageConfig: StepsPageConfig = {
  stepsData: [
    { id: 1, title: "Step 1: Setup", file: "step1.md" },
    { id: 2, title: "Step 2: Compile our Smart Contracts", file: "step2.md" },
    { id: 3, title: "Step 3: Deploy our Smart Contracts", file: "step3.md" },
    { id: 4, title: "Step 4: Send ETH and get some ERC20", file: "step4.md" },
  ],
  prerequisites: [
    {
      text: "Basic Solidity knowledge",
    },
    {
      text: "Node.js version >20 installed. Follow the <a href='https://nodejs.org/en/download/package-manager' target='_blank' class='text-blue-500 underline hover:text-blue-700'>official documentation for installation.</a>",
    },
    {
      text: "A code editor like VS Code",
    },
    {
      text: "An Ethereum wallet (such as MetaMask) with some Sepolia ETH. Here is a <a href='https://cloud.google.com/application/web3/faucet/ethereum/sepolia'> faucet</a> that does not require any Mainnet dust",
    },
  ],
};
