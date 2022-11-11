export class UserRoomDetails {

    
    

    constructor(private userAccountID: number,
        private userRoomId: number) {

    }

      toString() {
        console.log("userId "+ this.userAccountID);
        console.log("roomId "+this.userRoomId);
      }  

}
