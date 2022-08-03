import React from 'react'
import Navbar from './Navbar'
import myImage from './image/me.jpeg'
import {FaFacebookF,FaInstagram,FaTwitter,FaGithub,FaSchool} from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

import Skills from './Skills'
import Education from './Education'





function Home() {

  return (
        <>
            <Navbar/>
            <div id='home' className='main'>
                <div className='text'>
                    <span className='hello'><span className='first'>H</span>ello <span className='first'>W</span>orld</span>
                    <br/>
                    I'm <span className='myName'>Abdeljalil El Majjodi</span>
                    <br/>
                    <Typewriter
                        onInit={(typewriter)=>{
                            typewriter.typeString("Software enginner, who doesn't care about the stack, as they are juste a tools for me, i always think of solution then technology to implement it. and abstraction then code, my eagerness and curiosity always gives me a good results and help me achieving my goals.").start()
                        }
                    }
                    />
                    
                    <br/>
                    <div className='warpper'>
                        <div className='button'>
                            <div className='icon'><FaFacebookF /></div>
                            <span>Facebook</span>
                        </div>
                        <div className='button'>
                            <div className='icon'><FaInstagram/></div>
                            <span>Instagram</span>
                        </div>
                        <div className='button'>
                            <div className='icon'><FaTwitter/></div>
                            <span>Twitter</span>
                        </div>
                        <div className='button'>
                            <div className='icon'><FaGithub/></div>
                            <span>Github</span>
                        </div>
                    </div>
                </div>
                <img src={myImage}/>

            </div>
            <Education/>
            <Skills/>
            
        </>
    
  )
}

export default Home