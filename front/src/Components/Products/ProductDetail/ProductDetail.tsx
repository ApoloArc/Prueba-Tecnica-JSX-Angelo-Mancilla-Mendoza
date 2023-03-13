import React, { useState } from "react";
import { IProduct } from "../../../Interfaces/IProduct";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";

// estilos
import style from "./style/style.module.css";

// imagenes
import arrowBack from "../../../image/izquierda.png";
import CustomButton from "../../Custom/CustomButton";
import { toast, Toaster } from "react-hot-toast";

interface data {
  url: string;
  producto: IProduct;
}

function ProductDetail(props: data) {
  const [numeroCantidad, setnumeroCantidad] = useState<number>(1);
  const [aviso, setAviso] = useState<string>("");

  function aumentarRestar(aumentar: boolean, stock: number) {
    if (aumentar) {
      if (numeroCantidad === stock) {
        return toast.error("No se pueden procesar pedidos mayores al stock");
      }
      setnumeroCantidad(numeroCantidad + 1);
    } else {
      if (numeroCantidad === 1) {
        return toast.error("El pedido mínimo es de 1 unidad");
      }
      setnumeroCantidad(numeroCantidad - 1);
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <Link to="/products">
          <img style={{ height: "50px", marginBottom: "2rem" }} src={arrowBack} alt="img-arrow-back" />
        </Link>
        <div className={style.pDetail__texts__container}>
          <p className={style.pDetail__texts__pb}>Product Details</p>
          <p className={style.pDetail__texts__p}>{props.producto.category}</p>
        </div>
        <div className={style.pDetail__containersTextsAndImage}>
          <div className={style.pDetail__imgContainer}>
            <img src={props.url + props.producto.image} alt="img-product" />
          </div>
          <div className={style.pDetail__containersTextsAndDescription}>
            <div className={style.pDetail__textsDetails__container}>
              <p className={style.pDetail__textsDetails__pb}>Rating: {props.producto.rating} stars ⭐</p>
              <p className={style.pDetail__spanReviews}>({props.producto.numReviews}) reviews</p>
              <p className={style.pDetail__textsDetails__p}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quo nobis velit, illum consequuntur natus ipsa eius! Sequi
                commodi hic.
              </p>
              <p className={style.pDetail__textsDetails__pb}>${props.producto.price}</p>
              <p className={style.pDetail__textsDetails__pb}>
                Stock: <span>{props.producto.countInStock}</span>
              </p>
              <div className={style.pDetail__description__containerCantidad}>
                <p className={style.pDetail__textsDetails__pb}>
                  Cantidad:
                  <input
                    className={style.pDetail__textsDetails__input}
                    type="number"
                    min={1}
                    max={props.producto.countInStock}
                    value={numeroCantidad}
                    // onChange={(e) => verificarData(e.target.value)}
                  />
                </p>
                <p onClick={() => aumentarRestar(true, props.producto.countInStock)} className={style.pDetailCantidad__p}>
                  ⬆
                </p>
                <p onClick={() => aumentarRestar(false, props.producto.countInStock)} className={style.pDetailCantidad__p}>
                  ⬇
                </p>
              </div>

              <CustomButton
                disabled={props.producto.countInStock > 0 ? false : true}
                producto={props.producto}
                cantidadPedido={numeroCantidad}
              />
              <Toaster />
            </div>
            <div className={style.pDetail__description__container}>
              <p className={style.pDetail__description__pb}>Description</p>
              <p className={style.pDetail__description__p}>{props.producto.description}</p>
              <p className={style.pDetail__description__pb2}>{props.producto.category}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
