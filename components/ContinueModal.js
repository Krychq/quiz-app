import React, { useContext } from "react"
import { Modal, Button } from "@mantine/core"
import styles from "../styles/ContinueModal.module.scss"
import { QuizContext } from "../context/QuizContext"
import Link from "next/link"

export default function ContinueModal() {
  const { setQuests, setAnswers } = useContext(QuizContext)

  function onClose() {
    setAnswers([])
    setQuests(null)
  }
  return (
    <>
      <Modal
        opened={true}
        onClose={onClose}
        classNames={{
          modal: styles.modal,
          body: styles.container,
          inner: styles.inner,
        }}
      >
        <h1>Do you want continue your old quiz?</h1>

        <div className={styles.btnWrapper}>
          <Button color="violet" variant="outline" size="md" onClick={onClose}>
            New quiz
          </Button>
          <Link href="/quiz">
            <Button color="violet" size="md">
              Continue
            </Button>
          </Link>
        </div>
      </Modal>
    </>
  )
}
