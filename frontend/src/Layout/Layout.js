import React from 'react';
import NavBar from '../components/NavBar'
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