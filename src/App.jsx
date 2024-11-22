import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/landingPage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("fetchimage")
    setCount((count) => count + 1)
  }, [])
  
  useEffect(() => {
    console.log('this is from other')
    const interval = setInterval(() => {
      setCount((count) => count + 1)
    }, 3000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [count])
  

  return (
    <>
    <LandingPage/>
    </>
  )
}

export default App
