import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { QuizContext } from '../context/QuizContext'
import Quest from '../components/Quest'
import Loading from '../components/Loading'

export default function Quiz() {
  const { quests, anserws } = useContext(QuizContext)
  const [questIndex, setQuestIndex] = useState(0)
  const question = quests ?? 0;
  const router = useRouter()

  useEffect(() => {
      if (quests == null)
        router.push('/')
    }, [,quests])

    useEffect(() => {
      if(quests){
        if(quests.length <= anserws.length){
          router.push('/summary')
        }
        setQuestIndex(anserws.length)
      }
    }, [anserws])

  return (
    <>
      {
        !quests || !quests[questIndex]?.question ? <Loading /> : (
            <Quest {...question[questIndex]} />
        )
      }
    </>
  )
}