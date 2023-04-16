import web3 from "./web3";

const address = '0xCCb33C0b5606B3C8EEDCd4D3dc12546E34Ef04a4';

const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"inputs":[],"name":"enter","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0xe97dcb62"},{"inputs":[],"name":"getPlayers","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8b5b9ccc"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x481c6a75"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0x5d495aea"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"players","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf71d96cb"},{"inputs":[],"name":"poolPrize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x835a1fae"}];

export default new web3.eth.Contract(abi, address);