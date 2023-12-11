import React, {useState} from 'react'
import {SiDatabricks} from 'react-icons/si'
import "./NavbarStyles.css"
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
 
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
            <SiDatabricks className='icon'/>
            <h1>Secured</h1>
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="hamburguer" onClick={handleNav}>
            {!nav ? (<FaBars className='icon'/>):(<FaTimes className='icon'/>)}
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
