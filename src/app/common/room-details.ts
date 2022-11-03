export class RoomDetails {

    private _roomId!: number;
    public get roomId(): number {
        return this._roomId;
    }
    public set roomId(value: number) {
        this._roomId = value;
    }
    private _roomName!: string;
    public get roomName(): string {
        return this._roomName;
    }
    public set roomName(value: string) {
        this._roomName = value;
    }
    private _creationDate!: string;
    public get creationDate(): string {
        return this._creationDate;
    }
    public set creationDate(value: string) {
        this._creationDate = value;
    }
    
    private _purpose!: string;
    public get purpose(): string {
        return this._purpose;
    }
    public set purpose(value: string) {
        this._purpose = value;
    }
    private _createdBy!: number;
    public get createdBy(): number {
        return this._createdBy;
    }
    public set createdBy(value: number) {
        this._createdBy = value;
    }
    
    private _roomPlainPassword!: string;
    public get roomPlainPassword(): string {
        return this._roomPlainPassword;
    }
    public set roomPlainPassword(value: string) {
        this._roomPlainPassword = value;
    }
    private _groupType!: string;
    public get groupType(): string {
        return this._groupType;
    }
    public set groupType(value: string) {
        this._groupType = value;
    }

}
