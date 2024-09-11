import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import AppBody from './components/AppBody'
import AppClock from './components/AppClock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center className='container'>
        <AppHeader></AppHeader>
        <AppBody></AppBody>
        <AppClock></AppClock>
      </center>
    </>
  )
}

export default App
