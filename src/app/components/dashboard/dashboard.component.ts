import { Component, OnInit } from '@angular/core';
import { PersonalExpense } from 'src/app/common/personal-expense';
import { UserPersonalExpanseService } from 'src/app/services/user-personal-expanse.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userPersonalExpanse: UserPersonalExpanseService) { }

  user: any;
  demandStmtement: boolean = false;
  credentials = {
    expDesc: '',
    expType: '',
    amount: '',
    userId: ''
  }

  ngOnInit(): void {
    let data: any = localStorage.getItem('userDetailsFromDb');
    this.user = JSON.parse(data);
    this.getExp();
  }

  personalExpense: PersonalExpense[] = [];

  totalExp: number = 0.00;

  onSubmit() {
    this.credentials.userId = this.user.id;
    this.userPersonalExpanse.submitExpense(this.credentials).subscribe({
      next: Response => {
        window.location.href="/dashboard";        
      },
      error: err => {
        console.log(`${err.message}`)
      }
    })
    window.location.href="/dashboard";
  }


  getExp() {
    this.userPersonalExpanse.doExpenseStuff(this.user.id).subscribe({
      next: Response => {
        if(Response!=null) {
          localStorage.setItem('totalExpense',JSON.stringify(Response))
          let data: any = localStorage.getItem('totalExpense');
          this.totalExp = JSON.parse(data);
          // window.location.href="/dashboard"
        }
        else {
          this.totalExp = 0.00;
        }
      },
      error: err => {
        console.log(`${err.message}`)
      }
    })
  }

  generateStatement() {
    this.demandStmtement = true;
    this.userPersonalExpanse.getStatements(this.user.id).subscribe({
      next: Response => {
        this.personalExpense = Response;
        // console.log(this.personalExpense);
        
      }
    })
  }

  deleteStatement(tranId: number) {
    this.userPersonalExpanse.deleteExp(tranId).subscribe({
      next: Response => {
        console.log(Response)
        this.generateStatement();
        // window.location.href="/dashboard"
      },
      error: err => {
        console.log(err)
      }
    })
  }

}



