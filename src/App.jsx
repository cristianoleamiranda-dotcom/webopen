import React, { useEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Navigation } from './components/navigation/Navigation'
import { Hero } from './sections/Hero/Hero'
import { About } from './sections/About/About'
import { Engineering } from './sections/Engineering/Engineering'
import { Projects } from './sections/Projects/Projects'
import { Products } from './sections/Products/Products'
import { Contact } from './sections/Contact/Contact'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useLenis(({ scroll }) => {
    ScrollTrigger.update()
  })

  useEffect(() => {
    gsap.ticker.add((time) => {
      // Sincronizar Lenis con GSAP
    })
  }, [])

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <main className="bg-sender-dark min-h-screen text-sender-white selection:bg-sender-blue selection:text-white">
        <Navigation />
        <Hero />
        <About />
        <Engineering />
        <Projects />
        <Products />
        <Contact />
      </main>
    </ReactLenis>
  )
}

export default App
