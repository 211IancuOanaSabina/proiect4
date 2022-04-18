import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListBetsComponent } from 'src/app/oders/list-bets/list-bets.component';
import { Bets } from '../bets';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-bets-info',
  templateUrl: './bets-info.component.html',
  styleUrls: ['./bets-info.component.css']
})
export class BetsInfoComponent implements OnInit {

  createBet(){
    
  }

  betList : Bets[];

  

  constructor() { }

  ngOnInit(): void {
  }

}
