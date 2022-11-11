import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem('userDetailsFromDb');
    localStorage.removeItem('totalExpense');
    localStorage.removeItem('isLogin');
    localStorage.removeItem('isJoin');
    localStorage.removeItem('userRoomId')
    window.location.href="/login";
  }



}
