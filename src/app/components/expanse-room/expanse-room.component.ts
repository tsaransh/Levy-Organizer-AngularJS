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

  ngOnInit(): void {
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
    this.isJoin = 3;
  }

}
