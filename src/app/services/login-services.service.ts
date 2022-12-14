import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserDetails } from '../common/user-details';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = "http://localhost:8080/api";

  doLogin(credentials: any): Observable<any> {
    const dataUrl = `${this.baseUrl}/user/login`;
    console.log('Api call generate for spring boot.. wait for response...!');
    return this.httpClient.post<any>(dataUrl,credentials);
  }

  createAnAccount(credentials: any) {
    const dataUrl = `${this.baseUrl}/user/add`;
    console.log("Api call generate for spring boot.. wait for response...!");
    return this.httpClient.post<any>(dataUrl,credentials);
  }

}
