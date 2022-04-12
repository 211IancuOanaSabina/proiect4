import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import { Match } from './match';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private httpClient: HttpClient) {
    
   }

   createMatch(matchBody:any):Observable<Match>{
    const baseUrl = "http://localhost:3000/matches";
    return this.httpClient.post<Match>(baseUrl, matchBody);
    }

    updateMatch(matchId:any, matchBody:any):Observable<Match>{
      const baseUrl = "http://localhost:3000/matches/" + matchId;
      return this.httpClient.put<Match>(baseUrl, matchBody);
    }

    viewMatch():Observable<Match[]>{
      const baseUrl = "http://localhost:3000/matches/" ;
      return this.httpClient.get<Match[]>(baseUrl);
    }

    deleteMatch(matchId:any):Observable<Match>{
      const baseUrl = "http://localhost:3000/matches/" + matchId;
      return this.httpClient.delete<Match>(baseUrl);
    }

    searchCategoryMatch(categoryId:any):Observable<Match[]>{
      const baseUrl = "http://localhost:3000/matches/category = " + categoryId;
      return this.httpClient.get<Match[]>(baseUrl);
    }

    searchDateMatch(dateParam:any):Observable<Match>{
      const baseUrl = "http://localhost:3000/matches/date = " + dateParam;
      return this.httpClient.get<Match>(baseUrl);
    }

    getCategory(){
      const categoryUrl = "http://localhost:3000/categories";
      return this.httpClient.get<Category[]>(categoryUrl)
    }
}


