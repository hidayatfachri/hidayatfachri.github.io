import Navigation from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx';
import Detail from '../components/Detail.jsx';

function ServiceVIP() {
  return (
    <>
      <Navigation/>
      <Detail
      title="Pelayanan Sewa Mobil VIP"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      image="https://images.unsplash.com/photo-1495435229349-e86db7bfa013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1377&q=80"
      />
      <Footer/>
    </>
  )
}
  
export default ServiceVIP;