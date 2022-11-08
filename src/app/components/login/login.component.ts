import { Component, Injectable, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UserDetails } from 'src/app/common/user-details';
import { LoginServicesService } from 'src/app/services/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {

  isLogin: number=0;

  credentialsForSignUp = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phonenumber:''
  }

  constructor(private loginServices: LoginServicesService) { }
  // userDetails: UserDetails = new UserDetails();
  credentials = {
    username:'',
    password:''
  }

  appComp: AppComponent = new AppComponent();

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginServices.doLogin(this.credentials).subscribe({
      next: Response => {
        if(Response!=null) {
          this.loginServices.userDetails = Response as UserDetails
          window.location.href="/dashboard"
          this.appComp.isAuth=true;
        }
      },
      error: err => {
        alert(`Incorrct Username and password`)
      }
  })
  }

  createAccount() {
    this.isLogin = 1;
  }

  signUp() {
    this.loginServices.createAnAccount(this.credentials).subscribe({
      next: Response => {
        if(Response!=null) {
          this.loginServices.userDetails = Response as UserDetails
          // window.location.href="/login"
          // this.appComp.isAuth=true;
          this.isLogin = 0;
        }
      },
      error: err => {
        alert(`something went wrong!`)
      }
  })
  }

}
