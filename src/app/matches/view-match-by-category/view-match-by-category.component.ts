import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from '../matches.service';
import { Category } from 'src/app/site-layout/category';
import { Match } from '../match';

@Component({
  selector: 'app-view-match-by-category',
  templateUrl: './view-match-by-category.component.html',
  styleUrls: ['./view-match-by-category.component.css']
})
export class ViewMatchByCategoryComponent implements OnInit {

  searchCategory:Category[];
  matchList:Match[];

  constructor( private activatedRoute: ActivatedRoute, private matchesService: MatchesService) { 
    this.activatedRoute.queryParams.subscribe( data => {
      this.searchCategory = data['id'];

      this.matchesService.searchCategoryMatch(this.searchCategory).subscribe(categoryData => {
        this.matchList = categoryData;
      })
    })
  }

  ngOnInit(): void {
  }

}
