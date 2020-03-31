import { Product } from "./product.model";

export class ProductDTO {

    id: number;
    nombre: string;
    marca: string;
    gr_paq: number;
    tipo: string;
    createdAt: string;

    constructor(json : any,){
        this.id = json.id;
        this.nombre = json.nombre;
        this.marca = json.marca;
        this.gr_paq = json.gr_paq;
        this.tipo = json.tipo;
        this.createdAt = json.createdAt;this
    }
    public toProduct() {
        const prod: Product = new Product();
        prod.id = this.id;
        prod.nombre = this.nombre;
        prod.marca = this.marca;
        prod.gr_paq = this.gr_paq;
        prod.tipo = this.tipo;
        prod.createdAt = this.createdAt;
        return prod;
    }
}