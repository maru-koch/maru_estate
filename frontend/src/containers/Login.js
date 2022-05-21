import {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'
import { login_api } from '../services/api'
import { loggedIn } from '../reducers/authReducer'
import {Form, Button, Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import classes from '../components/Login/login.module.css'
 

const Login =()=>{

    const navigate = useNavigate() // to redirect on authentication

    const [formData, setFormData] = useState({email: '', password: ''})
    const [alert, setAlert] = useState('')
    const [response, setResponse] = useState('')

    const {isAuthenticated} = useSelector(state =>state.auth)

    const dispatch  = useDispatch()

    console.log('User authentication', isAuthenticated)

    if (isAuthenticated) {
        // if user is authenticated, go to the home page
        navigate('/dashboard')
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
        
        const res = await login_api(formData);
        console.log('response:', res)
        if (res){
            setAlert('success')
            setResponse(res.success)
    
        }else{
            setAlert('danger')
            setResponse("Invalid username or password")
        }
       
        const access_token = res.data.access;
        const refresh_token = res.data.refresh

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
        <div className={classes.container}>
            <div className={classes.form__wrapper}>
                <h1>Log in</h1>
                <p>Sign into your account</p>
                <Alert key={alert} variant ={alert} className={classes.form__alert}>{response}</Alert>
                <Form onSubmit ={onSummitHandler} className ={classes.form}>
                    <Form.Group className={classes.form__group} controlId="formBasicEmail">
                        <Form.Label className={classes.form__label}>Email address</Form.Label>
                        <Form.Control className={classes.form__input} type="email" placeholder="Enter email" name = "email" onChange={onChangeHandler} />
                    </Form.Group>
                    <Form.Group className={classes.form__group} controlId="formBasicPassword">
                        <Form.Label className={classes.form__label}>Password</Form.Label>
                        <Form.Control className={classes.form__input} type="password" placeholder="Password" name ="password" onChange ={onChangeHandler}/>
                    </Form.Group>
                    <Form.Group lassName={classes.form__group} controlId="formBasicCheckbox">
                        <Form.Check className={classes.form__label} type="checkbox" label="Remember my Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className ={classes.form__btn}>
                        Submit
                    </Button>
                </Form>
                <div className ={classes.register}>
                    <p>Don't have an account <Link to ="/signup">Register</Link></p>
                </div>
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