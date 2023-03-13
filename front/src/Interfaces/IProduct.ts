import { ICarrito } from "./ICarrito";

export interface IProduct {
  id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}


export interface IDataComplete{
  productos?: IProduct[];
  url: string;
  carrito: ICarrito;
  setCarrito?: React.Dispatch<React.SetStateAction<ICarrito>> | undefined;
}

