import { useLocalStorage } from "@mantine/hooks"
import React from "react"

export const QuizContext = React.createContext()

export function QuizProvider({ children }) {
  const [quests, setQuests] = useLocalStorage({
    key: "quests",
    defaultValue: null,
  })
  const [answers, setAnswers] = useLocalStorage({
    key: "answers",
    defaultValue: [],
  })

  return (
    <QuizContext.Provider
      value={{
        quests,
        setQuests,
        answers,
        setAnswers,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
