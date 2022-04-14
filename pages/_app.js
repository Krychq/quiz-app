import React, { useState, useEffect } from 'react'
import '../styles/globals.css'
import { QuizProvider } from '../context/QuizContext'
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }) {

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return <Loading />;
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
