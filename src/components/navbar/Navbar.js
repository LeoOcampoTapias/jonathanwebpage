import React, {useState} from 'react'
import {SiDatabricks} from 'react-icons/si'
import "./NavbarStyles.css"
import {FaBars, FaTimes} from 'react-icons/fa'
import { RiMentalHealthLine } from "react-icons/ri";
import {Link} from "react-router-dom"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
 
  return (
    <div name='top' className='navbar'>
      <div className="container">
        <div className="logo">
            <RiMentalHealthLine className='icon'/>  
            <h1>Casam</h1>
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacto">Contact</Link></li>
        </ul>
        <div className="hamburguer" onClick={handleNav}>
            {!nav ? (<FaBars className='icon'/>):(<FaTimes className='icon'/>)}
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
