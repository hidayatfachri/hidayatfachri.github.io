import './App.css'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Service from './pages/Service'
import Gallery from './pages/Gallery'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>
      
    </div>
  )
}

export default App
