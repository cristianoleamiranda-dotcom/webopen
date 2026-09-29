import React from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import { Navigation } from './components/navigation/Navigation'
import { Hero } from './sections/Hero/Hero'
import { About } from './sections/About/About'
import { Engineering } from './sections/Engineering/Engineering'
import { Projects } from './sections/Projects/Projects'
import { Products } from './sections/Products/Products'
import { Contact } from './sections/Contact/Contact'

function App() {
  useLenis(({ scroll }) => {
    // Scroll callback
  })

  return (
    <ReactLenis root>
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
