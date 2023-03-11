import React, { useState } from "react";

// estilos
import style from "./style/style.module.css";

// imagenes
import logo from "../../image/logo.png";
import menuIcon from "../../image/menu.png";
import xIcon from "../../image/x.png";

function Header() {
  const [onView, setOnView] = useState<boolean>(false);

  return (
    <div className={style.header__containerAll}>
      <div className={style.header__container__flexDiv}>
        <div className={style.header__logo__container}>
          <img className={style.logo__container__img} src={logo} alt="logo-img" />
        </div>
        <div className={style.header__listContainer}>
          <ul className={style.header__listContainer__ul}>
            <li className={style.header__listContainer__ul__li}>Products</li>
            <li className={style.header__listContainer__ul__li}>New Arrivals</li>
            <li className={style.header__listContainer__ul__li}>About us</li>
            <li className={style.header__listContainer__ul__li}>Contact</li>
          </ul>
        </div>
        <div className={style.header__mobile}>
          <div className={style.header__mobile__imageContainer}>
            {onView ? (
              <p onClick={() => setOnView(false)} className={style.header__mobile__xIcon}>
                X
              </p>
            ) : (
              <img
                onClick={() => setOnView(true)}
                className={`${style.header__mobile__menuHamburguer} ${onView && style.header__mobile__menuHamburguer__view}`}
                src={menuIcon}
                alt="menu-hamburguer"
              />
            )}
          </div>
          <div
            className={`${style.header__mobile__listContainer}  
                      ${onView && style.header__toogle__view}`}
          >
            <ul className={style.header__listContainer__ul__mobile}>
              <li className={style.header__listContainer__ul__li__mobile}>Products {">"}</li>
              <li className={style.header__listContainer__ul__li__mobile}>New Arrivals {">"}</li>
              <li className={style.header__listContainer__ul__li__mobile}>About us {">"}</li>
              <li className={style.header__listContainer__ul__li__mobile}>Contact {">"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
