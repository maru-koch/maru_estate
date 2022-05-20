
import { useDispatch } from 'react-redux'
import {Nav, Navbar, Container, Figure} from "react-bootstrap";
import { logout } from '../../reducers/authReducer'
import './nav.css'
import Logo from '../../assets/images/logo.png'




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
                <Navbar.Brand href="/" className = "logo">
                   <Figure><Figure.Image src ={Logo} width={300} height={50}/></Figure>
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
                            <Nav className = "links login">
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