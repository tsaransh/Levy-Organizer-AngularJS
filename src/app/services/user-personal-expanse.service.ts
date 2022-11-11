import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalExpense } from '../common/personal-expense';

@Injectable({
  providedIn: 'root'
})
export class UserPersonalExpanseService { 

  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = 'http://localhost:8080/api';

  doExpenseStuff(userId: string) {
    const dataUrl = `${this.baseUrl}/user/view-expense?userid=${userId}`;
    return this.httpClient.get<any>(dataUrl);
  }

  submitExpense(credentials: any) {
    const dataUrl = `${this.baseUrl}/user/add-expense`;
    return this.httpClient.post<any>(dataUrl,credentials);
  }

  getStatements(id: any): Observable<PersonalExpense[]>{
    const dataUrl = `${this.baseUrl}/user/list-expense?userid=${id}`;
    return this.httpClient.get<any>(dataUrl);
  }

  deleteExp(tranId: number) {
    const dataUrl = `${this.baseUrl}/user/delete-expense?tranId=${tranId}`;
    return this.httpClient.get<any>(dataUrl);
  } 

}
