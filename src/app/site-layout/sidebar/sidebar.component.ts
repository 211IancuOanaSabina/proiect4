import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/matches/matches.service';
import { Category } from 'src/app/site-layout/category';
import { MatchesComponent } from 'src/app/matches/matches.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})



export class SidebarComponent implements OnInit {

  categoryList:Category[];

  //categoryList: Category[] = [];
  
  //categoryList = <Category>{ };

  constructor(private matchService: MatchesService) { 
    
  }

  ngOnInit(): void {
    this.matchService.getCategory().subscribe(data=>{
      this.categoryList = data;
    })
  }
}
