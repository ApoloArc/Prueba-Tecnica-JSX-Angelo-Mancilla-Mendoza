import React, { useContext } from "react";
import { Context } from "../../../../Context/Context";
import { Link } from "react-router-dom";
// estilos
import style from "./style/style.module.css";

function SectionFirstContainer() {
  const data = useContext(Context);

  const imagenPortada = data.productos?.length && data.url + data.productos[0].image;

  return (
    <div className="container">
      <div className={style.amazing__container}>
        <div className={style.amazing__textsContainer}>
          <div className={style.amazing__textsContainer__first}>
            <p className={style.amazing__textsContainer__first__p}>
              Amazing product! <br /> <span className="t-Font-Title">backpack</span>
            </p>
          </div>
          <div className={style.amazing__textContainer__second}>
            <p className={style.amazing__textsContainer__second__p}>
              Consigue nuestros mejores productos, los mejores del mercado en todo Latinoamérica. Contamos con distintos productos
              tecnológicos para que no tengas que buscar en otro sitio que no sea este.
            </p>
            <Link style={{ width: "max-content" }} to="/products">
              <button className={`button ${style.amazing__textsContainer__second__button}`}>Comprar ahora</button>
            </Link>
          </div>
        </div>
        <div className={style.amazing__imageContainer}>
          <img src={imagenPortada ? imagenPortada : ""} alt="portada__img" />
        </div>
      </div>
    </div>
  );
}

export default SectionFirstContainer;
