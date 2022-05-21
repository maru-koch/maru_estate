
import NavBar from '../components/Nav/Nav'
import Footer from '../components/Footer/footer'
import './layout.css'


const Layout =(props)=>{

    // check if current user is authenticated
    // true -> display logout
    // false -> display login and sign up

    return (
        <div className = 'layout'>
            <NavBar isAuthenticated = {props.isAuthenticated}/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout