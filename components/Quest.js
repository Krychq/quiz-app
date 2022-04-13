import React from 'react'
import Anserw from './Anserw'
import styles from '../styles/Quest.module.scss'

const he = require('he');

function Quest( { question, correct_answer, incorrect_answers} ){
  return (
    <div className={styles.container}>
      <h1>{he.decode(question)}</h1>

      <div className={styles.anserwsContainer}>
        {[correct_answer, ...incorrect_answers].map((el, index) => {
          return <Anserw props={he.decode(el)} key={index} />
        })}  
      </div>

    </div>
  )
}

export default Quest