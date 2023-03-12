import { IProduct } from "./IProduct";

export interface IPedido{
    producto: IProduct;
    cantidad: number;
}

export interface ICarrito{
    pedidoCompleto: IPedido[];
}