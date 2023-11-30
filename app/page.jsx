'use client'
import styles from './page.module.css';
import SideHeader from './components/header/Header';

const Home = () => {
  return (
    <main id={styles.main}>
      <SideHeader />
      <div className={styles.main2}>
        <div className={styles.divTitle}>
        <h1 className={styles.titlePage}>FNAF</h1>
        </div>
      </div>
    </main>
  )
}

export default Home;