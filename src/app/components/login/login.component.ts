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

}
