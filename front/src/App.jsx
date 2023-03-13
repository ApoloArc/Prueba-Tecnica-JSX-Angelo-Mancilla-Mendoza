import React, { useContext, useEffect, useState } from "react"
import { Context } from "./Context/Context"
import { useObtenerProductos } from "./Hooks/useProducs"

// para el ruteo
import { Routes, Route } from "react-router-dom"
import { routes } from "./Routes/routes.routes"

// estilos que usaremos para todos los componentes, seran algunos que vamos a usar a menudo

import "./style/globalStyles.css"
import ProductDetail from "./Components/Products/ProductDetail/ProductDetail"

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState("")

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/")
        .then(res => res.text())
        .then(res => setResponse(res))
    }
    getApiResponse()
  }, [])
  // -------------------------------------------------

  const dataComplete = useContext(Context)

  const [carrito, setCarrito] = useState(() => {
    try {
      const item = JSON.parse(window.localStorage.getItem("carrito"))
      return item ? item : dataComplete.carrito
    } catch (error) {
      console.error(error)
    }
  })
  //obtenemos los productos a través de nuestro custom hook

  const productos = useObtenerProductos()
  const url = "http://localhost:5000/"

  return (
    <Context.Provider value={{ url, productos, carrito, setCarrito }}>
      {/* ponemos las rutas a disposición de toda la aplicación */}

      <Routes>
        {routes.map((route, i) => {
          return <Route key={i} path={route.path} element={<route.element />} />
        })}
        {productos.map((route, i) => {
          return (
            <Route
              key={i}
              path={`/${route.name}`}
              element={
                <ProductDetail
                  producto={route}
                  url={"http://localhost:5000/"}
                />
              }
            />
          )
        })}
      </Routes>
      {/* Check to see if express server is running correctly */}
      {/* <h5>{response}</h5> */}
    </Context.Provider>
  )
}

export default App
