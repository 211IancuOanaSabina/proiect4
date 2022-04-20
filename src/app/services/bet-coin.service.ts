import {Injectable} from '@angular/core';
import {Store} from "@ngxs/store";
import {Web3ModalService} from "@mindsorg/web3modal-angular";
import {Web3Provider} from "@ethersproject/providers";
import {CurrentBetActions} from "../store/currentBet/current-bet-actions";
import BetFactory from '../contracts/betfactory.sol/BetFactory.json';
import {Contract} from "@ethersproject/contracts";


@Injectable({
  providedIn: 'root'
})
export class BetCoinService {
  private betFactoryAddress = "0x591b594f01ae53BFf6Fb44C5dA0a16a62c2f3f6c";
  private tokenAddress = "0x3200B3E272007a8685B0C66c84eb4c03e7E29ed1";
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

    this.betContractAddress = await this.betFactoryContract.newBet(1, 2, this.tokenAddress);
    console.log(this.betContractAddress);

  }

  // async createNewBet() {
  //   this.betContractAddress = await this.betFactoryContract.newBet();
  //   console.log(this.betContractAddress);
  // }

}
