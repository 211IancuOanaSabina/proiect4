import { Component, OnInit } from '@angular/core';
import { Web3ModalService } from '@mindsorg/web3modal-angular';
import { ListBetsComponent } from 'src/app/oders/list-bets/list-bets.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(public web3ModalService: Web3ModalService ) { }

  

  ngOnInit(): void {
    this.login();

  }

  async login(){
    const provider = await this.web3ModalService.open();
  }


}
