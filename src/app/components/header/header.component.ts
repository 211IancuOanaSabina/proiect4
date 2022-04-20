import {Component, OnInit} from '@angular/core';
import {Web3ModalService} from '@mindsorg/web3modal-angular';
import {Web3Provider} from "@ethersproject/providers";
import {Store} from "@ngxs/store";
import {CurrentBetActions} from "../../store/currentBet/current-bet-actions";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public web3ModalService: Web3ModalService,
              public store: Store) {
  }

  ngOnInit(): void {
  }

  async login() {
    const provider = await this.web3ModalService.open() as any;

    const web3provider = new Web3Provider(provider)
    let accounts = await web3provider.listAccounts();
    let userAddress = accounts[0];
    this.store.dispatch(new CurrentBetActions.AddUserAddress(userAddress))

  }

}
