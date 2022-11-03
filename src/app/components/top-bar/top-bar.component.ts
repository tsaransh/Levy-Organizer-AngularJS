import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/common/user-details';
import { LoginServicesService } from 'src/app/services/login-services.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private loginServices: LoginServicesService) { }

  userFirstName: string = 'saransh';
  ngOnInit(): void {
   // this.userFirstName = this.loginServices.userDetails.getUserFirstName();
    
  }

}
