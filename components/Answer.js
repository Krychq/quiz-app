import React, { useContext } from "react"
import styles from "../styles/Answer.module.scss"
import { QuizContext } from "../context/QuizContext"

function Answer({ props }) {
  const { answers, setAnswers } = useContext(QuizContext)
  let fontSize = ".8em"

  if (props.length > 40) fontSize = ".6em"

  return (
    <div
      style={{ fontSize: fontSize }}
      className={styles.container}
      onClick={() => setAnswers([...answers, props])}
    >
      <h2>{props}</h2>
    </div>
  )
}

export default Answer
