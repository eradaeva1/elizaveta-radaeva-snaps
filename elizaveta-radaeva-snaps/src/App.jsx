import { useState } from 'react'
import './App.scss'
 import Header from './components/Components/Header'
  import Hero from './components/Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default App
