import { createContext } from "react"

//Vamos a usar el Hook "useContext para tener la response disponible en toda la aplicación"

const initialState = {
  url: "http://localhost:5000",
  carrito: {
    pedidoCompleto: [
      {
        producto: {
          brand: "",
          category: "",
          countInStock: 0,
          description: "",
          id: "",
          image: "",
          name: "",
          numReviews: 0,
          price: 0,
          rating: 0
        },
        cantidad: 0
      }
    ]
  }
}

//obtenemos los productos a través de nuestro custom hook
export const Context = createContext(initialState)
