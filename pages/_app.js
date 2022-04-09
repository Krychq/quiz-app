import { useLocalStorage } from '@mantine/hooks';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [quests, setQuests] = useLocalStorage({ key: 'quests', defaultValue: null });
  
  const styles = {
    height: 'calc(100vh - 80px)',
    display: 'grid',
    placeItems: 'center',
  }

  return(

    <div style={styles}>
      <Component {...pageProps} quests={quests} setQuests={setQuests} /> 
    </div>

  )
}

export default MyApp
