import React, { useEffect } from "react";
import { useDataSeteada } from "../../../../Hooks/useDataSeteada";
import { IProduct } from "../../../../Interfaces/IProduct";

// estilos
import styles from "./style/style.module.css";

interface url {
  url: string;
}

function SectionNewArrivals() {
  const data = useDataSeteada();

  const urls: url[] = [];

  // conseguimos las urls
  data?.productos?.forEach((producto: IProduct) => {
    urls.push({ url: data.url + producto.image });
  });

  console.log(urls);

  return (
    <div className="container" style={{marginBottom: "7rem"}}>
      <div className={styles.newArrivals__texts__container}>
        <p className="t-Font-Title">New Arrivals</p>
        <p className={styles.newArrivals__texts__p2}>
          Adquiere los mejores productos del mercado al mejor precio. Siempre a la moda para poder brindarte lo mejor de lo mejor.
        </p>
      </div>

      {/* grid */}
      <div className={styles.newArrivals__gridContainer}>
        <div className={styles.newArrivals__gridContainer__child1}>
          <p className={styles.newArrivals__gridContainer__child1p}>New Arrivals</p>
        </div>
        <div className={`${styles.newArrivals__gridContainer__child} ${styles.gridStyle1}`}>
          <img className={styles.gridChildImg} src={urls.length ? urls[3].url : ""} alt="imgGrid" />
          {
            data?.productos?.length &&
            <p>{data.productos[0].name}</p>
          }
            
        </div>
        <div className={`${styles.newArrivals__gridContainer__child} ${styles.gridStyle}`}>
          <img className={styles.gridChildImg} src={urls.length ? urls[4].url : ""} alt="imgGrid" />
          {
            data?.productos?.length &&
            <p>{data.productos[1].name}</p>
          }
        </div>
        <div className={`${styles.newArrivals__gridContainer__child} ${styles.gridStyle}`}>
          <img className={styles.gridChildImg} src={urls.length ? urls[5].url : ""} alt="imgGrid" />
          {
            data?.productos?.length &&
            <p>{data.productos[2].name}</p>
          }
        </div>
        <div className={`${styles.newArrivals__gridContainer__child} ${styles.gridStyle1}`}>
          <img className={styles.gridChildImg} src={urls.length ? urls[0].url : ""} alt="imgGrid" />
          {
            data?.productos?.length &&
            <p>{data.productos[3].name}</p>
          }
        </div>
        <div className={`${styles.newArrivals__gridContainer__child} ${styles.gridStyle}`}>
          <img className={styles.gridChildImg} src={urls.length ? urls[1].url : ""} alt="imgGrid" />
          {
            data?.productos?.length &&
            <p>{data.productos[4].name}</p>
          }
        </div>
        <div className={`${styles.newArrivals__gridContainer__child} ${styles.gridStyle}`}>
          <img className={styles.gridChildImg} src={urls.length ? urls[2].url : ""} alt="imgGrid" />
          {
            data?.productos?.length &&
            <p>{data.productos[5].name}</p>
          }
        </div>
      </div>
    </div>
  );
}

export default SectionNewArrivals;
