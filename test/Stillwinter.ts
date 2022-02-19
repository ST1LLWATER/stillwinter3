import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Stillwinter", function () {
  it("should say hi", async function () {
    const stillwinter = await ethers.getContractFactory("Stillwinter");
    const data = await stillwinter.deploy();
    await data.deployed();

    expect(await data.hello()).to.equal("Remember The Stillwinter");
  });
});
