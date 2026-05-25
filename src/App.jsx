import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Home from './pages/Home'
import InteriorDesign from './pages/InteriorDesign'
import OfficeDesign from './pages/OfficeDesign'
import BungalowDesign from './pages/BungalowDesign'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interior-design" element={<InteriorDesign />} />
          <Route path="/office-design" element={<OfficeDesign />} />
          <Route path="/bungalow-design" element={<BungalowDesign />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
