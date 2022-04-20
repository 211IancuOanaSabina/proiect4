import {Injectable} from '@angular/core';
import {Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Web3ModalService} from "@mindsorg/web3modal-angular";
import {Web3Provider} from "@ethersproject/providers";
import {CurrentBetActions} from "../store/currentBet/current-bet-actions";
import BetFactory from '../contracts/betfactory.sol/BetFactory.json';
import {Contract, ContractFactory} from "@ethersproject/contracts";


@Injectable({
  providedIn: 'root'
})
export class BetCoinService {
  private betFactoryAddress = "0x82B769500E34362a76DF81150e12C746093D954F";
  public web3provider: Web3Provider = null;
  public userAddress: string;
  public betFactoryContract;

  constructor(public web3ModalService: Web3ModalService,
              public store: Store) {
  }

  async login() {
    const provider = await this.web3ModalService.open() as any;

    this.web3provider = new Web3Provider(provider)
    let accounts = await this.web3provider.listAccounts();
    this.userAddress = accounts[0];
    this.store.dispatch(new CurrentBetActions.AddUserAddress(this.userAddress))
    this.betFactoryContract = new Contract(this.betFactoryAddress, BetFactory.abi);

  }

}
