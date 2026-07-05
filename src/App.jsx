import { useState, useEffect } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Research from './sections/Research'
import TechWriting from './sections/TechWriting'
import Experience from './sections/Experience'
import Services from './sections/Services'
import Initiative from './sections/Initiative'
import Fashion from './sections/Fashion'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('mb-theme') || 'dark' } catch { return 'dark' }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('mb-theme', theme) } catch {}
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Research />
          <TechWriting />
          <Experience />
          <Services />
          <Initiative />
          <Fashion />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}
