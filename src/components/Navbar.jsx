import './NavbarStyles.css'
import { MenuItems } from './MenuItems';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [isActive, setActive] = useState(true)
  const toggleClass = () => {
    setActive(!isActive)
  }
  
  return (
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'>Solusindo</h1>

      <div className="menu-icons">
        <i className={isActive ? 'fas fa-bars' : 'fas fa-times'} onClick={toggleClass}></i>
      </div>
      <ul className={isActive ? 'nav-menu' : 'nav-menu active'}>
        {MenuItems.map((item, index) => {
          return(
            <li key={index}>
              <NavLink className='nav-links'
              exact to={item.url}>
                <i className={item.icon}> {item.title}</i>
              </NavLink>
            </li>
          )
        })}
        <button href="/" className='contact-button'>Contact Us</button>
      </ul>
    </nav>
  )
}

export default Navigation;