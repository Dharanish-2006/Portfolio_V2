import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

import Preloader    from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar       from './components/Navbar/Navbar'
import Footer       from './components/Footer'
import ScrollToTop  from './components/ScrollToTop'

import Home     from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About    from './components/About/About'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <BrowserRouter>
      <Preloader done={loaded} />
      <CustomCursor />

      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <ScrollToTop />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about"   element={<About />} />
            <Route path="*"        element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
