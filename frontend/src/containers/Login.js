import {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import {login} from '../services/api'
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
 
const Login =({login, isAuthenticated})=>{
    const navigate = useNavigate()

    const [formData, setFormData] = useState({email: '', password: ''})
    const {email, password} = formData;
    const onChange = e=>{
        setFormData({...formData, [e.target.name]: e.target.value});
        console.log(formData);
        }

    const onSummit =e=>{
        e.preventDefault();
        login(email, password);
    }

   
    return (
    <div>
        <Helmet>
            <title>Login Page</title>
            <meta
                name = "description"
                content ="Login page"
            />
        </Helmet>
        <h1>Log in</h1>
        <p>Sign into your account</p>
        <Form onSummit ={onSummit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={onChange} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange ={onChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={()=>navigate('/')}>
                Submit
            </Button>
        </Form>
        <div>
            <p>Don't have an account <Link to ="signup">Register</Link></p>
        </div>
    </div>
    )
}

Login.proptype ={
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool

};

const MapStateToProps = (state)=>({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(MapStateToProps, {login})(Login)