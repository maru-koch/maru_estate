
import {useState } from 'react'
import { contact_api } from "../services/api"
import {Form, Button, Alert} from 'react-bootstrap' 

    
const initialState = {
    name:'', 
    email: '',
    subject: '',
    message:''

}
const Contact =()=>{

    const [formData, setFormData] = useState(initialState)
    const [alert, setAlert] = useState('')
    const [response, setResponse] = useState('')

    const onChangeHandler=(event)=>{
        setTimeout(()=>{
            formData[event.target.name] = event.target.value
            setFormData(formData)
        }, 3000)
        
    }

    // useEffect( ()=>{
    //     onChangeHandler()
    // }, [])

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        const response = await contact_api(formData)
        setResponse(response)
        setAlert('success')
        setFormData(initialState)

        if (response?.success){
            setResponse(response.success)
        }else{
            setResponse(response.error)
        }
       
    }

    return (
        <div>
            <h1>Contact Us</h1>
            <Alert key={alert} variant ={alert}>{response}</Alert>
            <Form onSubmit ={onSubmitHandler}>
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
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" name ="subject" onChange ={onChangeHandler}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows = "3" placeholder="type your message" name ="message" onChange ={onChangeHandler}/>
                </Form.Group>
                {/* confirm password */}
                <Form.Group className="mb-3" controlId="password_2_input">
                    <Form.Check type="checkbox" label="Subscribe for newsletter" />
                </Form.Group>
                {/* submit button */}
                <Button variant="primary" type="submit">
                    Send Message
                </Button>
            </Form>
        </div>
    )
}

export default Contact