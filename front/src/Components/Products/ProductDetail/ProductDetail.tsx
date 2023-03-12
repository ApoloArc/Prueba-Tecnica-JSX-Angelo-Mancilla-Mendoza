import React from "react";
import { IProduct } from "../../../Interfaces/IProduct";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import {Link} from "react-router-dom"

// estilos
import style from "./style/style.module.css";

// imagenes
import arrowBack from "../../../image/izquierda.png"

interface data {
  url: string;
  producto: IProduct;
}

function ProductDetail(props: data) {
  console.log(props.producto);

  return (
    <>
      <Header />
      <div className="container">
        <Link to="/products">
            <img style={{height: "50px", marginBottom: "2rem"}} src={arrowBack}  alt="img-arrow-back"/>
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
              <p className={style.pDetail__textsDetails__p}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quo nobis velit, illum consequuntur natus ipsa eius! Sequi
                commodi hic.
              </p>
              <p className={style.pDetail__textsDetails__pb}>${props.producto.price}</p>
              <p className={style.pDetail__textsDetails__pb}>
                Stock: <span>{props.producto.countInStock}</span>
              </p>
              <p className={style.pDetail__textsDetails__pb}>Cantidad: </p>
              <button className="button">Add item to cart</button>
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
