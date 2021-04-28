import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chatroom App</title>
        <meta name="description" content="Chatroom App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header />

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  )
}
