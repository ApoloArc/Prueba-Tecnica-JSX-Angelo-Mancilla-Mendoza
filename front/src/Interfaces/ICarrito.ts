import { SetStateAction } from "react";
import { IProduct } from "./IProduct";

export interface IPedido{
    producto: IProduct;
    cantidad: number;
    setCantidad?: React.Dispatch<SetStateAction<number>> | undefined;
}

export interface ICarrito{
    pedidoCompleto: IPedido[];
}