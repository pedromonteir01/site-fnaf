'use client'
import styles from './page.module.css';
import SideHeader from './components/header/Header';
// import Footer from './components/footer/Footer';

const Home = () => {

  return (
    <div id={styles.main}>
      <h1 className={styles.titlePage}>FIVE NIGHTS AT FREDDY'S</h1>
      <div className={styles.header}>
      <SideHeader />
      </div>
      <div className={styles.main2}>
        <div className={styles.main3}>
          <p>ojsdviyhbwshivbh i</p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home;