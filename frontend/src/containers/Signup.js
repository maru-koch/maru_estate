
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { signup_api } from '../services/api'
import {Form, Button, Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


 

const Signup =()=>{

    const navigate = useNavigate() // to redirect on authentication

    const initialState = {
        name: '', 
        email: '',
        password_1: '',
        password_2: ''
    }
    const [formData, setFormData] = useState(initialState)
    const [response, setResponse] = useState('')
    const [alert, setAlert] = useState('')

    const onChangeHandler =(event)=>{

        // get the name, email, password_1, and password_2 from form

        formData[event.target.name] = event.target.value
        setFormData(formData)
    }

    const signUpHandler = async()=>{

        // use the login from service api to send the user email and password to server
        // check response if login is successful
        // if successful, isRegistered = true
        // redirect
        
        const response = await signup_api(formData);
        if(response?.success){
            setAlert('success')
            setResponse(response.success)
            // if successful, navigate to login page after 3 seconds
            setTimeout(() => {
                navigate('login')
            }, 3000)
        }else{
            setAlert('danger')
            setResponse(response.error)
        }
        
    }

    const onSummitHandler=(event)=>{
        event.preventDefault()
        signUpHandler()
    }
   
  
    return (
    <div>
        <h1>Sign up</h1>
        <p>Create a user account</p>
        <Alert key={alert} variant ={alert}>{response}</Alert>
        <Form onSubmit ={onSummitHandler}>
            {/* name */}
            <Form.Group className="mb-3" controlId="name_input">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter email" name = "name" onChange={onChangeHandler} />
            </Form.Group>
            {/* email */}
            <Form.Group className="mb-3" controlId="email_input">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name = "email" onChange={onChangeHandler} />
            </Form.Group>
            {/* password */}
            <Form.Group className="mb-3" controlId="password_input">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name ="password_1" onChange ={onChangeHandler}/>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name ="password_2" onChange ={onChangeHandler}/>
            </Form.Group>
            {/* confirm password */}
            <Form.Group className="mb-3" controlId="password_2_input">
                <Form.Check type="checkbox" label="Subscribe for newsletter" />
            </Form.Group>
            {/* submit button */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <div>
            <p>Already have an account?<Link to ="login">Login</Link></p>
        </div>
    </div>
    )
}


export default Signup;