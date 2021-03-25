import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Home.module.css'
import Arrows from './Arrows'

function Card({ imgsrc, name, job, description }) {
  return (
    <div className={styles.card}>
      <img src={imgsrc} alt={name} className={styles.profil}/>
      <div className={styles.name}>{name}</div>
      <div className={styles.job}>{job}</div>
      <div className={styles.description}>{description}</div>
      <Arrows />
      <button className={styles.random}>Aléatoire</button>
    </div>
  );
}

Card.propTypes = {
  imgsrc: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  description: PropTypes.string
}

export default Card;