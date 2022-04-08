import { Center } from '@mantine/core'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  const styles = {
    height: 'calc(100vh - 80px)',
    display: 'grid',
    placeItems: 'center',
  }

  return(

    <div style={styles}>
      <Component {...pageProps} /> 
    </div>

  )
}

export default MyApp
