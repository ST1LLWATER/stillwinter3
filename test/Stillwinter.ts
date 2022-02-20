import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Stillwinter", function () {
  it("Should Info Creator", async function () {
    const stillwinter = await ethers.getContractFactory("Stillwinter");
    const data = await stillwinter.deploy();
    await data.deployed();

    expect(await data.hello()).to.equal(
      "Remember The Stillwinter, This Project Is Scaffolded By ST1LLWATER"
    );
  });

  it("Check New User", async function () {
    const stillwinter = await ethers.getContractFactory("Stillwinter");
    const data = await stillwinter.deploy();
    await data.deployed();

    await data.setUser("New User");
    expect(await data.getData()).to.equal("New User");
  });
});
