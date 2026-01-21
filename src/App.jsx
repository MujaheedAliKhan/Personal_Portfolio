import { useState } from 'react'
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certification from './components/Certification'
import Contact from './components/Contact'


function App() {

  return (
    <>
      <nav>
        <Navbar/>
      </nav>
      <main className='pt-20'>
        <Aboutme/>
          <section className='pt-20'>
            <Skills />
          </section>
          <section className='pt-16'>
            <Projects />
          </section>
          <section>
            <Certification/>
          </section>
          <section>
            <Contact/>
          </section>
      </main>
    </>
  )
}

export default App
