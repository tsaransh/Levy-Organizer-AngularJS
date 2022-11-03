import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomServicesService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080/api';

  roomLogin(credentials: any): Observable<any> {
    const loginUrl = `${this.baseUrl}/room/search/name`;
    // const body = JSON.stringify(credentials);
    credentials = {
      id: 0,
      roomName: credentials.roomUsername,
      roomPlainPassword: credentials.roomPassword
    }
    
    // const body = JSON.stringify(credentials)
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8'}) };
    console.log('Api call generate for spring boot.. wait for response...! for ');
    return this.httpClient.post<any>(loginUrl,credentials, httpOptions);
  }

}
