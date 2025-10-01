import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">

      <HeroSection/>
      <FeaturesSection/>
      </div>
    </>
  )
}

export default App
