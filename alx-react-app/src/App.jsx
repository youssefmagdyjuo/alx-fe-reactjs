import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WelcomeMessage from './components/WelcomeMessage'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />        
    </>
  )
}

export default App
