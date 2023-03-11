import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../Context/Context";
import { useDataSeteada } from "../../../../Hooks/useDataSeteada";
import { IDataComplete, IProduct } from "../../../../Interfaces/IProduct";

// estilos

import style from "./style/style.module.css";

function SectionSecondContainer() {
  const data = useDataSeteada();

  console.log(data);

  return (
    // grid con las imágenes
    <div className="container" style={{marginBottom: "7rem"}}>
      <div className={style.gridImages__container}>
        {data?.productos &&
          data?.productos.map((producto: IProduct) => (
            <div key={producto.id} className={style.gridImages__imagecontainer}>
              <img className={style.gridImages__imagecontainer__image} src={data.url + producto.image} alt={`img${producto.name}`} />
              <p className={style.gridImages__p}>{producto.name}</p>
              <button className="button">Add item to cart</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SectionSecondContainer;
