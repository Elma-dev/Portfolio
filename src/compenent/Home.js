import React from 'react'
import Navbar from './Navbar'
import myImage from './image/me.jpeg'
import {FaFacebookF,FaInstagram,FaTwitter,FaGithub,FaSchool} from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

import Skills from './Skills'
import { VerticalTimeline , VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@material-ui/icons/School';




function Home() {
  return (
        <>
            <Navbar/>
            <div className='main'>
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
            <div className='Education'>
                <span className='hello'>
                        <span  className='first'>E</span>
                        ducation :
                </span>
                <br/>
                <div className='experience'>
                    <VerticalTimeline lineColor='#ffffff'>
                        <VerticalTimelineElement 
                            className='vertical-timeline-element--education' 
                            date="2019 - 2019"
                            iconStyle={{background:"#24252A" , color:"#fff"} }
                            icon={<SchoolIcon/>}
                            
                        >
                            <h3 style={{color:"black",background:"white"}} className='vertical-time-element-title'>
                                Dakhla High School Ouled Berhil
                            </h3>
                            <p style={{color:"black",background:"white"}}>Baccalaureate in Mathematics sciences</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement 
                            className='vertical-timeline-element--education' 
                            date="2020 - 2021"
                            iconStyle={{background:"#24252A" , color:"#fff"} }
                            icon={<SchoolIcon/>}
                            
                        >
                            <h3 style={{color:"black",background:"white"}} className='vertical-time-element-title'>
                                Dakhla High School Ouled Berhil
                            </h3>
                            <p style={{color:"black",background:"white"}}>Baccalaureate in Mathematics sciences</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement 
                            className='vertical-timeline-element--education' 
                            date="2021 - 2022"
                            iconStyle={{background:"#24252A" , color:"#fff"} }
                            icon={<SchoolIcon/>}
                            
                        >
                            <h3 style={{color:"black",background:"white"}} className='vertical-time-element-title'>
                                IBN Zohr University, Faculty of Science, FSA
                            </h3>
                            <p style={{color:"black",background:"white"}}>Bachelor of Mathematics and Computer Science</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
                
            </div>
            <Skills/>
            
        </>
    
  )
}

export default Home