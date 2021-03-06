import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextroom</title>
        <meta name="description" content="Nextroom - chatroom app using next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar isSignedIn={false} />
      <Header />

      <main className={styles.main}>
        <Link href="/chat">
          <a>Hello</a>
         </Link>
      </main>

      <Footer />
    </div>
  )
}
