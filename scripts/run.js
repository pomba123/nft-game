const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Crash Bandicoot", "Coco Bandicoot", "Dr. Neo Cortex"],
		[
			"https://i.imgur.com/tQ9lMl8.png",
			"https://i.imgur.com/hRTS9lR.png",
			"https://i.imgur.com/qSz3yxt.jpg",
		],
    [25, 17, 40], // HP values
    [15, 7, 25],
    "Nitros Oxide",
    "https://i.imgur.com/FP9EXd0.png",
    100,
    8
  );
  await gameContract.deployed();
  console.log("Contrato implantado no endereço:", gameContract.address);
let txn;
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();


};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

