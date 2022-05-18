import React from 'react';
import NavBar from '../components/Nav'
import Footer from '../components/Footer'

const Layout =(props)=>{
    return (
        <div>
            <NavBar/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout