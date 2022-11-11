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

  isLogin!: any;

  credentialsForSignUp = {
    firstName:'',
    lastName:'',
    username:'',
    userPlainPassword:'',
    phoneNumber:''
  }

  constructor(private loginServices: LoginServicesService) { }
  // userDetails: UserDetails = new UserDetails();
  credentials = {
    username:'',
    password:''
  }  

  ngOnInit(): void {
    if(localStorage.getItem('isLogin')==null) {
      localStorage.setItem('isLogin','0');
    }
    else if(localStorage.getItem('isLogin')=='2') {
      window.location.href="/dashboard";
    }
    else {
      this.isLogin = localStorage.getItem('isLogin');
    }
  }

  onSubmit() {
    this.loginServices.doLogin(this.credentials).subscribe({
      next: Response => {
        if(Response!=null) {
          // this.userDetails = Response as UserDetails
          localStorage.setItem('userDetailsFromDb',JSON.stringify(Response));
          localStorage.setItem('isLogin','2');
          window.location.href="/dashboard";
        }
      },
      error: err => {
        alert(`Incorrct Username and password`)
      }
  })
  }

  createAccount() {
    localStorage.setItem('isLogin','1')
    window.location.href="/login"
  }

  login() {
    localStorage.setItem('isLogin','0')
    window.location.href="/dashboard";
  }

  signUp() {
    console.log(this.credentialsForSignUp);
    this.loginServices.createAnAccount(this.credentialsForSignUp).subscribe({
      next: Response => {
        if(Response!=null) {
          // this.userDetails = Response as UserDetails
          // window.location.href="/login"
          // this.appComp.isAuth=true;
          localStorage.setItem('isLogin','0')
          window.location.href="/login";
        }
        else {
          alert("Please enter a valid data");
        }
      },
      error: err => {
        alert(`something went wrong!`)
      }
  })
  }

}
