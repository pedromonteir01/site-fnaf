'use client'
import SideHeader from '../header/Header';
import styles from './nameEachPizzeria.module.css';
import Footer from '../footer/Footer';
import HeaderMobile from '../headerMobile/HeaderMobile';

const NamePizzeria = ({ id, name, img, franchise, animatronics, description }) => {

    return (
        <div className={styles.containerPai}>
            <HeaderMobile />
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader />
                </div>
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        <h1 className={styles.titlePage}>{name}</h1>
                    </div>
                    <div className={styles.subDiv2}>
                        <div key={id} className={styles.subDivPizzeria}>
                            <img src={img} alt={name} width={600} height={300} />
                            <div className={styles.infosPizzeria}>
                                <p>{franchise}</p>
                                <p>{animatronics}</p>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default NamePizzeria;