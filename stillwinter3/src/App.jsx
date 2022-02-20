import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Stillwinter from "../artifacts/contracts/Stillwinter.sol/Stillwinter.json";

const stillwinterAddress = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";

const App = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState("");
  const [siteVisitor, setSiteVisitor] = useState("");
  const [visitor, setVisitor] = useState("");

  useEffect(() => {
    requestAccount();
  }, []);

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function fetchCreator() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        stillwinterAddress,
        Stillwinter.abi,
        provider
      );
      console.log(contract);
      try {
        const data = await contract.hello();
        setData(data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  async function setVisitorOnSite() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        stillwinterAddress,
        Stillwinter.abi,
        signer
      );
      console.log(contract);
      const transaction = await contract.setUser(siteVisitor);
      await transaction.wait();
      setSiteVisitor("");
      const data = await contract.getData();
      setVisitor(data);
    }
  }

  return (
    <div>
      <header
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          textAlign: "center",
        }}
        className="App-header"
      >
        <button onClick={fetchCreator}>Fetch Creator</button>
        <button onClick={setVisitorOnSite}>Set Visitor</button>
        <input
          onChange={(e) => setSiteVisitor(e.target.value)}
          placeholder="Set Name"
          value={siteVisitor}
        />
      </header>
      <div
        style={{
          marginTop: "200px",
          textAlign: "center",
        }}
      >
        <h1>{data}</h1>
        <h2>{visitor ? `Welcome To A Web3 Webiste ${visitor}` : null}</h2>
        <h3>{`Your Account Address Is ${window.ethereum.selectedAddress}`}</h3>
      </div>
    </div>
  );
};

export default App;
