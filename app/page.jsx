'use client'
import styles from './page.module.css';
import SideHeader from './components/header/Header';
// import Footer from './components/footer/Footer';

const Home = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SideHeader/> 
      </div>
      <div className={styles.body}>
         <div className={styles.subDiv1}>
          <h1 className={styles.titlePage}>FIVE NIGHTS AT FREDDY'S</h1>
         </div>
      </div>
    </div>
  )
}

export default Home;