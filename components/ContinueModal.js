import React, { useContext } from 'react'
import { Modal, Button } from '@mantine/core';
import styles from '../styles/ContinueModal.module.scss'
import { QuizContext } from '../context/QuizContext'
import { useRouter } from 'next/router'

export default function ContinueModal() {

    const { setQuests, setAnswers } = useContext(QuizContext)

    const router = useRouter()

    function onClose(){
        setAnswers([])
        setQuests(null)
    }
    return(
        <>
            <Modal
                opened={true}
                onClose={onClose}
                classNames={{
                    modal: styles.modal,
                    body: styles.container,
                    inner: styles.inner
                  }}
            >

                <h1>Do you want continue your old quiz?</h1>

                <div className={styles.btnsWrapper}> 
                    <Button
                        color="violet"
                        variant="outline"
                        size="md"
                        onClick={onClose}
                    >
                        New quiz
                    </Button>

                    <Button color="violet" size="md" onClick={() => router.push('/quiz')}>
                        Continue
                    </Button>
                </div>
            </Modal>
        </>
    )
}