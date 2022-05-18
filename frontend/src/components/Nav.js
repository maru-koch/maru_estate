
import { useSelector } from 'react-redux'
import {Nav, Navbar} from "react-bootstrap";
import classes from './navHeader.module.css'
import { logout } from '../reducers/authReducer'
import './nav.css'




// Used in Header component
// comprises of the title, the Navigation links, and the order or purchase button

const NavLink = (props)=>{
    const {isLoggedIn} = useSelector(state => state.auth);
    return (
        <Navbar collapseOnSelect expand="lg" className ={`${classes.header}`}>
            <Navbar.Brand href="/">
                <h1>Maru Estate</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className = "rightNav">
                    <Nav className="nav">
                        <Nav className = "navLinks">
                            <Nav.Link className = {classes.link}  href = 'listing'><p>Properties</p></Nav.Link>
                        </Nav>
                        <Nav>
                            {isLoggedIn? 
                            <Nav>
                                <Nav.Link className = {classes.link} onClick ={logout}><p>Log out</p></Nav.Link>
                            </Nav>:
                            <Nav>
                                <Nav.Link className = {classes.link}  href = "login"><p>Log in</p></Nav.Link>
                                <Nav.Link className = {classes.link}  href = "signup"><p>Sign up</p></Nav.Link>
                            </Nav>}
                        </Nav> 
                    </Nav>     
                </Navbar.Collapse>
        </Navbar>
    )
}

export default NavLink