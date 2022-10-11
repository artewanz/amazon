import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@src/styles/Home.module.css'
import Header from '@components/Header'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
    </div>
  )
}

export default Home
