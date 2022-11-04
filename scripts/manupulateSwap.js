const { ethers, network } = require("hardhat");
// const IUniswapV3PoolABI = require("@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json");
const ERC20ABI = require( '../helpers/erc20ABI.json');
// const UNIV3_PoolAddress = "0xa374094527e1673a86de625aa59517c5de346d32";            // WMATIC-USDC pool on polygon mainnet

async function main() {
  try {
    const token0_address = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"     // WMATIC on Polycon
    const WMATIC_WHALE_WALLTET_ADDRESS = "0xe7804c37c13166fF0b37F5aE0BB07A3aEbb6e245";
    const signer = await ethers.getSigner(WMATIC_WHALE_WALLTET_ADDRESS);
    // const poolContract = new ethers.Contract( UNIV3_PoolAddress, IUniswapV3PoolABI, signer);
    const wmatic_contract_instance =  new ethers.Contract(token0_address,ERC20ABI,signer);
    const tx = await wmatic_contract_instance.connect(loanInitiator).approve(uniV3_swap_contract.address, ethers.utils.parseEther('10'));
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
