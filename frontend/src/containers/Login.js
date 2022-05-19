import {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'
import { login_api } from '../services/api'
import { loggedIn } from '../reducers/authReducer'
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
 

const Login =()=>{

    const navigate = useNavigate() // to redirect on authentication

    const [formData, setFormData] = useState({email: '', password: ''})

    const {isAuthenticated} = useSelector(state =>state.auth)

    const dispatch  = useDispatch()

    console.log('User authentication', isAuthenticated)

    if (isAuthenticated) {
        // if user is authenticated, go to the home page
        navigate('/')
    }

    const onChangeHandler =(event)=>{

        // get the email and password from form

        formData[event.target.name] = event.target.value
        setFormData(formData)
        console.log(formData)
    }

    const loginHandler = async()=>{

        // use the login from service api to send the user email and password
        // check response if login is successful
        // if successful, send the access and the refresh token to the store through
        // the login action in the auth reducer
        
        const response = await login_api(formData);
        const access_token = response.data.access;
        const refresh_token = response.data.refresh
        const payload = {
            access: access_token,
            refresh: refresh_token
        }

        dispatch(loggedIn(payload))
    }

    const onSummitHandler=(event)=>{
        event.preventDefault()
        loginHandler()
    }

   
    return (
    <div>
        <h1>Log in</h1>
        <p>Sign into your account</p>
        <Form onSubmit ={onSummitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name = "email" onChange={onChangeHandler} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name ="password" onChange ={onChangeHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
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
    login_api: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool

};

const MapStateToProps = (state)=>({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(MapStateToProps, {login_api})(Login)