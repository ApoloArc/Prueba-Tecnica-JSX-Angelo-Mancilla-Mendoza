import React from "react";

// estilos
import style from "./style/style.module.css";

// imagenes

import imgCamion from "../../../../image/camion.png";
import imgApoyo from "../../../../image/apoyo.png";
import imgDinero from "../../../../image/ahorrar-dinero.png";

function SectionServices() {
  return (
    <div className="container">
      <div className={style.services__container}>
        <div className={style.services__containerService}>
          <img className={style.services__containerService__img} src={imgCamion} alt="img-icon-service" />
          <p className={style.services__containerService__p}>Free Home Delivery</p>
        </div>
        <div className={style.services__containerService}>
          <img className={style.services__containerService__img} src={imgDinero} alt="img-icon-service" />
          <p className={style.services__containerService__p}>Money Back Guarantee</p>
        </div>
        <div className={style.services__containerService}>
          <img className={style.services__containerService__img} src={imgApoyo} alt="img-icon-service" />
          <p className={style.services__containerService__p}>Suport 24/7</p>
        </div>
      </div>
    </div>
  );
}

export default SectionServices;
