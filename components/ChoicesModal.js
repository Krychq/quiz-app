import React from "react"
import styles from "../styles/ChoicesModal.module.scss"
import { Modal } from "@mantine/core"
import CheckQuest from "./CheckQuest"
import { QuizContext } from "../context/QuizContext"

export default function ChoicesModal({ setModalIsOpen }) {
  const { quests, answers } = React.useContext(QuizContext)
  return (
    <>
      <Modal
        opened={true}
        onClose={() => setModalIsOpen(false)}
        classNames={{
          modal: styles.modal,
          body: styles.container,
          inner: styles.inner,
          overlay: styles.overlay,
          close: styles.close,
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Your answers</h1>
        {quests.map((el, index) => {
          return <CheckQuest {...el} your_answer={answers[index]} key={index} />
        })}
      </Modal>
    </>
  )
}
