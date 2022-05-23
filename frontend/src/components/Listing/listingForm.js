import {useState} from 'react'
import {search_api} from '../../services/api'
import {search_listings} from '../../reducers/listingReducer'
import {useDispatch} from 'react-redux'
import {Form} from 'react-bootstrap'
import classes from './listingForm.module.css'

const initialState = {
    location:'abuja',
    sale_type : "For Sale",
    home_type :'House',
    price : '$0+',
    bedroom : '$0+',
    bathrooms : '0+',
}

const ListingForm = ()=>{

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
        <section className={classes.container}>
            <Form onSubmit ={onSummitHandler} className = {classes.wrapper}>
                <Form.Group className = {classes.form__group}>
                    <Form.Select className = {classes.form__select} 
                        name ="location" 
                        onChange = {onChangeHandler}>
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Port Harcourt</option>
                        <option>Imo</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className = {classes.form__group}>
                    <Form.Select className = {classes.form__select}
                        name ="type"
                        title ="Type" 
                        variant ="outline-secondary" 
                        id ="input-group-dropdown-1">
                        <option>For Sale</option>
                        <option>For Rent</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className = {classes.form__group}>
                    <Form.Select className = {classes.form__select}
                        name ="price" 
                        title ="Price Range" 
                        variant ="outline-secondary" 
                        id ="input-group-dropdown-1">
                        <option>0k +</option>
                        <option>100k -500k</option>
                        <option>500k - 1M</option>
                        <option>1M - 5M</option>
                        <option>5M - 10M</option>
                        <option>10M - 50M</option>
                        <option>50M - 100M</option>
                         <option>100M +</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        </section>
    )
}

export default ListingForm