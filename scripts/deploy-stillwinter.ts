import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
  const Stillwinter = await ethers.getContractFactory("Stillwinter");
  const stillwinter = await Stillwinter.deploy();
  await stillwinter.deployed();

  return stillwinter;
}

// @ts-ignore
async function sayHello(stillwinter) {
  console.log("Address:", await stillwinter.address);
  console.log("Say Hello: ", await stillwinter.hello());
}

deploy().then((stillwinter) => sayHello(stillwinter));
