'use client'
import styles from './page.module.css';
import SideHeader from './components/header/Header';
//import Footer from './components/footer/Footer';

const Home = () => {
  return (
    <div>
    <main id={styles.main}>
      <SideHeader />
      <div className={styles.main2}>
        <div className={styles.divTitle}>
        <h1 className={styles.titlePage}>FIVE NIGHTS AT FREDDY'S</h1>
        </div>
      </div>
    </main>
    {/* <Footer /> */}
    </div>
  )
}

export default Home;