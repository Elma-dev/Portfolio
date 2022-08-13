import React from 'react'
//import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import './Nav.css'
import {animateScroll} from 'react-scroll'

//import {Link} from 'react-scroll'

function Navbar() {
    
  return (
        <header id="homenave">
            <p><Link to="#homnave" >AELMAJJODI</Link></p>
            <nav>
                <ul className='nav__links'>
                    <li><Link to="#home">About</Link></li>
                    <li><Link to="#education">Education</Link></li>
                    <li><Link to="#skills">Skills</Link></li>
                    <li><Link to="#projects">Project</Link></li>
                    
                </ul>
            </nav>
        </header>
  )
}

export default Navbar