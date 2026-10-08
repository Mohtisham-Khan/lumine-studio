import Nav from './components/Nav'
import Hero from './components/Hero'
import Credentials from './components/Credentials'
import Philosophy from './components/Philosophy'
import Projects from './components/Projects'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Studio from './components/Studio'
import Faqs from './components/Faqs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg text-fg antialiased">
      <Nav />
      <Hero />
      <Credentials />
      <Philosophy />
      <Projects />
      <Process />
      <Testimonials />
      <Studio />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  )
}