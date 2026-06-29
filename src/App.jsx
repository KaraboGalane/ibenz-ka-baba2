import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollToTopButton from './components/ScrollToTopButton'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange'
import FloatingWhatsApp from './components/FloatingWhatsApp'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Pricing from './pages/Pricing'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollToTopOnRouteChange />
      <Navbar />

      <main className="min-h-screen bg-ink-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTopButton />
      <FloatingWhatsApp />

      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastClassName="!bg-ink-700 !text-cloud !rounded-xl !border !border-white/10"
        progressClassName="!bg-gold"
        autoClose={6000}
      />
    </>
  )
}
