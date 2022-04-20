import {Injectable} from '@angular/core';
import {Store} from "@ngxs/store";
import {Web3ModalService} from "@mindsorg/web3modal-angular";
import {Web3Provider} from "@ethersproject/providers";
import {CurrentBetActions} from "../store/currentBet/current-bet-actions";
import BetFactory from '../contracts/betfactory.sol/BetFactory.json';
import BetContract from '../contracts/bet.sol/Bet.json';
import BetCoin from '../contracts/betcoin.sol/BetCoin.json';
import {Contract} from "@ethersproject/contracts";


@Injectable({
  providedIn: 'root'
})
export class BetCoinService {
  private betFactoryAddress = "0x239745750870104a7EC6126c89156D773088286c";
  private tokenAddress = "0x00BBf6C4102a769076EC39ab0535c5635f2fDD6F";
  private betContractAddress;
  public web3provider: Web3Provider = null;
  public userAddress: string;
  public betFactoryContract;
  public signer;

  constructor(public web3ModalService: Web3ModalService,
              public store: Store) {
  }

  async login() {
    let provider = await this.web3ModalService.open() as any;
    this.web3provider = new Web3Provider(provider)
    let accounts = await this.web3provider.listAccounts();
    this.userAddress = accounts[0];
    this.store.dispatch(new CurrentBetActions.AddUserAddress(this.userAddress))
    this.signer = this.web3provider.getSigner()
    this.betFactoryContract = new Contract(this.betFactoryAddress, BetFactory.abi, this.signer);

    console.log(this.betFactoryContract);
    console.log(this.signer);

    
    console.log(this.betContractAddress);

  }

  // async createNewBet() {
  //   this.betContractAddress = await this.betFactoryContract.newBet();
  //   console.log(this.betContractAddress);
  // }

  async newBet(odd: number, id: number, bet_amount: number ){

    this.betContractAddress = await this.betFactoryContract.newBet(1, 2, this.tokenAddress);
    let newBetContract = new Contract(this.betContractAddress, BetContract.abi, this.signer);
    await newBetContract['bet'](2);
    // console.log("true:",betPlaced);

  }

  async faucet(){

    let tokenContract = new Contract(this.tokenAddress, BetCoin.abi, this.signer)
    tokenContract['faucet'](this.userAddress);

  }

}
