import Navigation from '../components/Navbar'
import Hero from "../components/Hero";
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Footer from '../components/Footer';
import Box from '../components/Box';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 690 },
    items: 2,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 690, min: 0 },
    items: 1,
    partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
  }
}

function Home() {
  return (
    <>
      <Navigation/>
      <Hero
      className='hero'
      heroImg='https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80'
      title='Your Journey Your Story'
      text='Choose Your Favorite Destination'
      buttonText='Travel Plan'
      url='/'
      btnClass='show'
      />
      <h1>Experience Comfort With Our Products</h1>
      <Carousel partialVisible={true} responsive={responsive}>
        <Box
        img='/assets/hero.jpg'
        title='Sewa Mobil VIP'
        text='Bad at flick shots to your left? Can&rsquo;t hit strafing or jumping targets? We fix that. Our AI-based technology adapt accordingly to optimize training gains'
        />
        <Box
        img='/assets/hero.jpg'
        title='Sewa Mobil Harian'
        text='Bad at flick shots to your left? Can&rsquo;t hit strafing or jumping targets? We fix that. Our AI-based technology adapt accordingly to optimize training gains'
        />
        <Box
        img='/assets/hero.jpg'
        title='Sewa Mobil Bulanan'
        text='Bad at flick shots to your left? Can&rsquo;t hit strafing or jumping targets? We fix that. Our AI-based technology adapt accordingly to optimize training gains'
        />
        <Box
        img='/assets/hero.jpg'
        title='Sewa Kendaraan Pariwisata'
        text='Bad at flick shots to your left? Can&rsquo;t hit strafing or jumping targets? We fix that. Our AI-based technology adapt accordingly to optimize training gains'
        />
        <Box
        img='/assets/hero.jpg'
        title='Paket Tour Domestik'
        />
        <Box
        img='/assets/hero.jpg'
        title='Paket Kunjungan Kerja'
        />
        <Box
        img='/assets/hero.jpg'
        title='Paket Study Tour'
        />
        <Box
        img='/assets/hero.jpg'
        title='Sewa Mobil Pengantin'
        />
        <Box
        img='/assets/hero.jpg'
        title='Transfer Bandara Hotel'
        />
      </Carousel>
      <Footer/>
    </>  
  )
}

export default Home;
