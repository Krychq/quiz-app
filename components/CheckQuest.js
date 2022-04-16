import React from "react"
import styles from "../styles/CheckQuest.module.scss"
import { decode } from "html-entities"

function Quest({ question, correct_answer, incorrect_answers, your_answer }) {
  return (
    <div className={styles.container}>
      <h1>{decode(question)}</h1>

      <div className={styles.answersContainer}>
        {[correct_answer, ...incorrect_answers].map((el, index) => {
          let answerClass = styles.answer
          if (el === your_answer)
            answerClass = `${styles.answer} ${styles.incorrect}`
          if (el === correct_answer)
            answerClass = `${styles.answer} ${styles.correct}`

          return (
            <div key={index} className={answerClass}>
              <h2>{decode(el)}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Quest
