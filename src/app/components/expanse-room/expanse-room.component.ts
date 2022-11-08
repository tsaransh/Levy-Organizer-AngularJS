import { Component, OnInit } from '@angular/core';
import { RoomDetails } from 'src/app/common/room-details';
import { RoomServicesService } from 'src/app/services/room-services.service';

@Component({
  selector: 'app-expanse-room',
  templateUrl: './expanse-room.component.html',
  styleUrls: ['./expanse-room.component.css']
})
export class ExpanseRoomComponent implements OnInit {

  constructor(private roomService: RoomServicesService) { }

  roomDetails: RoomDetails = new RoomDetails();

  // this variable is used for switch the main content inside the component
  isJoin: number = 0; // 0 mean that the user in not login.

  // used to store the form value
  credentials = {
    roomUsername:'',
    roomPassword:''
  }
  credentialsForRegister = {
    roomName:'',
    roomPassword:'',
    roomDesc:'',
    roomType:''
  }

  ngOnInit(): void {
  }

  goBack() {
    console.log("back")
    this.isJoin--;
  }

  // switch the main page to login
  changeToLogin() {
    this.isJoin = 0;
  }

  // create room 
  Register() {
    this.roomService.Register(this.credentialsForRegister).subscribe({
      next: Response => {
        this.roomDetails = Response as RoomDetails;
        this.isJoin = 0; // low user is able to login for a new room
      },
      error: err=> {
        console.log(`${err.message}`);
      }
    })
  }

  // call login method inside the room servive 
  onSubmit() {
    this.roomService.roomLogin(this.credentials).subscribe({
      next: Response => {
        console.log(Response);
        // used to store the response
        this.roomDetails = Response as RoomDetails;
        // switch the page:-) 1 mean that the user is now login.
        this.isJoin = 1;
      },
      error: err => {
        console.log(`${err.message}`);
      }
    })
  }

  // method is used for getting the room details.
  RoomDetails() {
    // 3 mean that the user is login and want to see the room details.
    this.isJoin = 2;
  }

  createRoom() {
    this.isJoin = 3; // 4 mean that user want to create a new Room
  }

}
