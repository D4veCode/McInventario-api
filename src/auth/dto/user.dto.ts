export class UserDTO {

    id:number

    correo: string

    createdAt: string

    constructor(data:any){
        this.id = data.id;
        this.correo = data.correo;
        this.createdAt = data.createdAt;
    }
}