import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../Interfaces/IProduct";

export function useObtenerProductos() {
  const url:string = "http://localhost:5000/api/products";
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    try {
      axios.get<IProduct[]>(url).then((response) => {
        setData(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return data;
}
