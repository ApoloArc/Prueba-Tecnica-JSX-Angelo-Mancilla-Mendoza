import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// estilos

import style from "./style/style.module.css";

function Cart() {
  const store = useContext(Context);
  // saber si el carrito está vacio
  // store.carrito.pedidoCompleto[0].cantidad !== 0

  const [totalPrice, setTotalPrice] = useState(0);

  console.log(store)

  function calcularTotal() {
    store.carrito.pedidoCompleto.forEach((pedido) => {
      setTotalPrice((totalPrice + pedido.producto.price) * pedido.cantidad);
    });
  }

  useEffect(() => {
    calcularTotal();
  }, [store]);

  return (
    <>
      <Header />
      <div className="container">
        <div className={style.cart__texts__container}>
          <p className="t-Font-Title">Cart</p>
          <p className={style.cart__texts__p}>Products to shop</p>
        </div>

        <div className={style.cart__table__container}>
          <p className={style.cart__table__p}>Product</p>
          <div className={style.cart__table__products}>
            {
              // saber si hay productos en el carrito
              store.carrito.pedidoCompleto[0].cantidad !== 0 ? (
                <>
                  {store.carrito.pedidoCompleto.map((producto) => (
                    <div>
                      <div>
                        <img src={store.url + producto.producto.image} alt="img-store" />
                        <p>{producto.producto.name}</p>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div>No hay productos en el carrito</div>
              )
            }
          </div>
        </div>

        <div>
          <p className={style.cart__pb}>Clear Cart</p>
        </div>

        <div>
          <p className="t-Font-Title">Total</p>
          <p>${totalPrice}</p>
          <button className="button">Proceed to checkout</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
