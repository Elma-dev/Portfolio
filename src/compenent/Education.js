import React from 'react'
import { VerticalTimeline , VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@material-ui/icons/School';
import { useRef } from 'react';

function Education() {
    
  return (
    <div className='Education' id="education">
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
                                IBN Zohr University, Faculty of Science, FSA
                            </h3>
                            <p style={{color:"black",background:"white"}}>General University Degree</p>
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
  )
}

export default Education