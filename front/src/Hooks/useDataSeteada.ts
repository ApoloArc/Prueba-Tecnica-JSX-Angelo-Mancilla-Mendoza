import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { IDataComplete } from "../Interfaces/IProduct";
import { useObtenerProductos } from "./useProducs";

export function useDataSeteada() {
  const dataContext = useContext(Context);
  const [data, setData] = useState<IDataComplete>();
  const productos = useObtenerProductos();

  useEffect(() => {
    setData(dataContext);
  }, [productos]);

  return data;
}
