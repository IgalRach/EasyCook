import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryUrl= 'http://localhost:8082/categories';
  constructor(private http: HttpClient) { }


  createCategory(categoryname: string): Observable<any> {
    return this.http.post<any>(this.categoryUrl, { categoryname: categoryname});
  }

  getCategoeies(): Observable<any> {
    return this.http.get<any>(this.categoryUrl);
  }

  deleteCookingTerm(categoryname: string): Observable<any> {
    const url = `${this.categoryUrl}/${categoryname}`;
    return this.http.delete<any>(url);
  }
}

