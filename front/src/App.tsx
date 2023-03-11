import React, { useEffect, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import { Context } from "./Context/Context";
import { useDataSeteada } from "./Hooks/useDataSeteada";
import { useObtenerProductos } from "./Hooks/useProducs";

// estilos que usaremos para todos los componentes, seran algunos que vamos a usar a menudo

import "./style/globalStyles.css";

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState("");

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/")
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();
  }, []);
  // -------------------------------------------------

  //obtenemos los productos a través de nuestro custom hook
  
  const productos = useObtenerProductos();
  const url = "http://localhost:5000/";

  return (
    // Englobamos el componente para proveer la data
    <Context.Provider value={{url, productos}}>
      <div style={{ textAlign: "center" }}>
        <Header />
        {/* <h1> Prueba tecnica front Ecomsur 2021</h1> */}
        <Dashboard />
        {/* Check to see if express server is running correctly */}
        <h5>{response}</h5>
      </div>
    </Context.Provider>
  );
};

export default App;
