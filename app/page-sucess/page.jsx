'use client'
import styles from './sucess.module.css'
import HeaderMobile from '../components/headerMobile/HeaderMobile'
import SideHeader from '../components/header/Header'
import Footer from '../components/footer/Footer'

const pageContact = () => {
    return (
    <div className={styles.containerPai}>
        <div className={styles.headerMobile}>
            <HeaderMobile />
        </div>
        <div className={styles.container}>
            <div className={styles.header}>
                <SideHeader />
            </div>
            <div className={styles.body}>
                <div className={styles.subDiv1}>
                    <h1 className={styles.titlePage}>FORMULÁRIO ENVIADO COM SUCESSO</h1>
                </div>
                <div className={styles.subDiv2}>
                    <div className={styles.form}>
                        <img src={"/check.webp"} width={620} height={620} />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.divFooter}>
        <Footer/>
        </div>
    </div>
    )
}

export default pageContact;

