import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
// para el ruteo
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // Englobamos el componente para proveer la data
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
