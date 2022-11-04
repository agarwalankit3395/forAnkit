const ethers = require("ethers");
const UniswapV3Contract = require("./helpers/uniswap_contract.json");
async function main() {
  console.log("Swapping Checking")
  const uniV3_swap_contract = "0xA374094527e1673A86dE625aa59517c5dE346d32"; // WMATIC-USDC pool on polygon mainnet

  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");

  // const signer = await ethers.getSigner(WMATIC_WHALE_WALLTET_ADDRESS);

  const poolContract = new ethers.Contract(
    uniV3_swap_contract,
    UniswapV3Contract,
    provider
  );

  poolContract.on("Swap", (sender, recipient, amount0, amount1) => {
    let info = {
      from: sender,
      to: recipient,
      amount0: amount0.toString(),
      amount1 : amount1.toString()
    //   data: event
    };
    console.log(JSON.stringify(info, null, 4));
  });
}
main();
