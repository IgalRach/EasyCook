import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookingTerm } from '../models/cookingTerm';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CookingTermService {

  private cookingTermUrl= 'http://localhost:8082/cookingTerms';

  constructor(private http: HttpClient) { }


  getCookingTerms(): Observable<any> {
    return this.http.get<any>(this.cookingTermUrl);
  }

  createCookingTerm(title: string,description: string): Observable<any> {
    return this.http.post<any>(this.cookingTermUrl, { title: title, description:description});
  }

  getCookingTermsById(id: string): Observable<any> {
    const url = `${this.cookingTermUrl}/${id}`;
    return this.http.get<any>(url);
  }

  updateCookingTerm(cookingTermId:string,title:string,description:string) {
    const url = `${this.cookingTermUrl}/${cookingTermId}`;
    return this.http.patch(url, { title: title,description:description });
  }

  deleteCookingTerm(id: string): Observable<any> {
    const url = `${this.cookingTermUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  scrape(): Observable<any> {
    const url = 'http://localhost:8082/scrape';
    return this.http.get(url);
  }
}
