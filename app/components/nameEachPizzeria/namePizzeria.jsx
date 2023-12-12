'use client'
import styles from './nameEachPizzeria.module.css';

const NamePizzeria = ({ id, name, img, franchise, animatronics, description }) => {

    return (
        <div className={styles.containerPai}>
            <div key={id} className={styles.containerPizzeria}>
                <h1 className={styles.titlePage}>{name}</h1>
                <img src={img} alt={name} width={600} height={300} />
                <div className={styles.infosPizzeria}>
                    <br />
                    <p><strong className={styles.titleInfos}>Franquia </strong> {franchise}</p>
                    <br />
                    <p><strong className={styles.titleInfos}>Animatronics  </strong> {animatronics}</p>
                    <br />
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default NamePizzeria;