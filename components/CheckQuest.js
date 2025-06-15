import React from "react"
import styles from "../styles/CheckQuest.module.scss"

function Quest({ question, answers, correct_answer, your_answer }) {
  return (
    <div className={styles.container}>
      <h1>{question}</h1>

      <div className={styles.answersContainer}>
        {answers.map((el, index) => {
          let fontSize = "1rem"

          if (el.length > 40) fontSize = "0.8rem"

          let answerClass = styles.answer

          if (el === your_answer)
            answerClass = `${styles.answer} ${styles.incorrect}`
          if (el === correct_answer)
            answerClass = `${styles.answer} ${styles.correct}`

          return (
            <div key={index} className={answerClass}>
              <h2 style={{ fontSize: fontSize }}>{el}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Quest
