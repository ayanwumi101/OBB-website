import { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navbar />
        <Home />
        <Footer />
    </div>
  )
}

export default App
