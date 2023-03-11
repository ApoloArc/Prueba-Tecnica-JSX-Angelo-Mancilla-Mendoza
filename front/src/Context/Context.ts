import { createContext } from "react";
import { useObtenerProductos } from "../Hooks/useProducs";
import { IDataComplete } from "../Interfaces/IProduct";

//Vamos a usar el Hook "useContext para tener la response disponible en toda la aplicación"

//obtenemos los productos a través de nuestro custom hook
export const Context = createContext<IDataComplete>({url: "http://localhost:5000" });



