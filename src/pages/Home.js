import React from 'react'
import MyFooter from '../component/MyFooter'
import { NavBar } from '../component/NavBar'

import './Home.css'

const Home = () => {
    return (
        <div >
            <NavBar />
            <div className='home-grid' >
                <div className='home-grid-items'>
                    <h1 className='hello'>Hello My name is Revandho</h1>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}

export default Home
