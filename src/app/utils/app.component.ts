import {Component, OnInit} from '@angular/core';
import {FixtureApiService} from "../http/fixutre-api.service";
//import {NgxsOnInit} from "@ngxs/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proiect';


  constructor(private fixtureApiService: FixtureApiService) {
  }

  ngOnInit(): void {
    this.fixtureApiService.getFixtures().subscribe(response=>{
      console.log(response);
    })
  }
}
