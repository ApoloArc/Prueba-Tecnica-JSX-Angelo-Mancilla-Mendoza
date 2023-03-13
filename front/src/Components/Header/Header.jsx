import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

// estilos
import style from "./style/style.module.css"

// imagenes
import logo from "../../image/logo.png"
import menuIcon from "../../image/menu.png"
import carritoCompras from "../../image/carritoCompras.png"
import { Context } from "../../Context/Context"
function Header() {
  const [onView, setOnView] = useState(false)

  // vamos a saber cuántos items hay en el carrito

  const store = useContext(Context)
  const [carritoNumero, setCarritoNumero] = useState(0)

  useEffect(() => {
    if (store.carrito.pedidoCompleto[0].cantidad !== 0) {
      setCarritoNumero(store.carrito.pedidoCompleto.length)
    } else {
      setCarritoNumero(0)
    }
  }, [store.carrito])

  return (
    <div className={style.header__containerAll}>
      <div className={style.header__container__flexDiv}>
        <div className={style.header__logo__container}>
          <Link to="/">
            <img
              className={style.logo__container__img}
              src={logo}
              alt="logo-img"
            />
          </Link>
        </div>
        <div className={style.header__listContainer}>
          {/* carrito de compras*/}
          <div className={style.header__mobile__carritoCompras}>
            <Link to="/cart">
              <div className={style.header__listContainer__carritoContainer}>
                <img src={carritoCompras} alt="img-cart" />
                <p>Carrito {`(${carritoNumero})`}</p>
              </div>
            </Link>
          </div>
          <ul className={style.header__listContainer__ul}>
            <Link to="/products">
              <li className={style.header__listContainer__ul__li}>Products</li>
            </Link>
            <Link to="/products">
              <li className={style.header__listContainer__ul__li}>
                New Arrivals
              </li>
            </Link>
            <li className={style.header__listContainer__ul__li}>About us</li>
            <li className={style.header__listContainer__ul__li}>Contact</li>
          </ul>
        </div>

        <div className={style.header__mobile}>
          {/* carrito de compras*/}
          <div className={style.header__mobile__carritoCompras}>
            <Link to="/cart">
              <img src={carritoCompras} alt="img-cart" />
              <p>Carrito {`(${carritoNumero})`}</p>
            </Link>
          </div>
          <div className={style.header__mobile__imageContainer}>
            {onView ? (
              <p
                onClick={() => setOnView(false)}
                className={style.header__mobile__xIcon}
              >
                X
              </p>
            ) : (
              <img
                onClick={() => setOnView(true)}
                className={`${style.header__mobile__menuHamburguer} ${onView &&
                  style.header__mobile__menuHamburguer__view}`}
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
              <Link to="/products">
                <li className={style.header__listContainer__ul__li__mobile}>
                  Products {">"}
                </li>
              </Link>
              <Link to="/products">
                <li className={style.header__listContainer__ul__li__mobile}>
                  New Arrivals {">"}
                </li>
              </Link>
              <li className={style.header__listContainer__ul__li__mobile}>
                About us {">"}
              </li>
              <li className={style.header__listContainer__ul__li__mobile}>
                Contact {">"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
