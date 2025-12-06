// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../enviroments/enviroment';

// @Injectable({ providedIn: 'root' })
// export class ApiService {
//   private apiUrl = environment.apiUrl;

//   constructor(private http: HttpClient) {}

//   getTestData() {
//     return this.http.get(`${this.apiUrl}/test`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMessage(): Observable<any> {
    // return this.http.get(`${environment.apiUrl}`);
     return this.http.get(`${environment.apiUrl}/test`);
  }
}

