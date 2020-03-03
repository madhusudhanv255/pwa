import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getCall(apiURl, params): Observable<any> {
    return this.http
      .get(apiURl + params, httpOptions)
      .pipe(map((response: any) => {
        return response;
      }));

  }

  public postCall(url, data): Observable<any> {
    return this.http.post(url, data, httpOptions)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public postCallAutoLogin(url, body, httpOptionsAuto): Observable<any> {
    return this.http.post(url, body, httpOptionsAuto)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public updateCall(apiURl, data): Observable<any> {
    return this.http.put(apiURl, data, httpOptions);
  }
}
