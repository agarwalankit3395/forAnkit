const ethers = require("ethers");
const ERC20ABI = require("./helpers/erc20ABI.json");
async function main() {
  const token0_address = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"; // WMATIC on Polycon
  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");

  // const signer = await ethers.getSigner(WMATIC_WHALE_WALLTET_ADDRESS);

  const wmatic_contract_instance = new ethers.Contract(
    token0_address,
    ERC20ABI,
    provider
  );
  wmatic_contract_instance.on("Transfer", (src, dst, wad, event) => {
    let info = {
      from: src,
      to: dst,
      value: wad.toString(),
    //   data: event
    };
    console.log(JSON.stringify(info, null, 4));
  });
}
main();
