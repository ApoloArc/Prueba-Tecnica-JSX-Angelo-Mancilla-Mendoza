import axios from "axios"
import { useEffect, useState } from "react"

export function useObtenerProductos() {
  const url = "http://localhost:5000/api/products"
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      axios.get(url).then(response => {
        setData(response.data)
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  return data
}
