import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { employees } from '../data/employees'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reviews</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Reviews</h1>
      <div className={styles.underline} />

      {employees.map((employee) => (
        <Card
          key={employee.id}
          imgsrc={employee.imgsrc}
          name={employee.name}
          job={employee.job}
          description={employee.description}
        />
      ))}
    </div>
  )
}
