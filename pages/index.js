import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Vercel from '../public/vercel.svg'
import FoodLink from '../components/food_link';
import foods_data from '../database/foods';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Vercel />

      <ul>
        {foods_data.map((food) => {
          return (
            <li>
              <FoodLink food={food} />
            </li>
          );
        })}
      </ul>
    </div>
  )
}
