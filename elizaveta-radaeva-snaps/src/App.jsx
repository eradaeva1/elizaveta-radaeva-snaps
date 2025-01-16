import { useState } from 'react'
import './App.scss'
 import Header from './components/Components/Header'
  import Hero from './components/Components/Hero'
  import Footer from './components/Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}

export default App
