'use client'
import styles from './pageModel.module.css';
import SideHeader from '../components/header/Header';

const Home = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SideHeader/> 
      </div>
      <div className={styles.body}>
         <div className={styles.subDiv1}>
          <h1 className={styles.titlePage}>SEU TITULO</h1>
         </div>
      </div>
    </div>
  )
}

export default Home;