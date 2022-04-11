import React from 'react'
import { useState } from 'react'
import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { QuizContext } from '../context/QuizContext'
import Quest from '../components/Quest'

export default function quiz() {

  const { quests, anserws, setAnserws } = useContext(QuizContext)

  const [questIndex, setQuestIndex] = useState(0)
  const router = useRouter()
    useEffect(() => {
        if (quests == null)
          router.push('/')
        if(anserws.lenght > 0)
          setQuestIndex(anserws)
    }, [])

    useEffect(() => {
      if(questIndex > anserws)
        console.log("KONIEC QUIZU");
    }, [anserws])
    

    
    


    

  
  
  
  return (

    <Quest quests={quests[questIndex]} />
  )
}
