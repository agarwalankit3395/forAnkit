const { ethers } = require("hardhat");
const WMATIC_WHALE_WALLTET_ADDRESS = "0xe7804c37c13166fF0b37F5aE0BB07A3aEbb6e245";
const uniV3_router_addr = '0xE592427A0AEce92De3Edee1F18E0157C05861564';

async function main() {
const provider = await ethers.getSigner(WMATIC_WHALE_WALLTET_ADDRESS);  // Ankit Change
signers = await ethers.getSigners(); 
signer = signers[0];
const uniV3_swap_factory = await ethers.getContractFactory("UniswapV3Swap", signer);
const uniV3_swap_contract = await uniV3_swap_factory.deploy(uniV3_router_addr);
await uniV3_swap_contract.deployed();
console.log('UNISWAPV3 SWAP CONTRACT DEPLOYED ADDRESS',uniV3_swap_contract.address);
}

main();