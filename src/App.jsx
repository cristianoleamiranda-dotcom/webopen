import React from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { Hero } from './sections/Hero/Hero'

function App() {
  // Lenis instance for global smooth scroll
  useLenis(({ scroll }) => {
    // Scroll callback for future GSAP integrations
  })

  return (
    <ReactLenis root>
      <main className="bg-sender-dark min-h-[200vh] text-sender-white selection:bg-sender-blue selection:text-white">
        <Hero />
        
        {/* Placeholder for the next architectural scene */}
        <section className="w-full min-h-screen border-t border-sender-white/5 flex items-center justify-center">
          <div className="font-mono text-sender-light tracking-widest">
            [ SCENE 02 — SENDER ENGINEERING // PENDING DESIGN LOOP ]
          </div>
        </section>
      </main>
    </ReactLenis>
  )
}

export default App
