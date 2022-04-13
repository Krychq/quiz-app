import '../styles/globals.css'
import { QuizProvider } from '../context/QuizContext'
import React, { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  
  const styles = {
    height: 'calc(100vh - 80px)',
    display: 'grid',
    placeItems: 'center',
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
    <div style={styles}>
      <QuizProvider>
        <Component {...pageProps} /> 
      </QuizProvider>
    </div>
    )
  }
}

export default MyApp
