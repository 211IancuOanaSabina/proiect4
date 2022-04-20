import {Component, OnInit} from '@angular/core';
import {Web3ModalService} from '@mindsorg/web3modal-angular';
import {Web3Provider} from "@ethersproject/providers";
import {Store} from "@ngxs/store";
import {CurrentBetActions} from "../../store/currentBet/current-bet-actions";
import {BetCoinService} from "../../services/bet-coin.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public betCoinService: BetCoinService,
              public store: Store) {
  }

  ngOnInit(): void {
  }

  async login() {

    return await this.betCoinService.login();
  }

}
