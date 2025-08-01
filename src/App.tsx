import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Features from './pages/Features'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>
    </div>
  )
}
