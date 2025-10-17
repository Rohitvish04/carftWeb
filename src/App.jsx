import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Pricing from './components/Pricing'

const ScrollToSection = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    const id = location.pathname.replace('/', '') || 'home'
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return children
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToSection>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
      </ScrollToSection>
      <Footer />
    </Router>
  )
}

export default App
