import { useState } from 'react'
import './App.scss'
 import Header from './components/Components/Header'
  import Hero from './components/Components/Hero'
  import Footer from './components/Components/Footer'
import PhotoCardsList from './components/Components/PhotoCardsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <PhotoCardsList />
      <Footer />
    </>
  )
}

export default App
