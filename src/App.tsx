import { AmbientBackground } from './components/background/AmbientBackground'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Achievements } from './sections/Achievements'
import { Education } from './sections/Education'
import { Training } from './sections/Training'
import { Contact } from './sections/Contact'

function App() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Training />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
