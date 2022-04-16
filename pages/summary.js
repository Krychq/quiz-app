import React, { useState, useEffect, useContext } from "react"
import styles from "../styles/Summary.module.scss"
import { QuizContext } from "../context/QuizContext"
import { useRouter } from "next/router"
import { Player } from "@lottiefiles/react-lottie-player"
import { Button } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import ChoicesModal from "../components/ChoicesModal"

export default function Summary() {
  function choosePraise(result) {
    if (result > 80) {
      return "Excellent!"
    }
    if (result > 49) {
      return "Good job!"
    }

    return "You have to practice!"
  }

  const [count, setCount] = useState([0, 0]) // [0] => correct / [1] => all
  const [gifIsVisible, setGifIsVisible] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { quests, setQuests, answers, setAnswers } = useContext(QuizContext)
  const matches = useMediaQuery("(min-width: 700px)")
  const router = useRouter()

  function newQuiz() {
    setQuests(null)
    setAnswers([])

    router.push("/")
  }

  useEffect(() => {
    let counter = 0
    if (quests != null && quests.length === answers.length) {
      for (const x in quests) {
        if (quests[x]?.correct_answer) {
          if (quests[x].correct_answer === answers[x]) {
            counter++
          }
        }
      }

      setCount([counter, quests.length])
    } else {
      router.push("/quiz")
    }

    setTimeout(() => {
      setGifIsVisible(false)
    }, 3500)
  }, [])

  if (gifIsVisible) {
    return (
      <Player
        autoplay
        src="https://assets6.lottiefiles.com/packages/lf20_hxart9lz.json"
        style={{ height: "80%", width: "80%" }}
      />
    )
  } else {
    return (
      <>
        {modalIsOpen && <ChoicesModal setModalIsOpen={setModalIsOpen} />}
        <div className={styles.container}>
          <h1>{`You scored ${count[0]}/${count[1]} points (${(
            (count[0] / count[1]) *
            100
          ).toFixed(0)}%)`}</h1>
          <h2>{choosePraise((count[0] / count[1]) * 100)}</h2>

          <div className={styles.btnWrapper}>
            <Button
              style={{ color: "#fff", borderColor: "#fff" }}
              size={matches ? "lg" : "md"}
              radius="md"
              variant="outline"
              onClick={() => setModalIsOpen(true)}
            >
              Show your choices
            </Button>
            <Button
              color="violet"
              size={matches ? "lg" : "md"}
              radius="md"
              onClick={newQuiz}
            >
              New quiz
            </Button>
          </div>
        </div>
      </>
    )
  }
}
