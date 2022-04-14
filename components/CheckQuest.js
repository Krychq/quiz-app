import React from 'react'
import styles from '../styles/Quest.module.scss'
import { decode } from 'html-entities';

function Quest( { question, correct_answer, incorrect_answers } ){
  
  return (
    <div className={styles.container}>
      <h1>{decode(question)}</h1>

      <div className={styles.answersContainer}>
        {[correct_answer, ...incorrect_answers].map((el, index) => {
            let bgc = '#7950f2'
            if(el === correct_answer)
                bgc = 'green'
            
            if(el === your_answer)
        
          return (
            <div key={index}  className={styles.container}>
                <h2>{el}</h2>
            </div>
          )
        })}  
      </div>

    </div>
  )
}

export default Quest