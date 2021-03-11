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


  addRecipe(recipename: string,description: string,category:string,recipePic:string,propTime:string): Observable<any>{
    return this.http.post(this.recipeUrl, {recipename:recipename,description:description,category:category,recipePic:recipePic,propTime:propTime});
  }

  getRecipe(id:string):Observable<any>{
    const url=`${this.recipeUrl}/${id}`;
    return this.http.get(url);
  }

  updateRecipe(recipe:Recipe,recipename: string,description: string,category:string,recipePic:string,propTime:string):Observable<any>{
    const url=`${this.recipeUrl}/${recipe._id}`;
    return this.http.patch(url,{recipename:recipename,description:description,category:category,recipePic:recipePic,propTime:propTime});
  }

  deleteRecipe(id: string): Observable<any>{
    const url=`${this.recipeUrl}/${id}`;
    return this.http.delete(url);
  }

}
