import React from 'react'
import { QuizContext } from '../context/QuizContext'

export default function ChoicesModal( { setModalIsOpen } ) {
  
  const { quests, answers } = React.useContext(QuizContext)

  return (
    <>
      <Modal
        opened={true}
        onClose={() => setModalIsOpen(false)}
        // classNames={{
        //     modal: styles.modal,
        //     body: styles.container,
        //     inner: styles.inner
        //   }}
        
      >
        {quests.map((el, index) => {
          return (
            <h1>s</h1>
          )
        })}


      </Modal>
    </>
  )
}