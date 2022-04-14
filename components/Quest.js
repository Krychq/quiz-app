import React from 'react'
import Answer from './Answer'
import styles from '../styles/Quest.module.scss'
import { decode } from 'html-entities';

function Quest( { question, correct_answer, incorrect_answers } ){
  
  return (
    <div className={styles.container}>
      <h1>{decode(question)}</h1>

      <div className={styles.answersContainer}>
        {[correct_answer, ...incorrect_answers].map((el, index) => {
          return <Answer props={decode(el)} key={index} />
        })}  
      </div>

    </div>
  )
}

export default Quest