import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../Context/Context";
import { useDataSeteada } from "../../../../Hooks/useDataSeteada";
import { IDataComplete, IProduct } from "../../../../Interfaces/IProduct";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

// estilos

import style from "./style/style.module.css";
import CustomButton from "../../../Custom/CustomButton";

function SectionSecondContainer() {
  const data = useDataSeteada();
  const store = useContext(Context);

  return (
    // grid con las imágenes
    <div className="container" style={{ marginBottom: "7rem" }}>
      <div className={style.gridImages__container}>
        {data?.productos &&
          data?.productos.map((producto: IProduct) => (
            <div key={producto.id} className={style.gridImages__imagecontainer}>
              <Link to={`/${producto.name}`}>
                <img className={style.gridImages__imagecontainer__image} src={data.url + producto.image} alt={`img${producto.name}`} />
                <div className={style.gridImages__imagecontainer__div}>
                  <p className={style.gridImages__p}>{producto.name}</p>
                  <p className={style.gridImages__pb}>${producto.price}</p>
                </div>
              </Link>
              <CustomButton producto={producto} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SectionSecondContainer;
