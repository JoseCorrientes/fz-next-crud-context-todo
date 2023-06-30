import '@/styles/globals.css'
import { TaskProvider } from '../context/taskContext'

export default function App({ Component, pageProps }) {
  return( 
  <TaskProvider>
      <Component {...pageProps} />
  </TaskProvider>
  )
}