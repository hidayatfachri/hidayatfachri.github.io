import Hero from '../components/Hero';
import Navigation from '../components/Navbar'
import Footer from '../components/Footer';
import ServiceList from '../components/ServiceList'


function Service() {
  return (
    <>
      <Navigation/>
      <Hero
      className='hero-half'
      heroImg='https://images.unsplash.com/photo-1495435229349-e86db7bfa013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1377&q=80'
      title='Service'
      />
      <ServiceList/>
      <Footer/>
    </>
  )
}

export default Service;