import React from 'react'
import { RiMentalHealthLine } from "react-icons/ri"
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import './FooterStyles.css'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
      <div className="top">
        <div className="logo-footer">
            <RiMentalHealthLine className='icon'/>
            <h2>Casam</h2>
        </div>
        <Link activeClass='active' to='top' spy={true} smooth={true} duration={500}>
            <BsFillArrowUpCircleFill className='icon' />
        </Link>
      </div>
      <div className="col-container">
        <div className="col">
            <h3>Paginas</h3>
            <p>Home</p>
            <p>Ayuda en crisis</p>
            <p>Estimulacion temprana</p>
            <p>Desarrollo personal</p>
        </div>

        <div className="col">
            <h3>Redes Sociales</h3>
            <FaWhatsapp className='social-icon'/>
            <FaInstagram className='social-icon'/>
            <CiFacebook className='social-icon'/>            
            <FaXTwitter className='social-icon'/> 
            </div>
      </div>
    </div>
    </div>

  )
}

export
 default Footer
