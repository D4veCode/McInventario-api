export class InventoryDTO {
        id: number;
        cant: number;
        fk_prod: number;
        fecha_reg: Date;
        fecha_ven: Date;
        valor_usd: number;
        contratador: string;
        fk_don : number;
        fk_user : number;
}