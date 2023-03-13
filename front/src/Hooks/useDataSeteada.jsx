import { useContext, useEffect, useState } from "react"
import { Context } from "../Context/Context"
import { useObtenerProductos } from "./useProducs"

export function useDataSeteada() {
  const dataContext = useContext(Context)
  const [data, setData] = useState()
  const productos = useObtenerProductos()

  useEffect(() => {
    setData(dataContext)
  }, [productos])

  return data
}
