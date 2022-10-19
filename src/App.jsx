import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Team from './Team'
import Gallery from './Gallery'
import Contact from './Contact'
import Partner from './Partner'
import Products from './Products'
import Test from './Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
                <Navbar />
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/about' element={<About />} />
                  <Route path='/teams' element={<Team />} />
                  <Route path='/gallery' element={<Gallery />} />
                  <Route path='/partners' element={<Partner />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/products' element={<Products />} />
                </Routes>
                <Footer />
      </Router>
    </div>
  )
}

export default App
 