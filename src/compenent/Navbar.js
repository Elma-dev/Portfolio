import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'



function Navbar() {
  return (
        <header>
            <p><Link to="#">AELMAJJODI</Link></p>
            <nav>
                <ul className='nav__links'>
                    <li><Link to="#">Project</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Contact</Link></li>
                    
                </ul>
            </nav>
        </header>
  )
}

export default Navbar