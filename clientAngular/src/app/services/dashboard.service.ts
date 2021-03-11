import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private groupUrl="http://localhost:8082/groupby";
  constructor(private http: HttpClient) { }

  groupBy(): Observable<any>{
    return this.http.get(this.groupUrl);
  }

}
