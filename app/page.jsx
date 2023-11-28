'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Layout from './layout';

const Home = () => {
  return (
      <Layout>
        <div className={styles.container}>
          <p>teste</p>
        </div>
      </Layout>
  )
}

export default Home;