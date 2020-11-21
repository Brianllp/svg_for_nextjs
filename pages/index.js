import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Vercel from '../public/vercel.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Vercel />
    </div>
  )
}
