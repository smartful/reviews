import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { employees } from '../data/employees'
import Card from '../components/Card'

export default function Home() {
  const [employeeIndex, setEmployeeIndex] = useState(0)
  const [employee, setEmployee] = useState(employees[0])

  const incrementIndex = () => {
    let newIndex = employeeIndex + 1;
    if (newIndex < employees.length) {
      setEmployeeIndex(newIndex)
    } else {
      setEmployeeIndex(0)
    }
  }

  const decrementIndex = () => {
    let newIndex = employeeIndex - 1;
    if (newIndex >= 0) {
      setEmployeeIndex(newIndex)
    } else {
      setEmployeeIndex(employees.length - 1)
    }
  }

  const randomIndex = () => {
    const newIndex = Math.floor(Math.random() * employees.length);
    setEmployeeIndex(newIndex)
  }

  useEffect(() => {
    setEmployee(employees[employeeIndex])
  }, [employeeIndex])

  return (
    <div className={styles.container}>
      <Head>
        <title>Reviews</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Reviews</h1>
      <div className={styles.underline} />

      {employee &&
        <Card
          key={employee.id}
          imgsrc={employee.imgsrc}
          name={employee.name}
          job={employee.job}
          description={employee.description}
          incrementIndex={incrementIndex}
          decrementIndex={decrementIndex}
          randomIndex={randomIndex}
        />
      }
    </div>
  )
}
