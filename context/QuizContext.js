import { useLocalStorage } from '@mantine/hooks';
import React from 'react'

export const QuizContext = React.createContext()

export function QuizProvider( { children } ) {
    
    const [quests, setQuests] = useLocalStorage({ key: 'quests', defaultValue: null })
    const [anserws, setAnserws] = useLocalStorage({ key: 'anserws', defaultValue: [] })
  
    return (
    <QuizContext.Provider value={{
        quests,
        setQuests,
        anserws,
        setAnserws
    }}>
        {children}
    </QuizContext.Provider>
  )
}
