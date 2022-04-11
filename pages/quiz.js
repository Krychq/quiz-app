import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function quiz( { quests } ) {
  const [questions, setQuestions] = useState(quests)
  const router = useRouter()

  
    useEffect(() => {
        if (questions == null)
          router.push('/')
    }, [questions])

    

  
  
  
  return (
    <h1>xd</h1>
  )
}
