import {useState} from 'react'
import loader from 'react-loader-spinner'
import PropType from 'prop-type'
import search_api from '../../services/api'
import {search_listings} from '../../reducers/listingsReducer'
import {useDispatch} from 'react-redux'
import {Form, InputGroup, Dropdown, DropdownButton} from 'react-bootstrap'

const initialState = {
    location:'abuja',
    sale_type : "For Sale",
    home_type :'House',
    price : '$0+',
    bedroom : '$0+',
    bathrooms : '0+',
}

const FormListing = ()=>{

    const [formData, setFormData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const onChangeHandler =(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSummitHandler= async (e)=>{

        e.preventDefault();

        const res = await search_api(formData)
        const payload = {data: res.data, loading: loading}

        setLoading(true)
        dispatch(search_listings(payload));

        window.scrollTo(0, 0);
    }

    return (
        <section>
            <Form onSubmit ={onSummitHandler}>
                <InputGroup className = "mb-3">
                    <DropdownButton 
                        name ="location" 
                        title ="Location" 
                        variant ="outline-secondary" 
                        id ="input-group-dropdown-1"
                        onChange = {onChangeHandler}>
                        <Dropdown.Item>Lagos</Dropdown.Item>
                        <Dropdown.Item>Abuja</Dropdown.Item>
                        <Dropdown.Item>Port Harcourt</Dropdown.Item>
                        <Dropdown.Item>Imo</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton 
                        name ="type"
                        title ="Type" 
                        variant ="outline-secondary" 
                        id ="input-group-dropdown-1">
                        <Dropdown.Item>For Sale</Dropdown.Item>
                        <Dropdown.Item>For Rent</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton 
                        name ="price" 
                        title ="Price Range" 
                        variant ="outline-secondary" 
                        id ="input-group-dropdown-1">
                        <Dropdown.Item>0k +</Dropdown.Item>
                        <Dropdown.Item>100k -500k</Dropdown.Item>
                        <Dropdown.Item>500k - 1M</Dropdown.Item>
                        <Dropdown.Item>1M - 5M</Dropdown.Item>
                        <Dropdown.Item>5M - 10M</Dropdown.Item>
                        <Dropdown.Item>10M - 50M</Dropdown.Item>
                        <Dropdown.Item>50M - 100M</Dropdown.Item>
                         <Dropdown.Item>100M +</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
            </Form>
        </section>
    )
}

export default FormListing