export class UserDetails {

    private userId!: number;
    private firstName!: string;
    private lastName!: string;
    private phoneNumber!: string;
    private username!: string;
    private userPassword!: string;
    private creationDate!: string;

    getUserFirstName() {
        return this.firstName;
    }

}
