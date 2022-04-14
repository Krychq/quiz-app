import React, { useState, useEffect, useContext } from 'react'
import styles from '../styles/Summary.module.scss'
import { QuizContext } from '../context/QuizContext'
import { useRouter } from 'next/router'
import { Player } from '@lottiefiles/react-lottie-player';
import { Button } from '@mantine/core';
import ChoicesModal from '../components/ChoicesModal';

export default function Summary() {

  function choosePraise(result) {
    if(result > 80){
      return 'Excellent!'
    }
    if(result > 49){
      return 'Good job!'
    }

    return 'You have to practice!'
  }
  
  const [count, setCount] = useState([0, 0]) // [0] => correct / [1] => all
  const [gifIsVisible, setGifIsVisible] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { quests, setQuests, anserws, setAnserws } = useContext(QuizContext)
  const router = useRouter()

  useEffect(() => {
    let counter = 0;
    if(quests != null && quests.length === anserws.length){
      for (const x in quests) {
        if(quests[x]?.correct_answer){
          if(quests[x].correct_answer === anserws[x]){
            counter++;
          }
        }
      }
      
      setCount([counter, quests.length])
      
      setQuests(null)
      setAnserws([])
    }else{
      router.push('/quiz')
    }

    setTimeout(() => {
      setGifIsVisible(false);
    }, 3500);
  }, [])
  
  if(gifIsVisible){
    return (
        <Player
          autoplay
          src="https://assets6.lottiefiles.com/packages/lf20_hxart9lz.json"
          style={{ height: '60%', width: '60%'}}
        />
    )
  }else{
    return (
      <>
        {modalIsOpen && <ChoicesModal props={setModalIsOpen} />}
        <div className={styles.container}>
          <h1>{`You scored ${count[0]}/${count[1]} points (${(count[0] / count[1] * 100).toFixed(0)}%)`}</h1>
          <h2>{choosePraise(count[0] / count[1] * 100)}</h2>

          <Button color="violet" size="lg" radius='md' onClick={() => setModalIsOpen(true)}>
            Show your choices
          </Button>
        </div>
      </>
    )
  }
}