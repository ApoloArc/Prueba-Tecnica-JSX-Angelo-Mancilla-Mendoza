import React from "react"
import { useDataSeteada } from "../../../../Hooks/useDataSeteada"
import { Link } from "react-router-dom"

// estilos
import styles from "./style/style.module.css"

function SectionNewArrivals() {
  const data = useDataSeteada()

  const urls = []

  // conseguimos las urls
  data?.productos?.forEach(producto => {
    urls.push({ url: data.url + producto.image })
  })

  return (
    <div className="container" style={{ marginBottom: "7rem" }}>
      <div className={styles.newArrivals__texts__container}>
        <p className="t-Font-Title">New Arrivals</p>
        <p className={styles.newArrivals__texts__p2}>
          Adquiere los mejores productos del mercado al mejor precio. Siempre a
          la moda para poder brindarte lo mejor de lo mejor.
        </p>
      </div>

      {/* grid */}
      <div className={styles.newArrivals__gridContainer}>
        <div className={styles.newArrivals__gridContainer__child1}>
          <p className={styles.newArrivals__gridContainer__child1p}>
            New Arrivals
          </p>
        </div>
        <div
          className={`${styles.newArrivals__gridContainer__child} ${styles.gridStyle1}`}
        >
          <Link to={`/${data?.productos?.length && data.productos[5].name}`}>
            <img
              className={styles.gridChildImg}
              src={urls.length ? urls[5].url : ""}
              alt="imgGrid"
            />
            {data?.productos?.length && <p>{data.productos[5].name}</p>}
          </Link>
        </div>
        <div
          className={`${styles.newArrivals__gridContainer__child} ${styles.gridStyle}`}
        >
          <Link to={`/${data?.productos?.length && data.productos[4].name}`}>
            <img
              className={styles.gridChildImg}
              src={urls.length ? urls[4].url : ""}
              alt="imgGrid"
            />
            {data?.productos?.length && <p>{data.productos[4].name}</p>}
          </Link>
        </div>
        <div
          className={`${styles.newArrivals__gridContainer__child} ${styles.gridStyle}`}
        >
          <Link to={`/${data?.productos?.length && data.productos[3].name}`}>
            <img
              className={styles.gridChildImg}
              src={urls.length ? urls[3].url : ""}
              alt="imgGrid"
            />
            {data?.productos?.length && <p>{data.productos[3].name}</p>}
          </Link>
        </div>
        <div
          className={`${styles.newArrivals__gridContainer__child} ${styles.gridStyle1}`}
        >
          <Link to={`/${data?.productos?.length && data.productos[2].name}`}>
            <img
              className={styles.gridChildImg}
              src={urls.length ? urls[2].url : ""}
              alt="imgGrid"
            />
            {data?.productos?.length && <p>{data.productos[2].name}</p>}
          </Link>
        </div>
        <div
          className={`${styles.newArrivals__gridContainer__child} ${styles.gridStyle}`}
        >
          <Link to={`/${data?.productos?.length && data.productos[1].name}`}>
            <img
              className={styles.gridChildImg}
              src={urls.length ? urls[1].url : ""}
              alt="imgGrid"
            />
            {data?.productos?.length && <p>{data.productos[1].name}</p>}
          </Link>
        </div>
        <div
          className={`${styles.newArrivals__gridContainer__child} ${styles.gridStyle}`}
        >
          <Link to={`/${data?.productos?.length && data.productos[0].name}`}>
            <img
              className={styles.gridChildImg}
              src={urls.length ? urls[0].url : ""}
              alt="imgGrid"
            />
            {data?.productos?.length && <p>{data.productos[0].name}</p>}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SectionNewArrivals
