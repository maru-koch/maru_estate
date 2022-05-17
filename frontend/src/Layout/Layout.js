import React from 'react';
import NavBar from '../components/NavBar'

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