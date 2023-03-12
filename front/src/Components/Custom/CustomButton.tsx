import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import { useDataSeteada } from "../../Hooks/useDataSeteada";
import { IProduct } from "../../Interfaces/IProduct";
import toast, { Toaster } from "react-hot-toast";

interface data {
  producto: IProduct;
  style?: {};
}

function CustomButton(props: data) {
  const data = useDataSeteada();
  const store = useContext(Context);

  function notify(message: string, producto: IProduct) {
    // verificamos si es el primer item que se agregará, de ser así reemplazará el item que está pord defecto (está vacío)

    if (data?.carrito.pedidoCompleto[0].cantidad === 0) {
      store.setCarrito!({
        pedidoCompleto: [{ producto, cantidad: 1 }],
      });
    }
    // si ya hay items, vamos a hacer una copia y enviar el item
    else {
      store.setCarrito!({
        pedidoCompleto: [...data?.carrito.pedidoCompleto!, { producto, cantidad: 1 }],
      });
    }
    toast.success(message);
  }


  useEffect(() => {
    
    
  
  }, [])
  

  return (
    <>
      <button style={props.style} onClick={() => notify("Product added ❤️", props.producto)} className="button">
        Add item to cart
      </button>
      <Toaster />
    </>
  );
}

export default CustomButton;
