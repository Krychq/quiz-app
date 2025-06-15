import React from "react"
import Answer from "./Answer"
import styles from "../styles/Quest.module.scss"

function Quest({ question, answers }) {
  return (
    <div className={styles.container}>
      <h1>{question}</h1>

      <div className={styles.answersContainer}>
        {answers.map((answer, index) => {
          return <Answer props={answer} key={`answer-wrapper-${index}`} />
        })}
      </div>
    </div>
  )
}

export default Quest
