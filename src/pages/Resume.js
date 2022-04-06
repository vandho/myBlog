import React from 'react'
import MyFooter from '../component/MyFooter'
import { NavBar } from '../component/NavBar'
import './Resume.css'

const Resume = () => {
    
    return (
        <div >
            <NavBar />
            <div className='resume'>
                <h1 className='resume-text'>My Resume</h1>
                <form className='form'>
                    <button className='btn' type='submit'>My Resume</button>
                </form>
            </div>
            <MyFooter />
        </div>
    )
}

export default Resume