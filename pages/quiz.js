import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function quiz( { quests } ) {
  const [questions, setQuestions] = useState(quests)
  const router = useRouter()

  useEffect(() => {

        // if(quests == null)
        //     router.push('/')
        console.log(quests);
  
  }, [])
  
  
  
  return (
    <h1>xd</h1>
  )
}
