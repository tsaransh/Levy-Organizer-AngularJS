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
    console.log('Api call generated for spring boot.. wait for response...!');
    return this.httpClient.post<any>(loginUrl,credentials, httpOptions);
  }

  // create room
  Register(credentialsForRegister: any) {
    const registerUrl = `${this.baseUrl}/room/create`;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8'}) };
    console.log("Api call generated for spring boot.. wait for response...!");
    return this.httpClient.post<any>(registerUrl,JSON.stringify(credentialsForRegister),httpOptions);
  }

  user: any;
  room: any;
  joinRoom() {
    const dataUrl = `${this.baseUrl}/user/expense-room/join`;
    let uID: any = localStorage.getItem('userDetailsFromDb');
    this.user = JSON.parse(uID);
    let rId: any = localStorage.getItem('roomDetails');
    this.room = JSON.parse(rId);
    
    const body = {
      userAccountID: this.user.id,
      userRoomId: this.room.id
    }
    console.log(body)
    return this.httpClient.post<any>(dataUrl,body);
  }

}
