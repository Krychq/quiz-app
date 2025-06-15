import { useLocalStorage } from "@mantine/hooks"
import React from "react"

import { decode } from "html-entities"
import { shuffleArray } from "../utils/utils"


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

  const setAndShuffleQuests = (quests) => {
    const shuffledQuests = quests.map(quest => (
      {
        question: decode(quest.question),
        correct_answer: decode(quest.correct_answer),
        
        answers: (quest.type === "boolean") ? ["False", "True"] : shuffleArray([quest.correct_answer, ...quest.incorrect_answers].map(answer => decode(answer)))
      }
    ))

    setQuests(shuffledQuests)
  }

  const resetQuiz = () => {
    setQuests(null)
    setAnswers([])
  }

  return (
    <QuizContext.Provider
      value={{
        quests,
        setQuests: setAndShuffleQuests,
        answers,
        setAnswers,
        resetQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
