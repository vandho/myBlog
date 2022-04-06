import React from 'react'
import MyFooter from '../component/MyFooter'
import { NavBar } from '../component/NavBar'

import './Contact.css'

const Contact = () => {
    return (
        <div>
            <NavBar />
            <div className='contact'>
                <h1 className="contact-title">Contact Me</h1>
                <div className='contact-icon'>
                    <h1><i className="far fa-envelope"></i></h1>
                    <h1><i class="fa-brands fa-linkedin"></i></h1>
                    <h1><i class="fa-brands fa-github"></i></h1>
                    <h1><i class="fa-brands fa-facebook-square"></i></h1>
                    <h1><i class="fa-brands fa-instagram"></i></h1>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}

export default Contact
