const ethers = require("ethers");
const {abi : IUniswapV3PoolABI} = require("@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json");
async function main() {
  console.log("Running")
  const UNIV3_PoolAddress = "0xa374094527e1673a86de625aa59517c5de346d32"; // WMATIC-USDC pool on polygon mainnet
  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");

  // const signer = await ethers.getSigner(WMATIC_WHALE_WALLTET_ADDRESS);

  const poolContract = new ethers.Contract(
    UNIV3_PoolAddress,
    IUniswapV3PoolABI,
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
