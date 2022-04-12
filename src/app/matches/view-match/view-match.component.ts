import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view-match",
  templateUrl: "./view-match.component.html",
  styleUrls: ['./view-match.component.css']
})

export class ViewMatchComponent implements OnInit {

  matchID = 0;

  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.matchID = data['id'];
    })
  }

}