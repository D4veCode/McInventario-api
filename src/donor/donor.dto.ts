import { Donor } from "./donor.model";

export class DonorDTO {

    id: number;
    nombre: string;
    tip_id: string;
    num_id: string;
    direccion: string;
    createdAt: string;

    constructor(json : any,){
        this.id = json.id;
        this.nombre = json.nombre;
        this.tip_id = json.tip_id;
        this.num_id = json.num_id;
        this.direccion = json.direccion;
        this.createdAt = json.createdAt;
    }

    public toDonor() {
        const don : Donor = new Donor();
        don.id = this.id;
        don.nombre = this.nombre;
        don.tip_id = this.tip_id;
        don.num_id = this.num_id;
        don.direccion = this.direccion;
        don.createdAt = this.createdAt;
        return don;
    }
}