import React, { useContext } from 'react'
import styles from '../styles/Anserw.module.scss'
import { QuizContext } from '../context/QuizContext'

function Anserw( { props } ) {
  
  const { anserws, setAnserws } = useContext(QuizContext)

  return (
    <div className={styles.container} onClick={() => setAnserws([...anserws, props])}>
      <h2>{props}</h2>
    </div>
  )
}

export default Anserw