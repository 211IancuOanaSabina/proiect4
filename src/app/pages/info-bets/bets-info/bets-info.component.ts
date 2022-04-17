import { Component, OnInit } from '@angular/core';
import { ListBetsComponent } from 'src/app/oders/list-bets/list-bets.component';
import { Bets } from '../bets';

@Component({
  selector: 'app-bets-info',
  templateUrl: './bets-info.component.html',
  styleUrls: ['./bets-info.component.css']
})
export class BetsInfoComponent implements OnInit {

  matchList : Bets[];

  constructor() { }

  ngOnInit(): void {
  }

}
