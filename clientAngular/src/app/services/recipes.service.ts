import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import{Recipe} from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipeUrl="http://localhost:8082/recipes";

  constructor(private http: HttpClient) { }

  getrecipes(): Observable<any>{
    return this.http.get(this.recipeUrl);
  }


  addRecipe(recipename: string): Observable<any>{
    return this.http.post(this.recipeUrl, {recipename:recipename});
  }

  getRecipe(id:string):Observable<any>{
    const url=`${this.recipeUrl}/${id}`;
    return this.http.get(url);
  }

  updateRecipe(recipe:Recipe):Observable<any>{
    const url=`${this.recipeUrl}/${recipe.id}`;
    return this.http.patch(url,{recipeName:recipe.recipename});
  }

  deleteRecipe(id: string): Observable<any>{
    const url=`${this.recipeUrl}/${id}`;
    return this.http.delete(url);
  }

  // updateStock(stockName: string, stockrank: string, companyrank: string): Observable<any>{
  //   return this.http.put(`http://localhost:5000/stocks/update`, {
  //     stockName,
  //     stockrank,
  //     companyrank
  //   });
  // }
  scrape(): Observable<any>{
    return this.http.get(`http://localhost:5000/stocks/scrape`);
  }
}
