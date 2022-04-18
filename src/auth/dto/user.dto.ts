export class UserDTO {

    id:number

    correo: string

    createdAt: Date

    constructor(data:any){
        this.id = data.id;
        this.correo = data.correo;
        this.createdAt = data.createdAt;
    }
}