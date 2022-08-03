import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

//import {Link} from 'react-scroll'

function Navbar() {
  return (
        <header>
            <p><Link to="home" spy={true} smooth={true} offset={50} duration={500}>AELMAJJODI</Link></p>
            <nav>
                <ul className='nav__links'>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Education</Link></li>
                    <li><Link to="#">Skills</Link></li>
                    <li><Link to="#">Project</Link></li>
                    
                </ul>
            </nav>
        </header>
  )
}

export default Navbar