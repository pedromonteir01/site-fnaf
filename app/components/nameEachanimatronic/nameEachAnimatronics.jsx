'use client'
import styles from './nameEachAnimatronic.module.css';

const NameAnimatronic = ({ id, name, imageBody, occupation, initialLocation, description, color, status, instrument, jumpscare }) => {

  return (
    <div className={styles.containerPai}>
      <div key={id} className={styles.containerPizzeria}>
        <h1 className={styles.titlePage}>{name}</h1>
        <img src={imageBody} alt={name} width={300} height={500} />
        <div className={styles.infosAnimatronic}>
          <br />
          <video className={styles.video} controls muted autoPlay loop>
            <source src={jumpscare} type="video/mp4" />
          </video>
          <div className={styles.divInfosAnimatronic}>
            <br />
            <p><strong className={styles.titleInfos}>Ocupação </strong> {occupation}</p>
            <br />
            <p><strong className={styles.titleInfos}>Surgimento </strong> {initialLocation}</p>
            <br />
            <p><strong className={styles.titleInfos}>Cor </strong> {color}</p>
            <br />
            <p><strong className={styles.titleInfos}>Status </strong> {status}</p>
            <br />
            <p><strong className={styles.titleInfos}>Instrumento </strong> {instrument ? (instrument) : ("não tem")}</p>
            <br />
            <br />
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default NameAnimatronic