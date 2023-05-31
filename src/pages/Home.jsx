import Navigation from '../components/Navbar'
import Hero from "../components/Hero";
import 'react-multi-carousel/lib/styles.css'
import Footer from '../components/Footer';
import Feature from '../components/Feature';
import WhyChooseUs from '../components/WhyChooseUs';

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
      <WhyChooseUs/>
      <Feature/>
      <Footer/>
    </>  
  )
}

export default Home;
