import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import { IPedido } from "../../Interfaces/ICarrito";
import { IDataComplete, IProduct } from "../../Interfaces/IProduct";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// estilos

import style from "./style/style.module.css";

// imagenes

import xIcon from "../../image/x.png";

function Cart() {
  const store = useContext(Context);
  // saber si el carrito está vacio
  // store.carrito.pedidoCompleto[0].cantidad !== 0

  const [totalPrice, setTotalPrice] = useState(0);

  function calcularTotal() {
    let result = 0;
    store.carrito.pedidoCompleto.forEach((pedido) => {
      result = Number((pedido.producto.price * pedido.cantidad + result).toFixed(2));
    });
    setTotalPrice(result);
  }

  function vaciarCarrito() {
    store.setCarrito!({
      pedidoCompleto: [
        {
          producto: {
            brand: "",
            category: "",
            countInStock: 0,
            description: "",
            id: "",
            image: "",
            name: "",
            numReviews: 0,
            price: 0,
            rating: 0,
          },
          cantidad: 0,
        },
      ],
    });
  }

  function eliminarProducto(paraEliminar: IPedido) {
    if (store.carrito.pedidoCompleto.length === 1) {
      store.setCarrito!({
        pedidoCompleto: [
          {
            producto: {
              brand: "",
              category: "",
              countInStock: 0,
              description: "",
              id: "",
              image: "",
              name: "",
              numReviews: 0,
              price: 0,
              rating: 0,
            },
            cantidad: 0,
          },
        ],
      });
    } else {
      const nuevaStore = store.carrito.pedidoCompleto.filter((producto) => producto.producto.name !== paraEliminar.producto.name);
      store.setCarrito!({
        pedidoCompleto: nuevaStore,
      });
    }
  }

  useEffect(() => {
    calcularTotal();
    localStorage.setItem("carrito", JSON.stringify(store.carrito));
  }, [store.carrito.pedidoCompleto]);

  return (
    <>
      <Header />
      <div className="container">
        <div className={style.cart__containerAllDivs}>
          <div className={style.cart__texts__container}>
            <p className="t-Font-Title">Cart</p>
            <p className={style.cart__texts__p}>Products to shop</p>
          </div>

          <div className={style.cart__table__container}>
            <p className={style.cart__table__p}>Product</p>
            <div className={style.cart__table__products}>
              {
                // saber si hay productos en el carrito
                store.carrito?.pedidoCompleto[0].cantidad !== 0 ? (
                  <>
                    {store.carrito.pedidoCompleto.map((producto: IPedido) => (
                      <div className={style.cart__containerAll}>
                        <div className={style.cart__containerImgAndText}>
                          {/* eliminar */}
                          <img
                            onClick={() => eliminarProducto(producto)}
                            className={style.cart__containerImgAndTextIcon}
                            src={xIcon}
                            alt="x-icon"
                          />

                          {/* img producto */}

                          <img className={style.cart__imgProduct} src={store.url + producto.producto.image} alt="img-store" />

                          <p>{producto.producto.name}</p>
                        </div>
                        <div className={style.cart__divPriceAndQuantity}>
                          <p>${producto.producto.price}</p>
                          <div>
                            <b style={{ marginRight: "1rem" }}>Cantidad:</b>
                            <input className={style.cart__inputNumber} type="number" value={producto.cantidad} />
                          </div>
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
            <p className={style.cart__pb} onClick={() => vaciarCarrito()}>
              Clear Cart
            </p>
          </div>

          <div>
            <p className="t-Font-Title">Total</p>
            <p>${totalPrice}</p>
            <button className="button">Proceed to checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
