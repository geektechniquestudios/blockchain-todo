import { useEffect, useState } from 'react';
import Web3 from 'web3';
import './App.css';

function App() {

  const [account, setAccount] = useState("0x0")

  useEffect(() => {
    loadBlockchain()
  })

  const loadBlockchain = async () =>  {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    console.log("network: ", network)
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
    console.log(accounts)
    console.log(account)
  }

  return (
    <div>
      <p>account: {account}</p>
    </div>

  );
}

export default App;
