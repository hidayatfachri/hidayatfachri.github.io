import Hero from '../components/Hero.jsx';
import Navigation from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx';
import AboutDesc from '../components/AboutSection.jsx';

function About() {
    return (
    <>
    <Navigation/>
    <Hero
    className='hero-half'
    heroImg='https://images.unsplash.com/photo-1610290478737-019e38efcca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80'
    title='About Us'
    />
    <AboutDesc
    title= "Tentang Solusindo"
    info ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    visi= "Menjadi perusahaan transportasi yang terdepan dan terbaik dalam hal jasa sewa kendaraan yang mampu bersaing di tingkat global serta selalu mengutamakan innovasi dan efisiensi dalam pelayanan"
    misi="Mendedikasikan diri untuk memberikan pelayanan terbaik, dengan selalu berusaha mencapai kualitas tertinggi dalam hal pelanggan didukung oleh sistem management yang efektif dan efisien"

    />
    <Footer/>
    </>    
    )
  }
  
  export default About;