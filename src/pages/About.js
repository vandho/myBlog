import React from 'react'
import MyFooter from '../component/MyFooter'
import { NavBar } from '../component/NavBar'
import './About.css'

const About = () => {
    return (
        <div>
            <NavBar />
            <div className='aboutMe'>
                <h1 className="text-center">About Me</h1>
                <div className='myProfile'>
                    <h2 className='greetings'>Hello I'm Revandho,  </h2>
                    <h2 className='descriptions'>
                        Furthermore, I'm very motivated and hardworking in order 
                        to improve my skills and work under pressure. My greatest 
                        passion is in life is using my technical know-how to benefit 
                        other people and organizations.
                    </h2>
                </div>
                <div className='myEducation'>
                    <h1 className='text-center-medium'>Education</h1>
                    <div>
                        <ul>
                            <li>
                                <h2>STMIK Bina Patria Magelang</h2>
                                <h3>Major in Information System</h3>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mySkill'>
                    <h1 className='text-center-medium'>Skills</h1>
                    <div className='mySkill-content'>
                        <div>
                            <h1>HTML</h1>
                            <h1><i className='fab fa-html5'></i></h1>
                        </div>
                        <div>
                            <h1>CSS</h1>
                            <h1><i className='fab fa-css3-alt'></i></h1>
                        </div>
                        <div>
                            <h1>Javascript</h1>
                            <h1><i className='fab fa-js'></i></h1>
                        </div>
                        <div>
                            <h1>Python</h1>
                            <h1><i className='fab fa-python'></i></h1>
                        </div>
                        <div>
                            <h1>NodeJS</h1>
                            <h1><i className='fab fa-node-js'></i></h1>
                        </div>
                        <div>
                            <h1>SQL</h1>
                            <h1><i className='fas fa-database'></i></h1>
                        </div>  
                    </div>
                </div>
                <div className='myExperience'>
                    <h1 className='text-center-medium'>Experience</h1>
                    <div className='experience'>
                        <div>
                            <h2>PT Central Capital Futures</h2>
                            <h3>Portofolio Officer</h3>
                        </div>
                        <div>
                            <h2>PT Bank Tabungan Negara</h2>
                            <h3>Desk Collections</h3>
                        </div>
                        <div>
                            <h2>KAP KKSP & Partners Jakarta</h2>
                            <h3>IT Staff</h3>
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}

export default About
