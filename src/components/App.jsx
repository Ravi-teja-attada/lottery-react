import React, {useEffect, useState} from "react";
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import Web3 from "web3";

function App() {
  const [manager, setManager] = useState('');
  const [players, setPlayers] = useState([]);
  const [prize, setPrize] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function loadWeb3() {
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const prize = await web3.eth.getBalance(lottery.options.address);
      setManager(manager);
      setPlayers(players.length);
      setPrize(web3.utils.fromWei(prize, 'ether'));

    }
 
    loadWeb3();
  }, []);
  
  const enter = async()=>{
      const accounts = await web3.eth.getAccounts();
      setMessage('Waiting for transaction to be success..');
      await lottery.methods.enter().send({value:Web3.utils.toWei(amount, "ether"), from:accounts[0]});
      setMessage('Congratulations! You have entered the Lottery.')
    }
  
  const winner = async()=>{
    setMessage('Picking the winner.')
    await lottery.methods.pickWinner().send({from : manager});
    setMessage('done');
  }
  return <div className="contract">
    <h1>Lottery Contract</h1>
    <p>This lottery contract is created by <span>{manager}</span> </p>
    <p>No of players in the lottery are {players} <br></br> The total pool amount is {prize}</p>
    <h3>Want to try your Luck !</h3>
    <p>Amount of ether to enter 
    <input onChange={(e)=>{setAmount(e.target.value)}} value={amount} /></p>
    <button onClick={enter}>Enter</button>
    
    <h2><span>{message}</span></h2>
    <p>Lets see who the winner</p>
    <button onClick={winner}>Pick Winner</button>
  </div>
}

export default App;
