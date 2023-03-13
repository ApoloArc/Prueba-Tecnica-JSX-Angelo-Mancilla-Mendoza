import React from "react";
import { useDataSeteada } from "../../Hooks/useDataSeteada";
import { IProduct } from "../../Interfaces/IProduct";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

// estilos
import style from "./style/style.module.css";
import CustomButton from "../Custom/CustomButton";

interface url {
  url: string;
}

function Products() {
  const data = useDataSeteada();
  const data2 = data?.productos && [...data?.productos];
  const data3 = data?.productos && [...data?.productos];
  const urls: url[] = [];

  // conseguimos las urls
  data?.productos?.forEach((producto: IProduct) => {
    urls.push({ url: data.url + producto.image });
  });

  return (
    <>
      <Header />
      <div className="container">
        <div className={style.products__textsContainer}>
          <p className={style.products__textsContainer__p1}>Products</p>
          <p className={style.products__textsContainer__p2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ducimus minima, provident aperiam suscipit earum voluptatum
            laborum! Deserunt, facere error.
          </p>
        </div>
        <div className={style.products__gridContainer}>
          {/* voy a mostrar los productos 3 veces, pero con distintos métodos de array para que el orden se altere y veamos más productos en la pantalla */}
          {data?.productos?.length
            ? data?.productos?.map((producto: IProduct, index: number) => (
                <div key={producto.id} className={style.products__gridChild}>
                  <Link to={`/${producto.name}`}>
                    <img src={urls[index].url} alt="img" />
                    <div className={style.products__gridChild__div}>
                      <p>{producto.name}</p>
                      <p className={style.pDetail__spanReviews}> {producto.rating} stars ⭐</p>
                      <p className={style.pDetail__spanReviews}>({producto.numReviews}) reviews</p>
                    </div>
                    <p className={style.products__textsContainer__price}>Price: ${producto.price}</p>
                  </Link>
                  <CustomButton producto={producto} />
                </div>
              ))
            : ""}

          {/* -------------------- */}
          {data2
            ? data2.reverse().map((producto: IProduct, index: number) => (
                <div key={producto.id} className={style.products__gridChild}>
                  <Link to={`/${producto.name}`}>
                    <img src={data.url + producto.image} alt="img" />
                    <div className={style.products__gridChild__div}>
                      <p>{producto.name}</p>
                    </div>
                    <p className={style.products__textsContainer__price}>Price: ${producto.price}</p>
                  </Link>
                  <CustomButton producto={producto} />
                </div>
              ))
            : ""}
          {/* -------------------- */}
          {data3
            ? data3.sort().map((producto: IProduct, index: number) => (
                <div key={producto.id} className={style.products__gridChild}>
                  <Link to={`/${producto.name}`}>
                    <img src={data.url + producto.image} alt="img" />
                    <div className={style.products__gridChild__div}>
                      <p>{producto.name}</p>
                    </div>
                    <p className={style.products__textsContainer__price}>Price: ${producto.price}</p>
                  </Link>
                  <CustomButton producto={producto} />
                </div>
              ))
            : ""}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
