import Navigation from '../components/Navbar'
import Footer from '../components/Footer';
import Detail from '../components/Detail';

function ServiceShortterm() {
  return (
    <>
      <Navigation/>
      <Detail
      title="Pelayanan Sewa Mobil Reguler"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      image="https://images.unsplash.com/photo-1616455164974-dd1c84624216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      />
      <Footer/>
    </>
  )
}
  
export default ServiceShortterm;