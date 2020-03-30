import { Product } from "../product/product.model";
import { User } from "../auth/user.model";
import { Donor } from "../donor/donor.model";

import { Inventory } from "./inventory.model";

export class InventoryDTO {

        id: number;
        cant: number;
        fecha_reg: string;
        fecha_ven: string;
        valor_usd: number;
        contratador: string;
        fk_prod: Product;
        fk_don: Donor;
        fk_user: User;

        constructor(json : any,){
                this.id = json.id;
                this.cant = json.cant;
                this.fecha_reg = json.fecha_reg;
                this.fecha_ven = json.fecha_ven;
                this.valor_usd = json.valor_usd;
                this.contratador = json.contratador;
                this.fk_prod = json.fk_prod;
                this.fk_don = json.fk_don;
                this.fk_user = json.fk_user;
        }

        public toInvEntry() {
                const inv: Inventory = new Inventory();
                inv.id = this.id;
                inv.cant = this.cant;
                inv.fecha_ven = this.fecha_ven
                inv.valor_usd = this.valor_usd;
                inv.contratador = this.contratador;
                inv.fk_prod = this.fk_prod;
                inv.fk_don = this.fk_don;
                inv.fk_user = this.fk_user;
                return inv;
        }

        public toInvEgress() {
                const inv: Inventory = new Inventory();
                inv.id = this.id;
                inv.cant = this.cant;
                inv.fk_prod = this.fk_prod;
                inv.fk_user = this.fk_user;
                return inv;
        }

}