import React from 'react'

// estilos
import style from "./style/style.module.css"

// imagenes
import logo from "../../image/logo.png"

function Footer() {
  return (
    <div className={style.footer__container}>
        <div className={`container ${style.footer__container__logoImgs}`}>
            <div className={style.header__logoContainer}>
                <img src={logo} alt="img-logo"/>
            </div>
            <div className={style.footer__sectionFooterTexts__container}>
                <div className={style.footer__sectionFooter__container}>
                    <p className={style.footer__sectionFooterTextsTitle}>Store Menu</p>
                    <p className={style.footer__sectionFooterTexts}>Best Product</p>
                    <p className={style.footer__sectionFooterTexts}>New Arrivals</p>
                    <p className={style.footer__sectionFooterTexts}>Airphones</p>

                </div>
                <div className={style.footer__sectionFooter__container}>
                    <p className={style.footer__sectionFooterTextsTitle}>Information</p>
                    <p className={style.footer__sectionFooterTexts}>About Us</p>
                    <p className={style.footer__sectionFooterTexts}>Delivery Information</p>
                    <p className={style.footer__sectionFooterTexts}>Privacy Policy</p>

                </div>
                <div className={style.footer__sectionFooter__container}>
                    <p className={style.footer__sectionFooterTextsTitle}>Contact</p>
                    <p className={style.footer__sectionFooterTexts}>Help</p>
                    <p className={style.footer__sectionFooterTexts}>Suppor</p>
                    <p className={style.footer__sectionFooterTexts}>FAQS</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer