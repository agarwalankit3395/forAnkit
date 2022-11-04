const ERC20ABI = require("../helpers/erc20ABI.json");
const { ethers, network } = require("hardhat");

const token0_address = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"; // WMATIC on Polycon

async function main() {
  try {
    const WMATIC_WHALE_WALLTET_ADDRESS =
      "0xe7804c37c13166fF0b37F5aE0BB07A3aEbb6e245";
      signers = await ethers.getSigners(); 
      console.log(signers[0].address)
    const loanInitiatorAccountAddress = signers[0].address;

    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [WMATIC_WHALE_WALLTET_ADDRESS]
    });

    const signer = await ethers.getSigner(WMATIC_WHALE_WALLTET_ADDRESS);

    const wmatic_contract_instance =  new ethers.Contract(token0_address,ERC20ABI,signer);
    const WMATIC_WHALE_WALLTET_ADDRESS_BALANCE = await wmatic_contract_instance.balanceOf(WMATIC_WHALE_WALLTET_ADDRESS);
    console.log("WMATIC balance of whale", WMATIC_WHALE_WALLTET_ADDRESS_BALANCE / 1e18)

    console.log("transfering to", loanInitiatorAccountAddress);
    const amount = 450n * 10n ** 18n;
    await wmatic_contract_instance.connect(signer).transfer(loanInitiatorAccountAddress, amount)
    // await wmatic_contract_instance.connect(signer).transfer(loanInitiatorAccountAddress, WMATIC_WHALE_WALLTET_ADDRESS_BALANCE)
    const accountBalance = await wmatic_contract_instance.balanceOf(loanInitiatorAccountAddress)

    console.log("transfer complete. Congratulations!")
    console.log("loanInitiatorAccountAddress account balance", accountBalance / 1e18)

    const whaleBalanceAfter = await wmatic_contract_instance.balanceOf(WMATIC_WHALE_WALLTET_ADDRESS);
    console.log("WMATIC balance of whaleBalanceAfter", whaleBalanceAfter / 1e18);

  } catch (error) {
    console.log(error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
