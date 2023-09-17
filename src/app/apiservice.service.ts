import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {
  apiurl = "https://localhost:7184/product";
  http: any;
  url: any;
    constructor(private httpClient:HttpClient) { }
  postProduct()
  {
    return this.httpClient.post(this.apiurl, JSON.stringify);
  }
}
