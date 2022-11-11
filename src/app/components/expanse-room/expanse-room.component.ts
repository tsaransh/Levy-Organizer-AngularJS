import { Component, OnInit } from '@angular/core';
import { RoomDetails } from 'src/app/common/room-details';
import { UserRoomDetails } from 'src/app/common/user-room-details';
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
  isJoin!: any; // 0 mean that the user in not login.

  user:any;
  room: any;

  
  // used to store the form value
  credentials = {
    roomUsername:'',
    roomPassword:''
  }
  credentialsForRegister = {
    roomName:'',
    roomPlainPassword:'',
    roomPurpose:'',
    roomType:''
  }

  ngOnInit(): void {
    let uID: any = localStorage.getItem('userDetailsFromDb');
    this.user = JSON.parse(uID);
    if(localStorage.getItem('isJoin')==null) {
      this.isJoin = '0';
    }
    else {
      this.isJoin = localStorage.getItem('isJoin');
    }
  }

  goBack() {
    var data = localStorage.getItem(this.isJoin);
    var decrement: number = +data!;
    decrement--;
    localStorage.setItem('isJoin',String(decrement));
    window.location.href="/expanse-room"
  }

  // switch the main page to login
  changeToLogin() {
    localStorage.setItem('isJoin', '0');
    window.location.href="/expanse-room"
  }

  logout() {
    localStorage.removeItem('isJoin');
    window.location.href="/expanse-room"
  }

  // create room 
  Register() {
    this.roomService.Register(this.credentialsForRegister).subscribe({
      next: Response => {
        this.roomDetails = Response as RoomDetails;
        // localStorage.removeItem('isJoin')
        this.changeToLogin(); // low user is able to login for a new room
      },
      error: err=> {
        console.log(`${err.message}`);
      }
    })
  }

  // call login method inside the room servive 
  onSubmit() {
    let rId: any = localStorage.getItem('roomDetails');
    this.room = JSON.parse(rId);
    this.roomService.roomLogin(this.credentials).subscribe({
      next: Response => {
        // switch the page:-) 1 mean that the user is now login.
        localStorage.setItem('isJoin','1');
        localStorage.setItem('roomDetails',JSON.stringify(Response))
        this.joinRoom();
        window.location.href="/expanse-room"
      },
      error: err => {
        console.log(`${err.message}`);
      }
    })
  }
 
  joinRoom() {  
    this.roomService.joinRoom().subscribe({
      next: Response => {
        console.log(Response);
      },
      error: err => {
        console.error(err.message)
      }
    })

  }

  // method is used for getting the room details.
  RoomDetails() {
    // 3 mean that the user is login and want to see the room details.
    // this.isJoin = 2;
    localStorage.setItem('isJoin','2');
    window.location.href="/expanse-room"
  }

  createRoom() {
    // this.isJoin = 3; // 4 mean that user want to create a new Room
    localStorage.setItem('isJoin','3');
    window.location.href="/expanse-room"
  }

  getTotalRoomExp() {
    console.log("bsjsjdh");
  }

}
