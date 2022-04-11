import React from 'react'
import Anserw from './Anserw'
import styles from '../styles/Quest.module.scss'

function Quest( quests ){
    
    const [first, setfirst] = React.useState()

    setfirst(quests.quests.question.replace(/[\u00A0-\u9999<>\&]/g, function(i) {
        return '&#'+i.charCodeAt(0)+';';
     }))
  return (
    <div className={styles.container}>
        <h1>{first}</h1>
        {/* {[correct_answer, ...incorrect_answers].map(el => {
            <Anserw props={el} />
        })} */}
    </div>
  )
}

export default Quest