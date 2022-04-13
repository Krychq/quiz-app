import React from 'react'
import { useState } from 'react'
import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { QuizContext } from '../context/QuizContext'
import Quest from '../components/Quest'

export default function quiz() {

  const { quests, anserws } = useContext(QuizContext)

  const [questIndex, setQuestIndex] = useState(0)

  const question = quests ?? 0;

  const router = useRouter()

    useEffect(() => {
        if (quests == null)
          router.push('/')
        if(anserws.lenght > 0)
          setQuestIndex(anserws.lenght)
    }, [])

    useEffect(() => {
      
      if(quests.length-1 <= anserws.length+1){
        router.push('/summary')
      }
      setQuestIndex(questIndex + 1)
    }, [anserws])

  return (
    <>
      {
        !quests ? (<h1>Loading</h1>) : (
            <Quest {...question[questIndex]} />
        )
      }
    </>
  )
}