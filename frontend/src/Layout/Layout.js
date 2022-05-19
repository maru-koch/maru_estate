import { useEffect, useState } from 'react';
import NavBar from '../components/Nav'
import Footer from '../components/Footer'
import {useSelector } from 'react-redux'


const Layout =(props)=>{

    // check if current user is authenticated
    // true -> display logout
    // false -> display login and sign up

    const {token} = useSelector(state => state.auth)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        if (token){
        setIsAuthenticated(true)
    }else{
        setIsAuthenticated(false)
    }
    }, [token])
    

    return (
        <div>
            <NavBar isAuthenticated = {isAuthenticated}/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout