import './App.css'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Gallery from './pages/Gallery.jsx'

import ServiceVIP from './service-list/Service-VIP.jsx'
import ServiceLongterm from './service-list/Service-Longterm.jsx'
import ServiceShortterm from './service-list/Service-Shortterm.jsx'
import ServicePariwisata from './service-list/Service-Tourism.jsx'
import ServiceDomestik from './service-list/Service-Domestic.jsx'
import ServiceCompany from './service-list/Service-Company.jsx'
import ServiceStudy from './service-list/Service-Study.jsx'
import ServicePengantin from './service-list/Service-Pengantin.jsx'
import ServiceBandara from './service-list/Service-Bandara.jsx'




function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/gallery' element={<Gallery/>} />

        <Route path='/vip-car-rental' element={<ServiceVIP/>}/>
        <Route path='/longterm-car-rental' element={<ServiceLongterm/>}/>
        <Route path='/shortterm-car-rental' element={<ServiceShortterm/>}/>
        <Route path='/tourism-vehicle-rental' element={<ServicePariwisata/>} />
        <Route path='/domestic-tour' element={<ServiceDomestik/>}/>
        <Route path='/company-gathering' element={<ServiceCompany/>}/>
        <Route path='/study-tour' element={<ServiceStudy/>}/>
        <Route path='/wedding-car-package' element={<ServicePengantin/>}/>
        <Route path='/airport-hotel-transfer' element={<ServiceBandara/>}/>

      </Routes>
    </div>
  )
}

export default App
