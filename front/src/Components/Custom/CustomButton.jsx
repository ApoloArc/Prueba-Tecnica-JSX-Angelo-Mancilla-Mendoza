import React, { useContext, useEffect, useState } from "react"
import { Context } from "../../Context/Context"
import { useDataSeteada } from "../../Hooks/useDataSeteada"
import toast, { Toaster } from "react-hot-toast"

function CustomButton(props) {
  const data = useDataSeteada()
  const store = useContext(Context)
  const carrito = data?.carrito

  // Avisamos que hay cambios cuando añadimos más productos al carrito
  const [change, setChange] = useState(false)

  const [carritoActualizado, setCarritoActualizado] = useState(() => {
    try {
      const item = JSON.parse(window.localStorage.getItem("carrito"))
      return item ? item : carrito
    } catch (error) {
      console.error(error)
    }
  })

  function notify(message, producto) {
    // como el carrito tiene un elemento por defecto, lo vamos a limpiar.
    if (store.carrito.pedidoCompleto[0].cantidad === 0) {
      store.carrito.pedidoCompleto.shift()
    }

    // validamos si el item existe
    const existe = store.carrito.pedidoCompleto.find(
      pedido => pedido.producto.name === producto.name
    )

    if (existe !== undefined) {
      store.carrito.pedidoCompleto.forEach((pedido, i) => {
        if (pedido.producto.name === producto.name) {
          try {
            // modificamos la cantidad
            store.carrito.pedidoCompleto[i].cantidad = props.cantidadPedido
              ? props.cantidadPedido + existe.cantidad
              : existe.cantidad + 1
            setChange(!change)
            return toast.success(message)
          } catch (error) {
            console.error(error)
          }
        }
      })
    } else {
      // agregamos el item al final del carrito
      try {
        store.setCarrito({
          pedidoCompleto: [
            ...carritoActualizado.pedidoCompleto,
            {
              producto,
              cantidad: props.cantidadPedido ? props.cantidadPedido : 1
            }
          ]
        })
        return toast.success(message)
      } catch (error) {
        console.error(error)
      }
    }
  }

  // Vamos a almacenar la data en el localStorage para que cargue la data cada que se recarga la página

  useEffect(() => {
    setCarritoActualizado(store.carrito)
    localStorage.setItem("carrito", JSON.stringify(store.carrito))
  }, [store.carrito, change])

  return (
    <>
      <button
        disabled={props.disabled}
        style={props.style}
        onClick={() => notify("Product added ❤️", props.producto)}
        className="button"
      >
        Add item to cart
      </button>
      <Toaster />
    </>
  )
}

export default CustomButton
