import Head from 'next/head';
import styles from '../styles/Home.module.css';
import VideoList from '../components/VideoList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jesus & Pals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VideoList />
    </div>
  )
}
