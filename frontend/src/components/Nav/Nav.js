
import { useDispatch } from 'react-redux'
import {Nav, Navbar, Container} from "react-bootstrap";
import { logout } from '../../reducers/authReducer'
import './nav.css'




// Used in Header component
// comprises of the title, the Navigation links, and the order or purchase button

const NavLink = ({isAuthenticated})=>{

    const dispatch = useDispatch()

    const logoutHandler = () =>{
        dispatch(logout());
    }

    return (
        <Navbar collapseOnSelect expand="lg" className ="navBar">
            <Container className = "navContainer">
                <Navbar.Brand href="/">
                    <h1 className ="logo">Lettera</h1>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className = "rightNav">
                    <Nav className="nav">
                        <Nav className = "navLinks">
                            {!isAuthenticated?
                            <Nav className = "links menu">
                                <Nav.Link className = "link"  href = 'listings'><p>Buy</p></Nav.Link>
                                <Nav.Link className = "link"   href = 'listings'><p>Rent</p></Nav.Link>
                                <Nav.Link className = "link"   href = 'listings'><p>Sell</p></Nav.Link>
                            </Nav>
                            :
                            // <Nav.Link  href = 'contact'><p>Contact Us</p></Nav.Link>
                            ''
                            }
                        </Nav>
                        <Nav>
                            {isAuthenticated? 
                            <Nav>
                                <Nav.Link className = "link"  onClick ={logoutHandler} href = "/"><p>Log out</p></Nav.Link>
                            </Nav>:
                            <Nav className = "links">
                                <Nav.Link className = "link"   href = "login"><p>Log in</p></Nav.Link>
                                <Nav.Link className = "link"   href = "signup"><p>Sign up</p></Nav.Link>
                            </Nav>}
                        </Nav> 
                    </Nav>     
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavLink