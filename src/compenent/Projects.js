import React from 'react'
import { Link } from 'react-router-dom'
function Projects(){
    return (
        <div className='Project' id="projects">
            <span className='hello'>
                    <span  className='first'>P</span>
                    rojects :
                </span>
                <br/>
                <div className='projContent'>
                    <div className='pr1' style={{backgroundImage:`url("https://robocomp.github.io/web/gsoc/2020/posts/kanav/KeypointModel.png")`}}>
                        <Link to="#"><p>Hands Detections</p></Link>
                    </div>
                    <div className='pr1' style={{backgroundImage:`url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
                        <Link to="#"><p>Restauration App</p></Link>
                    </div>
                    <div className='pr1' style={{backgroundImage:`url("https://images.pexels.com/photos/4665689/pexels-photo-4665689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
                        <Link to="#"><p>Desktop App  Car Reservation</p></Link>
                    </div>
                    <div className='pr1' style={{backgroundImage:`url("https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
                        <Link to="#"><p>Hotel Reservation App</p></Link>
                    </div>
                </div>
        </div>
    )
}
export default Projects
