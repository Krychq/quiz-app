import React, { useState, useEffect, useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import Loading from '../components/Loading'
import { useRouter } from 'next/router'

export default function Summary() {
  
  const [correctCount, setCorrectCount] = useState({all: 0, correct: 0})
  const { quests, setQuests, anserws, setAnserws } = useContext(QuizContext)
  const router = useRouter()

  useEffect(() => {
    let counter = 0;
    if(quests != null && quests.length === anserws.length){
      setCorrectCount({...correctCount, all: anserws.length})
      for (const x in quests) {
        if(quests[x]?.correct_answer){
          if(quests[x].correct_answer === anserws[x]){
            counter++;
          }
        }
      }
      setCorrectCount({...correctCount, correct: counter})
      
      setQuests(null)
      setAnserws([])
    }else{
      router.push('/quiz')
    }
  }, [])
  
  return (
    <h1>{`You scored ${correctCount.correct}/${correctCount.all} points`}</h1>
  )
}