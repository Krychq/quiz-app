import '../styles/globals.css'
import { QuizProvider } from '../context/QuizContext'

function MyApp({ Component, pageProps }) {

  
  const styles = {
    height: 'calc(100vh - 80px)',
    display: 'grid',
    placeItems: 'center',
  }

  return(

    <div style={styles}>
      <QuizProvider>
        <Component {...pageProps} /> 
      </QuizProvider>
    </div>

  )
}

export default MyApp
